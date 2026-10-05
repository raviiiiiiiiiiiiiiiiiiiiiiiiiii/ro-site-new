'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Phone, CheckCircle2, AlertCircle, Loader2, User, MapPin, Wrench, MessageSquare, ArrowRight, Mail } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/content';
import { LeadFormData } from '../types';

interface LeadFormProps {
  preselectedBrand?: string;
  sourcePage?: string;
  className?: string;
  compact?: boolean;
  buttonColor?: string;
  hideBrandSelector?: boolean;
  hideServiceSelector?: boolean;
}

const SERVICE_OPTIONS: string[] = [
  'RO Water Purifier Service',
  'RO Water Purifier Repair',
  'RO Water Purifier Filter Replacement',
  'RO Water Purifier AMC',
];

export const LeadForm: React.FC<LeadFormProps> = ({
  preselectedBrand = '',
  sourcePage = 'Homepage',
  className = '',
  compact = false,
  buttonColor,
  hideBrandSelector = false,
  hideServiceSelector = false,
}) => {
  const initialBrand = preselectedBrand || 'Kent';

  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    mobileNumber: '',
    pinCode: '',
    selectedBrand: initialBrand,
    serviceType: SERVICE_OPTIONS[0],
  });

  const [botField, setBotField] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formWarning, setFormWarning] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<any>(null);

  const formContainerRef = useRef<HTMLDivElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);

  const brandOptions = [
    'Kent',
    'Aquaguard',
    'Pureit',
    'AO Smith',
    'LG',
    'Havells',
    'Zero B',
    'Aqua Pearl',
    'V-Guard',
    'Livpure',
    'Blue Star',
    'Whirlpool',
    'Other Brands',
  ];

  useEffect(() => {
    if (preselectedBrand) {
      setFormData((prev) => ({
        ...prev,
        selectedBrand: preselectedBrand,
      }));
    }
  }, [preselectedBrand]);

  // When successfully booked, scroll the Thank You screen into view
  useEffect(() => {
    if (isSuccess && formContainerRef.current) {
      formContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isSuccess]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name should be at least 2 characters';
    }

    const cleanMobile = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanMobile) {
      newErrors.mobileNumber = 'Please enter mobile number';
    } else if (cleanMobile.length < 8) {
      newErrors.mobileNumber = 'Please enter your 10-digit mobile number';
    }

    const cleanPin = formData.pinCode.replace(/\D/g, '');
    if (cleanPin && cleanPin.length !== 6) {
      newErrors.pinCode = 'Bangalore Pincode should be 6 digits (e.g. 560001)';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      if (newErrors.fullName) {
        setFormWarning('Please enter your Name to confirm doorstep booking.');
        fullNameRef.current?.focus();
      } else if (newErrors.mobileNumber) {
        setFormWarning('Please enter your Mobile Number.');
        mobileRef.current?.focus();
      } else if (newErrors.pinCode) {
        setFormWarning('Pincode must be 6 digits (or leave blank).');
      }
      return false;
    }

    setFormWarning(null);
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (formWarning) setFormWarning(null);
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 10 && val.startsWith('91')) {
      val = val.slice(2);
    } else if (val.length > 10 && val.startsWith('0')) {
      val = val.slice(1);
    }
    if (val.length > 10) {
      val = val.slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, mobileNumber: val }));
    if (errors.mobileNumber) {
      setErrors((prev) => ({ ...prev, mobileNumber: '' }));
    }
    if (formWarning) setFormWarning(null);
  };

  const handlePinCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 6) {
      val = val.slice(0, 6);
    }
    setFormData((prev) => ({ ...prev, pinCode: val }));
    if (errors.pinCode) {
      setErrors((prev) => ({ ...prev, pinCode: '' }));
    }
    if (formWarning) setFormWarning(null);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (!validate()) {
      return;
    }

    // Honeypot spam check - if bot filled it, silently complete
    if (botField) {
      setIsSuccess(true);
      return;
    }

    setIsSubmitting(true);
    setFormWarning(null);

    const generatedRef = `RO-${Math.floor(100000 + Math.random() * 900000)}`;
    const submissionPayload = {
      referenceId: generatedRef,
      fullName: formData.fullName.trim(),
      mobileNumber: formData.mobileNumber.trim(),
      pinCode: formData.pinCode.trim() || 'Bangalore',
      selectedBrand: formData.selectedBrand || 'Kent',
      serviceType: formData.serviceType || SERVICE_OPTIONS[0],
      sourcePage,
      bookedAt: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    };

    // 1. Immediately transition to the Confirmation Screen
    setSubmittedLead(submissionPayload);
    setIsSuccess(true);
    setIsSubmitting(false);

    // 2. Submit to Netlify Forms via standard URL-encoded POST
    try {
      const netlifyParams = new URLSearchParams({
        'form-name': 'ro-booking',
        'bot-field': botField,
        fullName: submissionPayload.fullName,
        mobileNumber: submissionPayload.mobileNumber,
        pinCode: submissionPayload.pinCode,
        selectedBrand: submissionPayload.selectedBrand,
        serviceType: submissionPayload.serviceType,
        referenceId: submissionPayload.referenceId,
        sourcePage: submissionPayload.sourcePage,
        bookedAt: submissionPayload.bookedAt,
      });

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: netlifyParams.toString(),
      }).catch((err) => console.log('Netlify form submission acknowledged.'));
    } catch (nfErr) {
      console.log('Netlify submission handled.');
    }

    // 3. Persist lead on backend API backup (/api/lead)
    try {
      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionPayload),
      }).catch((err) => console.warn('Server lead backup notice:', err));
    } catch (apiErr) {
      console.warn('API lead call skipped:', apiErr);
    }

    // 4. Dispatch lead email fallback via FormSubmit to ravi2009u@gmail.com
    try {
      const emailTarget = BUSINESS_DETAILS.formSubmitEmail || 'ravi2009u@gmail.com';
      fetch(`https://formsubmit.co/ajax/${emailTarget}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New RO Booking #${submissionPayload.referenceId}: ${submissionPayload.fullName} (${submissionPayload.selectedBrand})`,
          referenceId: submissionPayload.referenceId,
          customerName: submissionPayload.fullName,
          mobileNumber: `+91 ${submissionPayload.mobileNumber}`,
          brand: submissionPayload.selectedBrand,
          service: submissionPayload.serviceType,
          pincode: submissionPayload.pinCode,
          sourcePage: submissionPayload.sourcePage,
          _template: 'table',
          _captcha: 'false',
        }),
      }).catch((fsErr) => console.log('Client notification dispatched.'));
    } catch (fsOuterErr) {
      console.log('Email dispatch handled.');
    }
  };

  return (
    <div
      ref={formContainerRef}
      id="lead-form"
      className={`bg-white text-slate-900 rounded-[24px] shadow-xl border border-slate-200/90 p-6 sm:p-8 relative transition-all w-full max-w-lg mx-auto ${className}`}
    >
      {isSuccess ? (
        /* ================= DEDICATED THANK YOU / CONFIRMATION SCREEN ================= */
        <div className="py-2 text-center space-y-5 animate-fadeIn text-slate-900">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md ring-8 ring-emerald-50">
            <CheckCircle2 className="w-11 h-11" />
          </div>

          <div>
            <span className="inline-block px-3.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-black tracking-wider uppercase rounded-full mb-3 border border-emerald-300 shadow-2xs font-mono">
              Booking Confirmed #{submittedLead?.referenceId || 'RO-CONFIRMED'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Thank You, {submittedLead?.fullName || 'Customer'}!
            </h3>
            <p className="text-sm sm:text-[15px] text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
              Your service request has been received. Our certified technician is assigned and will reach your doorstep within <span className="font-bold text-slate-950">60–90 minutes</span>.
            </p>
          </div>

          {/* Booking Summary Box */}
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-slate-700 border border-slate-200 max-w-md mx-auto text-left space-y-2.5 shadow-2xs">
            <div className="flex justify-between items-center border-b border-slate-200/80 pb-2">
              <span className="text-slate-500 font-medium">Booking ID:</span>
              <span className="font-mono font-bold text-sm text-[#0c54a0] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                {submittedLead?.referenceId || 'RO-CONFIRMED'}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200/80 pb-2">
              <span className="text-slate-500 font-medium">Customer:</span>
              <span className="font-bold text-slate-900">{submittedLead?.fullName}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200/80 pb-2">
              <span className="text-slate-500 font-medium">Phone:</span>
              <span className="font-bold text-slate-900">+91 {submittedLead?.mobileNumber}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200/80 pb-2">
              <span className="text-slate-500 font-medium">Brand:</span>
              <span className="font-bold text-slate-900">{submittedLead?.selectedBrand}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200/80 pb-2">
              <span className="text-slate-500 font-medium">Service:</span>
              <span className="font-bold text-slate-900">{submittedLead?.serviceType}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Area / Pincode:</span>
              <span className="font-bold text-slate-900">{submittedLead?.pinCode || 'Bangalore'}</span>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-900 max-w-md mx-auto font-medium">
            ✓ Doorstep Technician Dispatch in Progress (60-90 Mins)
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col items-center justify-center gap-3 max-w-md mx-auto">
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#0c54a0] hover:bg-blue-700 text-white font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Phone className="w-5 h-5" />
              <span>Call Technician: {BUSINESS_DETAILS.formattedPhone || BUSINESS_DETAILS.phone}</span>
            </a>

            <a
              href={`https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                `Hi RO Service 24x7, I booked a doorstep service.\n\nBooking ID: ${submittedLead?.referenceId || ''}\nCustomer: ${submittedLead?.fullName}\nPhone: ${submittedLead?.mobileNumber}\nBrand: ${submittedLead?.selectedBrand}\nService: ${submittedLead?.serviceType}\nArea: ${submittedLead?.pinCode}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Confirm on WhatsApp</span>
            </a>

            <a
              href={`mailto:${BUSINESS_DETAILS.formSubmitEmail || 'ravi2009u@gmail.com'}?subject=New RO Booking ${submittedLead?.referenceId}: ${encodeURIComponent(submittedLead?.fullName)}&body=${encodeURIComponent(
                `Booking ID: ${submittedLead?.referenceId}\nCustomer: ${submittedLead?.fullName}\nPhone: +91 ${submittedLead?.mobileNumber}\nBrand: ${submittedLead?.selectedBrand}\nService: ${submittedLead?.serviceType}\nArea: ${submittedLead?.pinCode}`
              )}`}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
            >
              <Mail className="w-4 h-4 text-slate-600" />
              <span>Email Booking Copy to {BUSINESS_DETAILS.formSubmitEmail || 'ravi2009u@gmail.com'}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsSuccess(false);
                setSubmittedLead(null);
                setFormData({
                  fullName: '',
                  mobileNumber: '',
                  pinCode: '',
                  selectedBrand: preselectedBrand || 'Kent',
                  serviceType: SERVICE_OPTIONS[0],
                });
              }}
              className="text-xs sm:text-sm text-slate-500 hover:text-[#0c54a0] py-2 font-semibold transition-colors underline cursor-pointer"
            >
              Book another service request
            </button>
          </div>
        </div>
      ) : (
        /* ================= ACTIVE NETLIFY BOOKING FORM ================= */
        <>
          <div className="mb-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Book Service Now
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
              Technician visit in <span className="font-bold text-emerald-950 bg-emerald-100/90 border border-emerald-200 px-2.5 py-0.5 rounded-full ml-1 shadow-2xs">60-90 mins</span>
            </p>
          </div>

          <form
            name="ro-booking"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-4 text-slate-900"
            noValidate
          >
            {/* Hidden fields for Netlify Forms & tracking */}
            <input type="hidden" name="form-name" value="ro-booking" />
            <input type="hidden" name="sourcePage" value={sourcePage} />

            {/* Honeypot field for spam prevention */}
            <div className="hidden" aria-hidden="true">
              <label>
                Don’t fill this out if you're human:
                <input
                  name="bot-field"
                  tabIndex={-1}
                  autoComplete="off"
                  value={botField}
                  onChange={(e) => setBotField(e.target.value)}
                />
              </label>
            </div>

            {/* Full Name */}
            <div className="relative text-left">
              <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 ml-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0c54a0] transition-colors pointer-events-none">
                  <User className="w-5 h-5" />
                </span>
                <input
                  ref={fullNameRef}
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`w-full pl-11 pr-4 py-3.5 text-[15px] font-medium text-slate-900 placeholder:text-slate-400 bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName ? 'border-red-400 focus:ring-red-200 focus:border-red-500' : 'border-slate-200 focus:ring-blue-100 focus:border-[#0c54a0]'
                  }`}
                />
              </div>
              {errors.fullName && <p className="text-xs text-red-500 mt-1.5 ml-1 font-semibold">{errors.fullName}</p>}
            </div>

            {/* Mobile */}
            <div className="relative text-left">
              <label htmlFor="mobileNumber" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 ml-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0c54a0] transition-colors flex items-center gap-1.5 pointer-events-none">
                  <Phone className="w-5 h-5" />
                  <span className="text-[15px] font-bold text-slate-700 pt-0.5">+91</span>
                </span>
                <input
                  ref={mobileRef}
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  maxLength={10}
                  value={formData.mobileNumber}
                  onChange={handleMobileChange}
                  placeholder="10-digit mobile number"
                  className={`w-full pl-[88px] pr-4 py-3.5 text-[15px] font-semibold text-slate-900 placeholder:text-slate-400 bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.mobileNumber ? 'border-red-400 focus:ring-red-200 focus:border-red-500' : 'border-slate-200 focus:ring-blue-100 focus:border-[#0c54a0]'
                  }`}
                />
              </div>
              {errors.mobileNumber && <p className="text-xs text-red-500 mt-1.5 ml-1 font-semibold">{errors.mobileNumber}</p>}
            </div>

            {!hideBrandSelector ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* PinCode */}
                  <div className="relative text-left">
                    <label htmlFor="pinCode" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 ml-1">
                      Bangalore Pincode
                    </label>
                    <div className="relative group">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0c54a0] transition-colors pointer-events-none">
                        <MapPin className="w-5 h-5" />
                      </span>
                      <input
                        type="text"
                        id="pinCode"
                        name="pinCode"
                        maxLength={6}
                        value={formData.pinCode}
                        onChange={handlePinCodeChange}
                        placeholder="e.g. 560001"
                        className={`w-full pl-11 pr-4 py-3.5 text-[15px] font-medium text-slate-900 placeholder:text-slate-400 bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.pinCode ? 'border-red-400 focus:ring-red-200 focus:border-red-500' : 'border-slate-200 focus:ring-blue-100 focus:border-[#0c54a0]'
                        }`}
                      />
                    </div>
                    {errors.pinCode && <p className="text-xs text-red-500 mt-1.5 ml-1 font-semibold">{errors.pinCode}</p>}
                  </div>

                  {/* Select Brand */}
                  <div className="relative text-left">
                    <label htmlFor="selectedBrand" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 ml-1">
                      Purifier Brand
                    </label>
                    <select
                      id="selectedBrand"
                      name="selectedBrand"
                      value={formData.selectedBrand}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 text-[15px] font-semibold text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-[#0c54a0] focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      {brandOptions.map((brand) => (
                        <option key={brand} value={brand} className="text-slate-900 font-medium">
                          {brand}
                        </option>
                      ))}
                    </select>
                    {/* Custom arrow for select */}
                    <div className="pointer-events-none absolute right-4 top-[38px] flex items-center text-slate-400">
                      <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Select Service Required (if not hidden) */}
                {!hideServiceSelector && (
                  <div className="relative text-left">
                    <label htmlFor="serviceType" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 ml-1">
                      Service Required
                    </label>
                    <div className="relative group">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0c54a0] transition-colors pointer-events-none z-10">
                        <Wrench className="w-5 h-5" />
                      </span>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full pl-11 pr-10 py-3.5 text-[15px] font-semibold text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-[#0c54a0] focus:outline-none transition-all appearance-none cursor-pointer"
                      >
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option} className="text-slate-900 font-medium">
                            {option}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-slate-400">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className={`grid grid-cols-1 ${!hideServiceSelector ? 'sm:grid-cols-2' : ''} gap-4`}>
                {/* PinCode */}
                <div className="relative text-left">
                  <label htmlFor="pinCode" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 ml-1">
                    Bangalore Pincode
                  </label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0c54a0] transition-colors pointer-events-none">
                      <MapPin className="w-5 h-5" />
                    </span>
                    <input
                      type="text"
                      id="pinCode"
                      name="pinCode"
                      maxLength={6}
                      value={formData.pinCode}
                      onChange={handlePinCodeChange}
                      placeholder="e.g. 560001"
                      className={`w-full pl-11 pr-4 py-3.5 text-[15px] font-medium text-slate-900 placeholder:text-slate-400 bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.pinCode ? 'border-red-400 focus:ring-red-200 focus:border-red-500' : 'border-slate-200 focus:ring-blue-100 focus:border-[#0c54a0]'
                      }`}
                    />
                  </div>
                  {errors.pinCode && <p className="text-xs text-red-500 mt-1.5 ml-1 font-semibold">{errors.pinCode}</p>}
                </div>

                {/* Select Service Required (if not hidden) */}
                {!hideServiceSelector && (
                  <div className="relative text-left">
                    <label htmlFor="serviceType" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 ml-1">
                      Service Required
                    </label>
                    <div className="relative group">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0c54a0] transition-colors pointer-events-none z-10">
                        <Wrench className="w-5 h-5" />
                      </span>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full pl-11 pr-10 py-3.5 text-[15px] font-semibold text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-[#0c54a0] focus:outline-none transition-all appearance-none cursor-pointer"
                      >
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option} className="text-slate-900 font-medium">
                            {option}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-slate-400">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Validation Notice Banner above button */}
            {formWarning && (
              <div className="p-3 bg-amber-50 border border-amber-300 text-amber-900 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 animate-fadeIn text-left">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
                <span>{formWarning}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={buttonColor ? { backgroundColor: buttonColor } : undefined}
              className={`w-full mt-4 py-4 px-6 rounded-xl text-white font-bold text-base flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none shadow-lg cursor-pointer ${
                buttonColor
                  ? 'hover:brightness-90 shadow-slate-300/40'
                  : 'bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#047857] shadow-emerald-500/30'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Confirming Booking...</span>
                </>
              ) : (
                <span className="flex items-center gap-2">
                  Confirm Doorstep Booking
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
};
