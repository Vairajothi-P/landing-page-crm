"use client";
import { useState } from "react";

const OPERATIONS = {
  accounting: [
    "Invoices & Quotations",
    "Bills & Expenses",
    "E-Invoice & E-Way Bills",
    "Inventory Management & Delivery Challans",
    "GSTR Filing",
    "Balance Sheet, P&L",
    "Cost Analysis",
    "Price Lists",
    "Order Management"
  ],
  manufacturing: [
    "Work Orders",
    "Bill of Materials (BOM)",
    "Production Planning",
    "Real-Time Inventory",
    "Multi-warehouse Tracking",
    "Order Management",
    "Purchase Orders",
    "RFQs",
    "Vendor Management",
    "Stock Ledger & Batch Tracking"
  ],
};

const MANAGEMENT = {
  crm: [
    "Leads & Contacts",
    "Deal & Pipeline Management",
    "Ticketing System",
    "Tasks & Follow-Ups",
    "Email Integration",
    "Goals & Campaigns (CRM-related)",
    "IVR & Cloud Telephony",
    "Call Recordings"
  ],
  hrms: [
    "Salary Structure",
    "Attendance Tracking (Selfie, Biometric)",
    "Payroll Processing",
    "Tax (PF/ESI) Compliance",
    "Payslip Generation",
    "Leave Management"
  ],
  project: [
    "Task Assignment",
    "Priority Levels",
    "Team Collaboration",
    "Time Tracking",
    "Image/Video Attachments",
    "Progress Reports"
  ],
  field_service: [
    "Work Orders",
    "Service Locations",
    "Technician Scheduling",
    "Service History",
    "Customer Feedback",
    "Real-Time Service Updates"
  ]
};

const GROWTH = {
  gtm_engine: [
    "Demand-Based Lead Reach-out",
    "AI Lead Generation Workflows",
    "Prioritization by Deal Score",
    "Automated Follow-ups",
    "Predictive Nurturing"
  ],
  marketing: [
    "Personalized Email Campaigns",
    "WhatsApp & SMS Marketing",
    "Lead Nurturing Sequences",
    "Customer Retargeting",
    "AI-based Segmentation"
  ],
  ad_exchange: [
    "Launch Ads Across Google, Meta, LinkedIn",
    "Programmatic Ad Exchange Integration",
    "AI Budget Optimization",
    "Ad → Lead → Deal Tracking",
    "Real-Time ROAS Analytics",
    "Auto-generated Creatives & Ad Copy"
  ],
  revenue: [
    "Campaign ROI Dashboard",
    "Customer Acquisition Cost (CAC)",
    "Funnel Analytics",
    "Pipeline Revenue Forecasting",
    "Attribution (Channel → Lead → Revenue)"
  ]
};

export default function FeaturesMegaMenu() {
const [hoveredOperation, setHoveredOperation] = useState(null);

  return (
    <div className="relative group">
      {/* Navbar Button */}
      <button className="inline-flex items-center gap-3 rounded-full border border-white/8 px-5 py-3 text-slate-200 hover:bg-white/5 transition cursor-pointer">
        Features
      </button>

      {/* Mega Menu */}
      <div
        className="absolute left-1/2 top-full z-50 w-screen max-w-4xl
                   -translate-x-1/2 mt-2 opacity-0 pointer-events-none
                   group-hover:opacity-100 group-hover:pointer-events-auto
                   transition-all duration-200"
      >
        <div className="bg-black rounded-xl shadow-xl border border-white p-10">
          <div className="grid grid-cols-3 gap-16">

            {/* LEFT SIDE */}
            <div>
              <h3 className="text-2xl font-bold mb-6 uppercase">
                OPerations
              </h3>

              <div className="text-sm">
                <ul className="space-y-3">
                  <li
                    onMouseEnter={() => setHoveredOperation("accounting")}
                    onMouseLeave={() => setHoveredOperation(null)}
                    className="hover:text-white hover:underline cursor-pointer"
                  >
                    Accounting & Finance
                    {hoveredOperation === "accounting" && (
      <div className="absolute top-full left-0 mt-2 bg-gray-900 p-4 rounded-xl shadow-lg w-64 z-50">
        <ul className="space-y-2 text-sm">
          {OPERATIONS.accounting.map((item) => (
            <li key={item} className="hover:text-white cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    )}
                  </li>

                  <li className="hover:text-white hover:underline cursor-pointer">
                    Manufacturing Operations
                  </li>
                </ul>
              </div>
            </div>
            {/* CENTER */}
            <div>
              <h3 className="text-2xl font-bold mb-6 uppercase">
                Management
              </h3>

              <div className="text-sm">
                <ul className="space-y-3">
                  <li className="hover:text-white hover:underline cursor-pointer">
                    CRM (Customer Management)
                  </li>
                  <li className="hover:text-white hover:underline cursor-pointer">
                    HRMS & Payroll
                  </li>
                  <li className="hover:text-white hover:underline cursor-pointer">
                    Task & Project Management
                  </li>
                  <li className="hover:text-white hover:underline cursor-pointer">
                    Field Service Management
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <h3 className="text-2xl font-bold mb-6 uppercase">
                Growth
              </h3>

              <div className="text-sm">
                <ul className="space-y-3">
                  <li className="hover:text-white hover:underline cursor-pointer">
                    GTM Engine
                  </li>
                  <li className="hover:text-white hover:underline cursor-pointer">
                    Marketing Automation
                  </li>
                  <li className="hover:text-white hover:underline cursor-pointer">
                    Ad Exchange & GTM Engine
                  </li>
                  <li className="hover:text-white hover:underline cursor-pointer">
                    Revenue Intelligence
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
