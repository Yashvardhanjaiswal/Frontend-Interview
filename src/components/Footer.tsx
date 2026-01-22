export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-800 bg-[#020617]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-lg font-semibold text-[#22d3ee]">
              CA Monk Blog Portal
            </h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              A modern blog platform focused on finance, accounting,
              technology, and career insights for professionals and
              students.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-slate-400 transition hover:text-[#22d3ee]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 transition hover:text-[#22d3ee]"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 transition hover:text-[#22d3ee]"
                >
                  Create Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact / Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Email: yashj9100@gmail.com</li>
              <li>Location: India</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#22d3ee] font-medium">
            CA Monk Blog Portal
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
