"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";

type SubFeature = {
  id: string;
  title: string;
  description: string;
  image: string; // placeholder path or URL
  features: string[];
  benefits: string[];
  layer: "operations" | "management" | "growth";
};

type Layer = {
  id: "operations" | "management" | "growth";
  title: string;
  description: string;
  subFeatures: Pick<SubFeature, "id" | "title">[];
};

const LAYERS: Layer[] = [
  {
    id: "operations",
    title: "Operations Layer",
    description:
      "Run core operations with precision—finance, inventory, purchasing, and production.",
    subFeatures: [
      { id: "accounting-finance", title: "Accounting & Finance" },
      { id: "Manufacturing-Operations", title: "Manufacturing Operations" },
    ],
  },
  {
    id: "management",
    title: "Management Layer",
    description:
      "Empower teams with CRM, HRMS, and project execution to deliver results faster.",
    subFeatures: [
      { id: "crm", title: "CRM (Customer Management)" },
      { id: "hrms-payroll", title: "HRMS & Payroll" },
      { id: "Task-Project-Management", title: "Task & Project Management" },
      { id: "Field-Service-Management", title: "Field Service Management" },
    ],
  },
  {
    id: "growth",
    title: "Growth Layer",
    description:
      "Scale acquisition and revenue with AI GTM and automated campaign orchestration.",
    subFeatures: [
      { id: "GTM-Engine", title: "GTM Engine" },
      { id: "Marketing-Automation", title: "Marketing Automation" },
      { id: "Ad-Exchange-GTM-Engine", title: "Ad Exchange & GTM Engine" },
      { id: "Revenue-Intelligence", title: "Revenue Intelligence" },
    ],
  },
];

const SUB_FEATURES: SubFeature[] = [
  // Example data (full)
  {
    id: "accounting-finance",
    title: "Accounting & Finance",
    description:
      "Automate invoicing, expense tracking, and compliance, gain real-time financial insights, and improve accuracy in reporting and decision-making.",
    image: "/acc.jpg",
    features: [
      "● Invoices & Quotations",
      "● Bills & Expenses",
      "● E-Invoice & E-Way Bills",
      "● GSTR Filing",
      "● Balance Sheet, P&L",
      "● Cost Analysis",
      "● Price Lists",
      "● Order Management",
    ],
    benefits: [
      "● Ensure faster billing and accurate revenue tracking with streamlined invoices and quotations",
      "● Gain better cost control and visibility by managing bills, expenses, and price lists centrally",
      "● Stay compliant and audit-ready with automated e-invoicing, e-way bills, and GSTR filings",
      "● Make informed financial decisions using real-time balance sheets, P&L statements, and cost analysis",
    ],
    layer: "operations",
  },
  // Additional supported sub-features (placeholders)
  {
    id: "Manufacturing-Operations",
    title: "Manufacturing Operations ",
    description:
      "Monitor production, materials, and work orders in real time, optimize scheduling, reduce downtime, and control costs efficiently.",
    image: "/manufacturing.jpg",
    features: [
      "● Work Orders",
      "● Bill of Materials (BOM)",
      "● Production Planning",
      "● Real-Time Inventory",
      "● Multi-warehouse Tracking",
      "● OrderManagement",
      "● Purchase Orders",
      "● RFQs",
      "● Vendor Management",
      "● Stock Ledger & Batch Tracking",
    ],
    benefits: [
      "● Improve production efficiency and on-time delivery with structured work orders, BOM control, and optimized production planning",
      "● Reduce stockouts, overproduction, and wastage through real-time inventory visibility and multi-warehouse tracking",
      "● Lower procurement costs and lead times using streamlined purchase orders, RFQs, and vendor management",
      "● Maintain full traceability and quality control with stock ledgers and batch-level tracking",
    ],
    layer: "operations",
  },
  {
    id: "crm",
    title: "CRM (Customer Management)",
    description:
      "Centralize leads, contacts, and deals, automate follow-ups, and gain actionable insights to boost sales efficiency and customer satisfaction.",
    image: "/crm.jpg",
    features: [
      "● Leads & Contacts",
      "● Deal & Pipeline Management",
      "● Ticketing System",
      "● Tasks & Follow-Ups",
      "● Email Integration",
      "● Goals & Campaigns (CRM-related)",
      "● IVR & Cloud Telephony",
      "● Call Recordings",
    ],
    benefits: [
      "● Increase lead conversion and deal closure rates with centralized leads, contacts, and pipeline visibility",
      "● Improve customer satisfaction and retention through efficient ticketing, timely task management, and follow-ups",
      "● Boost sales team productivity and accountability with integrated emails, goals, and campaign tracking",
      "● Enhance communication effectiveness using IVR, cloud telephony, and call recordings for better engagement and quality control",
    ],
    layer: "management",
  },
  {
    id: "hrms-payroll",
    title: "HRMS & Payroll",
    description:
      "Manage employee records, leave, performance, and payroll compliance in one place.",
    image: "/hrms.jpg",
    features: [
      "● Salary Structure ",
      "● Attendance Tracking (Selfie, Biometric)",
      "● Payroll Processing ",
      "● Tax (PF/ESI) Compliance",
      "● Payslip Generation ",
      "● Leave Management",
    ],
    benefits: [
      "● Ensure timely, accurate, and compliant payroll processing with automated salary structures and statutory calculations",
      "● Reduce manual HR workload and errors using real-time attendance tracking and integrated payroll workflows",
      "● Improve employee transparency and satisfaction through self-service payslips, leave visibility, and attendance records",
      "● Stay audit-ready and compliant with built-in PF/ESI tax management and detailed payroll reports",
    ],
    layer: "management",
  },
  {
    id: "Task-Project-Management",
    title: "Task & Project Management",
    description:
      "Assign and track tasks, prioritize work, and collaborate efficiently to ensure on-time delivery and maximize team productivity.",
    image: "/task.jpg",
    features: [
      "● Task Assignment",
      "● Priority Levels",
      "● Team Collaboration",
      "● Time Tracking",
      "● Image/Video Attachments",
      "● Progress Reports",
      "● Deadline & Milestone Management",
      "● Role-Based Access Control",
    ],
    benefits: [
      "● Improve team productivity and on-time delivery with clear task assignments, priorities, and collaboration",
      "● Enhance planning accuracy and accountability through real-time time tracking and progress visibility",
      "● Reduce miscommunication and rework by sharing image and video attachments directly within tasks",
      "● Gain actionable project insights using progress reports to track performance and identify bottlenecks early",
    ],
    layer: "management",
  },
  {
    id: "Field-Service-Management",
    title: "Field Service Management",
    description:
      "Optimize technician scheduling, track work orders in real time, and enhance customer satisfaction with timely updates and complete service history.",
    image: "/field.jpg",
    features: [
      "● Work Orders",
      "● Service Locations",
      "● Technician Scheduling",
      "● Service History",
      "● Customer Feedback",
      "● Real-Time Service Updates",
      "● Inventory & Spare Parts Management",
      "● GPS Tracking & Route Optimization",
    ],
    benefits: [
      "● Improve first-time fix rates and service efficiency with structured work orders and complete service history",
      "● Reduce response times and travel inefficiencies through optimized technician scheduling and location-based assignments",
      "● Enhance customer satisfaction and trust with real-time service updates and feedback tracking",
      "● Increase operational visibility and control by monitoring service activities across locations in real time",
    ],
    layer: "management",
  },
  {
    id: "GTM-Engine",
    title: "GTM Engine",
    description:
      "Streamline go-to-market campaigns by launching ads across channels, optimizing budgets with AI, and tracking full-funnel performance in real time.",
    image: "/gtm.jpg",
    features: [
      "● Demand-Based Lead Reach-out ",
      "● AI Lead Generation Workflows ",
      "● Prioritization by Deal Score ",
      "● Automated Follow-ups",
      "● Predictive Nurturing",
      "● Multi-Channel Outreach (Email, WhatsApp, SMS)",
      "● Conversion & Funnel Analytics",
      "● Revenue Forecasting & Pipeline Insights",
    ],
    benefits: [
      "● Increase revenue predictability with AI-driven lead prioritization and deal scoring",
      "● Reduce customer acquisition costs through automated, demand-based outreach",
      "● Accelerate deal closures with timely follow-ups and predictive nurturing",
      "● Improve sales efficiency and ROI by focusing on high-value, high-probability opportunities",
    ],
    layer: "growth",
  },
  {
    id: "Marketing-Automation",
    title: "Marketing Automation",
    description:
      "Automate personalized campaigns across email, SMS, and WhatsApp, nurture leads intelligently, and boost engagement and conversions with AI-driven segmentation.",
    image: "/market.jpg",
    features: [
      "● Personalized Email Campaigns",
      "● WhatsApp & SMS Marketing",
      "● Lead Nurturing Sequences",
      "● Customer Retargeting",
      "● AI-based Segmentation",
      "● Campaign Performance Analytics",
      "● Behavioral Trigger Automation",
      "● A/B Testing & Optimization",
    ],
    benefits: [
      "● Increase campaign engagement and conversions with personalized email, WhatsApp, and SMS outreach",
      "● Shorten sales cycles and improve lead quality through automated, stage-based lead nurturing sequences",
      "● Recover lost opportunities and boost ROI using intelligent customer retargeting",
      "● Improve targeting accuracy and relevance with AI-based audience segmentation",
    ],
    layer: "growth",
  },
  {
    id: "Ad-Exchange-GTM-Engine",
    title: "Ad Exchange & GTM Engine",
    description:
      "Launch and optimize ads across multiple platforms, track full-funnel conversions, and maximize ROI with AI-driven budget and creative automation.",
    image: "/ad.jpg",
    features: [
      "● Launch Ads Across Google, Meta, LinkedIn",
      "● Programmatic Ad Exchange Integration",
      "● AI Budget Optimization",
      "● Ad → Lead → Deal Tracking",
      "● Real-Time ROAS Analytics",
      "● Auto-generated Creatives & Ad Copy",
      "● Audience Targeting & Lookalike Modeling",
      "● Cross-Channel Attribution & Conversion Tracking",
    ],
    benefits: [
      "● Maximize ad reach and speed to market by launching campaigns across Google, Meta, and LinkedIn from a single platform",
      "● Improve marketing ROI and cost efficiency with AI-driven budget optimization and programmatic ad buying",
      "● Gain full funnel visibility and accountability by tracking ads through lead and deal conversion",
      "● Make faster, data-backed decisions using real-time ROAS and performance analytics",
    ],
    layer: "growth",
  },
  {
    id: "revenue-intelligence",
    title: "Revenue Intelligence & Analytics",
    description:
      "Consolidate pipeline and campaign data to gain actionable insights, predict revenue trends, and minimize business risks.",
    image: "/revenue.jpg",
    features: [
      "● Campaign ROI Dashboard",
      "● Customer Acquisition Cost (CAC)",
      "● Funnel Analytics",
      "● Pipeline Revenue Forecasting",
      "● Attribution (Channel → Lead → Revenue)",
      "● Customer Lifetime Value (CLV) Analysis",
      "● Win/Loss Deal Insights",
      "● AI Revenue Risk & Opportunity Alerts",
      "● Deal Velocity & Sales Cycle Analysis",
    ],
    benefits: [
      "● Maximize revenue growth and profitability with a centralized campaign ROI dashboard",
      "● Optimize marketing spend and efficiency by tracking Customer Acquisition Cost (CAC)",
      "● Identify bottlenecks and improve conversion rates using detailed funnel analytics",
      "● Forecast revenue accurately and plan strategically with pipeline revenue insights",
    ],
    layer: "growth",
  },
];

export default function FeaturesSection() {
  const [activeLayer, setActiveLayer] = useState<Layer["id"]>("operations");
  const [selectedSubFeatureId, setSelectedSubFeatureId] = useState<
    string | null
  >(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const filteredSubFeatures = useMemo(
    () => SUB_FEATURES.filter((sf) => sf.layer === activeLayer),
    [activeLayer]
  );

  const selectedSubFeature = useMemo(
    () => SUB_FEATURES.find((sf) => sf.id === selectedSubFeatureId) || null,
    [selectedSubFeatureId]
  );

  // Smooth scroll into view when a sub-feature panel opens
  useEffect(() => {
    if (selectedSubFeature && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedSubFeature]);

  const handleBackToFeatures = () => {
    setSelectedSubFeatureId(null);
    // Smooth scroll back to the sub-features grid
    if (panelRef.current) {
      window.scrollTo({
        top: panelRef.current.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className='relative min-h-screen w-full scroll-smooth bg-transparent text-slate-900 overflow-x-hidden'>
      <Navbar />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0'>
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mt-16 mb-12 flex flex-col sm:flex-row items-center gap-6'
        >
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className='flex px-6 py-2.5 rounded-full text-white items-center gap-2 bg-gradient-to-r from-secondary to-primary shadow-lg hover:shadow-primary/20 transition-all font-bold'
          >
            <span className='text-lg'>←</span>
            Back
          </button>

          {/* Heading */}
          <div className='text-center flex-1'>
            <h1 className='text-4xl md:text-5xl font-extrabold text-accent leading-tight'>Product Capabilities</h1>
            <p className='text-slate-600 mt-4 text-lg font-medium max-w-2xl mx-auto'>
              Explore how Pi Bi connects Operations, Management, and
              Growth—built for modern enterprises.
            </p>
          </div>

          {/* Spacer (keeps heading centered) */}
          <div className='hidden sm:block w-[120px]' />
        </motion.div>

        {/* Layer tabs */}
        <div className='flex justify-center flex-wrap gap-4 mb-12'>
          {LAYERS.map((layer) => {
            const isActive = activeLayer === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => {
                  setActiveLayer(layer.id);
                  setSelectedSubFeatureId(null);
                }}
                className={[
                  "px-8 py-3 rounded-full transition-all duration-300 text-sm font-bold shadow-sm",
                  isActive
                    ? "bg-gradient-to-r from-secondary to-primary text-white shadow-lg shadow-primary/20 transform-gpu scale-105"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-primary/30",
                ].join(" ")}
              >
                {layer.title}
              </button>
            );
          })}
        </div>

        {/* Layer description */}
        <div className='max-w-3xl mx-auto text-center mb-12'>
          <p className='text-lg font-medium text-slate-700 leading-relaxed italic'>
            "{LAYERS.find((l) => l.id === activeLayer)?.description}"
          </p>
        </div>

        {/* Sub-features grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16'>
          {filteredSubFeatures.map((sf) => (
            <motion.button
              key={sf.id}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedSubFeatureId(sf.id)}
              className='text-left bg-white border border-slate-200 rounded-2xl p-6 transition-all shadow-lg hover:shadow-2xl hover:border-primary/40 group'
            >
              <div className='flex items-center justify-between gap-3'>
                <h4 className='text-xl font-bold text-accent group-hover:text-primary transition-colors'>{sf.title}</h4>
                <span className='inline-flex items-center rounded-full px-5 py-2 text-xs font-bold bg-gradient-to-r from-secondary to-primary text-white shadow-md hover:shadow-primary/20 transition-all'>
                  View Details
                </span>
              </div>
              <p className='text-slate-600 mt-3 font-medium line-clamp-2'>
                {/* Match description via look-up for consistency */}
                {SUB_FEATURES.find((s) => s.id === sf.id)?.description}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Detailed feature panel */}
        {/* Detailed feature panel */}
        <div ref={panelRef}>
          <AnimatePresence mode='wait'>
            {selectedSubFeature && (
              <motion.div
                key={selectedSubFeature.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.5 }}
                className='bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl mb-20 relative overflow-hidden'
              >
                {/* Background wash */}
                <div className='absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl' />

                {/* header */}
                <div className='flex items-center justify-between mb-8 relative z-10'>
                  <h3 className='text-3xl md:text-4xl font-extrabold text-accent'>
                    {selectedSubFeature.title}
                  </h3>
                  <button
                    onClick={handleBackToFeatures}
                    className='text-sm font-bold px-6 py-2.5 rounded-full text-white bg-gradient-to-r from-secondary to-primary shadow-lg hover:shadow-primary/20 transition-all'
                  >
                    Close Panel
                  </button>
                </div>

                {/* Description */}
                <p className='text-lg font-medium text-slate-600 mb-10 leading-relaxed max-w-4xl relative z-10'>
                  {selectedSubFeature.description}
                </p>

                {/* Horizontal Features + Image */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-12 relative z-10'>
                  {/* Left: Key capabilities / Features */}
                  <div className='flex flex-col h-full'>
                    <div className='inline-block rounded-lg bg-secondary/10 border border-secondary/20 px-4 py-2 font-bold text-secondary mb-6 text-sm uppercase tracking-widest self-start'>
                      Core Capabilities
                    </div>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1'>
                      {selectedSubFeature.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className='bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 flex items-center text-slate-700 font-bold shadow-sm'
                        >
                          <div className='w-2 h-2 rounded-full bg-secondary mr-3 shrink-0' />
                          <div className='leading-tight text-sm'>{feat.replace('● ', '')}</div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className='relative w-full h-full min-h-[300px] lg:min-h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white'
                  >
                    <img
                      src={selectedSubFeature.image}
                      alt={`${selectedSubFeature.title} screenshot`}
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-tr from-secondary/10 to-primary/10 mix-blend-multiply' />
                  </motion.div>
                </div>

                {/* Benefits / Business outcomes */}
                <div className='relative z-10'>
                  <div className='inline-block rounded-lg bg-primary/10 border border-primary/20 px-4 py-2 font-bold text-primary mb-6 text-sm uppercase tracking-widest'>
                    Value Delivery
                  </div>
                  <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {selectedSubFeature.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className='bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow'
                      >
                        <div className='text-accent font-bold text-lg mb-2'>{benefit.replace('● ', '')}</div>
                        <p className='text-slate-500 text-sm font-medium'>
                          {idx === 0
                            ? "Scale operations with confidence using data-driven insights and automated workflows."
                            : "Accelerate your digital transformation journey with Pi Bi's enterprise tools."}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
