import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const storageFile = path.join('/tmp', 'ro_leads.json');
    if (fs.existsSync(storageFile)) {
      const content = fs.readFileSync(storageFile, 'utf8');
      const leads = JSON.parse(content);
      return NextResponse.json({ success: true, leads });
    }
    return NextResponse.json({ success: true, leads: [] });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
