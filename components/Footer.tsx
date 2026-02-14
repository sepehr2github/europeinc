const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid md:grid-cols-4 gap-12 py-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-heading font-bold text-2xl text-white tracking-tight leading-none">
                Europe<span className="text-eu-gold">&thinsp;Inc</span>
              </span>
              <span className="text-[10px] font-semibold text-eu-gold/50 border border-eu-gold/20 rounded px-1.5 py-0.5 uppercase tracking-[0.15em] leading-none">
                EU
              </span>
            </div>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed mb-6">
              Helping companies incorporate across Europe under the new
              EU&nbsp;Inc (28th regime) framework. One company, 27 countries,
              zero barriers.
            </p>
            {/* <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-eu-gold hover:bg-white/10 transition-all"
                aria-label="Twitter / X"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-eu-gold hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div> */}
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {["About", "Benefits", "How It Works", "Timeline", "FAQ"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-white/35 hover:text-eu-gold transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                { label: "EU-INC.org", href: "https://www.eu-inc.org/" },
                {
                  label: "28th Regime Info",
                  href: "https://the28thregime.eu/",
                },
                {
                  label: "EU Parliament Report",
                  href: "https://www.europarl.europa.eu/news/en/press-room/20260116IPR32438/eu-competitiveness-meps-propose-new-legal-framework-for-innovative-companies",
                },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/35 hover:text-eu-gold transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <svg
                      width="10"
                      height="10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="opacity-50"
                    >
                      <path d="M2 8L8 2M8 2H3M8 2v5" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {CURRENT_YEAR} Europe Inc. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Europe Inc is a project by{" "}
            <a
              href="https://openforest.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-eu-gold/50 hover:text-eu-gold transition-colors"
            >
              OpenForest
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
