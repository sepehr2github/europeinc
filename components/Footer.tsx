const CURRENT_YEAR = 2026;

const starPoints = [
  "50,5.8 50.85,7.3 52.2,7.3 51.1,8.4 51.5,10.2 50,9.2 48.5,10.2 48.9,8.4 47.8,7.3 49.15,7.3",
  "71.39,11.83 72.24,13.33 73.59,13.33 72.49,14.43 72.89,16.23 71.39,15.23 69.89,16.23 70.29,14.43 69.19,13.33 70.54,13.33",
  "86.37,26.8 87.22,28.3 88.57,28.3 87.47,29.4 87.87,31.2 86.37,30.2 84.87,31.2 85.27,29.4 84.17,28.3 85.52,28.3",
  "92,47.8 92.85,49.3 94.2,49.3 93.1,50.4 93.5,52.2 92,51.2 90.5,52.2 90.9,50.4 89.8,49.3 91.15,49.3",
  "86.37,68.8 87.22,70.3 88.57,70.3 87.47,71.4 87.87,73.2 86.37,72.2 84.87,73.2 85.27,71.4 84.17,70.3 85.52,70.3",
  "71.39,83.77 72.24,85.27 73.59,85.27 72.49,86.37 72.89,88.17 71.39,87.17 69.89,88.17 70.29,86.37 69.19,85.27 70.54,85.27",
  "50,89.8 50.85,91.3 52.2,91.3 51.1,92.4 51.5,94.2 50,93.2 48.5,94.2 48.9,92.4 47.8,91.3 49.15,91.3",
  "28.61,83.77 29.46,85.27 30.81,85.27 29.71,86.37 30.11,88.17 28.61,87.17 27.11,88.17 27.51,86.37 26.41,85.27 27.76,85.27",
  "13.63,68.8 14.48,70.3 15.83,70.3 14.73,71.4 15.13,73.2 13.63,72.2 12.13,73.2 12.53,71.4 11.43,70.3 12.78,70.3",
  "8,47.8 8.85,49.3 10.2,49.3 9.1,50.4 9.5,52.2 8,51.2 6.5,52.2 6.9,50.4 5.8,49.3 7.15,49.3",
  "13.63,26.8 14.48,28.3 15.83,28.3 14.73,29.4 15.13,31.2 13.63,30.2 12.13,31.2 12.53,29.4 11.43,28.3 12.78,28.3",
  "28.61,11.83 29.46,13.33 30.81,13.33 29.71,14.43 30.11,16.23 28.61,15.23 27.11,16.23 27.51,14.43 26.41,13.33 27.76,13.33",
];

export default function Footer() {
  return (
    <footer className="relative bg-navy border-t border-white/5 overflow-hidden">
      {/* Background star ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-150 h-150 md:w-200 md:h-200 animate-star-rotate opacity-[0.12]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {starPoints.map((pts, i) => (
              <polygon key={i} points={pts} fill="#FFCC00" />
            ))}
          </svg>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
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
