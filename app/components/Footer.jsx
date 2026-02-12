"use client";

export default function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-slate-200 bg-white/50 backdrop-blur-sm" id="footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT: CONTACT */}
        <div className="space-y-6">
          <h3 className="text-xs tracking-[0.2em] text-slate-400 uppercase font-black">
            Contact
          </h3>
          <p className="text-xl font-extrabold text-accent">
            business@pibitech.com
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/form"
              className="text-primary font-bold hover:underline underline-offset-4"
            >
              Get in Touch
            </a>
            <span className="text-slate-200">/</span>
            <a
              href="https://www.pibitech.com"
              target="_blank"
              className="text-slate-400 font-bold hover:underline underline-offset-4"
            >
              Career
            </a>
          </div>
        </div>

        {/* CENTER: LEGAL (MOVED TO COLUMN STYLE) */}
        <div className="space-y-6 md:border-x border-slate-100 md:px-12">
          <h3 className="text-xs tracking-[0.2em] text-slate-400 uppercase font-black">
            Legal
          </h3>
          <div className="flex flex-col gap-4">
            <a
              href="https://www.pibitech.com/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 font-bold hover:text-primary transition-colors inline-block"
            >
              Terms & Conditions
            </a>
            <a
              href="https://www.pibitech.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 font-bold hover:text-primary transition-colors inline-block"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* RIGHT: FOLLOW */}
        <div className="space-y-6 md:text-right">
          <h3 className="text-xs tracking-[0.2em] text-slate-400 uppercase font-black">
            Follow
          </h3>
          <a
            href="https://in.linkedin.com/company/pi-bi-technologies"
            target="_blank"
            className="text-xl font-extrabold text-secondary hover:text-primary transition-colors block"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
