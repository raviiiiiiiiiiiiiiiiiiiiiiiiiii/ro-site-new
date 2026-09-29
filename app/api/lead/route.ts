import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface LeadPayload {
  fullName?: string;
  mobileNumber?: string;
  pinCode?: string;
  selectedBrand?: string;
  serviceType?: string;
  sourcePage?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: LeadPayload = await req.json();

    const fullName = (body.fullName || '').trim();
    const rawMobile = (body.mobileNumber || '').replace(/\D/g, '');
    let mobileNumber = rawMobile;
    if (mobileNumber.length > 10 && mobileNumber.startsWith('91')) {
      mobileNumber = mobileNumber.slice(2);
    } else if (mobileNumber.length > 10 && mobileNumber.startsWith('0')) {
      mobileNumber = mobileNumber.slice(1);
    }
    mobileNumber = mobileNumber.slice(0, 10);

    const pinCode = (body.pinCode || '').trim() || 'Bangalore';
    const selectedBrand = (body.selectedBrand || '').trim() || 'General RO';
    const serviceType = (body.serviceType || '').trim() || 'RO Service / Repair';
    const sourcePage = (body.sourcePage || '').trim() || 'Website';

    // Validation
    if (!fullName) {
      return NextResponse.json(
        { success: false, error: 'Full name is required' },
        { status: 400 }
      );
    }

    if (!mobileNumber || mobileNumber.length !== 10 || !/^[6-9]\d{9}$/.test(mobileNumber)) {
      return NextResponse.json(
        { success: false, error: 'Valid 10-digit mobile number starting with 6, 7, 8, or 9 is required' },
        { status: 400 }
      );
    }

    const referenceId = `RO-${Math.floor(100000 + Math.random() * 900000)}`;
    const timestamp = new Date().toISOString();

    const leadRecord = {
      referenceId,
      timestamp,
      fullName,
      mobileNumber,
      pinCode,
      selectedBrand,
      serviceType,
      sourcePage,
    };

    // Log the lead
    console.log('-------------------------------------------');
    console.log(`[NEW RO SERVICE BOOKING] ID: ${referenceId}`);
    console.log(`Customer: ${fullName} (+91 ${mobileNumber})`);
    console.log(`Brand: ${selectedBrand} | Service: ${serviceType}`);
    console.log(`Pincode: ${pinCode} | Source: ${sourcePage}`);
    console.log('-------------------------------------------');

    // Attempt local storage persistence for backup
    try {
      const storageDir = '/tmp';
      const storageFile = path.join(storageDir, 'ro_leads.json');
      let existingLeads: any[] = [];
      if (fs.existsSync(storageFile)) {
        try {
          const content = fs.readFileSync(storageFile, 'utf8');
          existingLeads = JSON.parse(content);
        } catch {
          existingLeads = [];
        }
      }
      existingLeads.unshift(leadRecord);
      if (existingLeads.length > 200) existingLeads = existingLeads.slice(0, 200);
      fs.writeFileSync(storageFile, JSON.stringify(existingLeads, null, 2), 'utf8');
    } catch (saveErr) {
      console.warn('Could not persist lead to /tmp backup file:', saveErr);
    }

    // Try forwarding to FormSubmit with a fast timeout (3s) so it never blocks the user
    try {
      const formSubmitEmail = 'syedsmaula786@gmail.com';
      const formSubmitUrl = `https://formsubmit.co/ajax/${formSubmitEmail}`;
      
      // Fire-and-forget with short timeout
      fetch(formSubmitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New RO Lead #${referenceId}: ${fullName} (${selectedBrand})`,
          referenceId,
          fullName,
          mobileNumber: `+91 ${mobileNumber}`,
          brand: selectedBrand,
          service: serviceType,
          pincode: pinCode,
          sourcePage,
          bookedAt: timestamp,
          _template: 'table',
          _captcha: 'false',
        }),
        signal: AbortSignal.timeout(3500),
      }).catch((forwardErr) => {
        console.warn('Background forward to FormSubmit timed out or failed (lead is still recorded):', forwardErr?.message);
      });
    } catch (dispatchErr) {
      console.warn('Error initiating background forward:', dispatchErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Booking confirmed successfully',
      lead: leadRecord,
    });
  } catch (err: any) {
    console.error('Error handling lead submission:', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing booking' },
      { status: 500 }
    );
  }
}
