"use client";

export default function Footer() {
  return (
    <footer className="px-6 py-10" id="footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">

        {/* LEFT */}
        <div className="space-y-5">
          <h3 className="text-sm tracking-widest text-gray-400 uppercase">
            Contact
          </h3>

          <p className="text-base text-gray-300">
            business@pibitech.com
          </p>

          <div className="flex gap-4 pt-2">
            <a
              href="/form"
              className="inline-flex items-center gap-2 px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition text-white"
            >
              Get in Touch ↗
            </a>
            <a
              href="https://www.pibitech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition text-white"
            >
              Explore Career ↗
            </a>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex gap-10 text-sm text-gray-400 md:items-end">
          <a
              href="https://www.pibitech.com/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition">
            Terms & Conditions
          </a>
          <a href="https://www.pibitech.com/privacy-policy" 
             target="_blank" rel="noopener noreferrer" 
             className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>

        {/* RIGHT */}
        <div className="space-y-5 text-left md:text-right">
          <p className="text-sm tracking-widest text-gray-400 uppercase">
            Follow
          </p>

          <a
            href="https://in.linkedin.com/company/pi-bi-technologies"
            target="_blank"
            className="text-base text-gray-300 hover:underline"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}
