'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Phone, Calendar, MapPin, Wrench, RefreshCw, ArrowLeft, ShieldCheck, Mail } from 'lucide-react';

interface Lead {
  referenceId: string;
  timestamp: string;
  fullName: string;
  mobileNumber: string;
  pinCode: string;
  selectedBrand: string;
  serviceType: string;
  sourcePage: string;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (data.success && Array.isArray(data.leads)) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error('Failed to load leads:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 mb-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Website
            </Link>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-7 h-7 text-emerald-600" />
              RO Service Booking Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Real-time log of customer service requests submitted across the website.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchLeads}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-all shadow-xs cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              Refresh Leads ({leads.length})
            </button>
          </div>
        </div>

        {/* Lead List */}
        {loading ? (
          <div className="text-center py-20 text-slate-500 text-sm font-medium">
            Loading bookings...
          </div>
        ) : leads.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
            <p className="text-slate-600 font-semibold text-base">No bookings received yet.</p>
            <p className="text-slate-400 text-xs mt-1">When a customer fills the booking form, it will appear here instantly.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {leads.map((lead, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold bg-blue-50 text-[#0c54a0] border border-blue-200 px-2.5 py-0.5 rounded-full">
                      #{lead.referenceId}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {lead.timestamp ? new Date(lead.timestamp).toLocaleString('en-IN') : 'Just now'}
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                      Source: {lead.sourcePage || 'Website'}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900">
                    {lead.fullName}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600">
                    <span className="inline-flex items-center gap-1 font-bold text-slate-900">
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                      +91 {lead.mobileNumber}
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium text-slate-700">
                      <Wrench className="w-3.5 h-3.5 text-sky-600" />
                      {lead.selectedBrand} • {lead.serviceType}
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      Pincode: {lead.pinCode || 'Bangalore'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <a
                    href={`tel:${lead.mobileNumber}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Customer
                  </a>
                  <a
                    href={`https://wa.me/91${lead.mobileNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
                      `Hi ${lead.fullName}, thank you for booking RO service with RO Service 24x7 (Ref: ${lead.referenceId}). Our technician is assigned and on the way.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
