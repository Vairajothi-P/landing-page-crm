"use client";

export default function Footer() {
  return (
    <footer className="text-white px-5 py-5 rounded-t-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="space-y-6 ml-3">
          <h3 className="text-sm tracking-widest text-gray-300 uppercase mb-2">
            Contact
          </h3>
          <p className="text-base text-gray-300">
            business@pibitech.com
          </p>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-5 py-2 border border-white/8 rounded-full hover:bg-white/5 transition">
              Get In Touch ↗
            </button>
            <button className="flex items-center gap-2 px-5 py-2 border border-white/8 rounded-full hover:bg-white/5 transition">
              Explore Careers ↗
            </button>
          </div>
        </div>

        <div className="text-center flex items-end gap-10 text-sm tracking-wide text-gray-300">
          <a href="#" className="hover:text-white transition">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>

        <div className="space-y-6 text-right mr-3">
          <p className="text-sm tracking-widest text-gray-300 uppercase mb-2">
            Follow
          </p>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="text-lg hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
