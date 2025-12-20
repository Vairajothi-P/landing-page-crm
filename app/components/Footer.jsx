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

          <p className="text-base text-gray-300 hover:underline cursor-pointer">
            business@pibitech.com
          </p>

          <div className="flex gap-4 pt-2">
            <button className="flex items-center gap-2 px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition">
              Get In Touch ↗
            </button>
            <button className="flex items-center gap-2 px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition">
              <a href="#" className="hover:text-white transition">
                Explore Careers ↗
              </a>
            </button>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex gap-10 text-sm text-gray-400 md:items-end">
          <a href="#" className="hover:text-white transition">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white transition">
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
