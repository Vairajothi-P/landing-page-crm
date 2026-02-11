"use client";

export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-slate-200 bg-white/50 backdrop-blur-sm" id="footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

        {/* LEFT: CONTACT */}
        <div className="space-y-4">
          <h3 className="text-xs tracking-[0.2em] text-slate-400 uppercase font-bold">
            Contact
          </h3>
          <p className="text-lg font-bold text-accent">
            business@pibitech.com
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/form"
              className="text-primary font-bold hover:underline"
            >
              Get in Touch
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="https://www.pibitech.com"
              target="_blank"
              className="text-slate-500 font-bold hover:underline"
            >
              Career
            </a>
          </div>
        </div>

        {/* CENTER: LINKS (PERFECTLY CENTERED) */}
        <div className="flex flex-col items-center justify-center gap-4 text-sm text-slate-500 font-bold border-y md:border-y-0 md:border-x border-slate-100 py-6 md:py-0">
          <a
            href="https://www.pibitech.com/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            Terms & Conditions
          </a>
          <a
            href="https://www.pibitech.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            Privacy Policy
          </a>
        </div>

        {/* RIGHT: FOLLOW */}
        <div className="flex flex-col md:items-end space-y-4">
          <p className="text-xs tracking-[0.2em] text-slate-400 uppercase font-bold">
            Follow
          </p>
          <a
            href="https://in.linkedin.com/company/pi-bi-technologies"
            target="_blank"
            className="text-lg font-bold text-secondary hover:text-primary transition"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
