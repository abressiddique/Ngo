import Link from "next/link";

const Footer = () => {
    return (
        <footer aria-label="Site Footer" className="bg-black">
  <div
    className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
  >

    <div
      className="grid grid-cols-1 gap-8 pt-8 border-b pb-6 border-gray-100 sm:grid-cols-3 lg:grid-cols-3 lg:pt-16"
    >


      <div>
        <p className="text-2xl font-bold text-white">Company</p>

        <nav aria-label="Footer Navigation - Company" className="mt-6">
          <ul className="space-y-4 text-xl font-semibold">
            <li>
              <a href="#" className="text-slate-200  transition hover:opacity-75">
                About
              </a>
            </li>

            <li>
              <a href="#" className="text-slate-200 transition hover:opacity-75">
                Meet the Team
              </a>
            </li>

            <li>
              <a href="#" className="text-slate-200 transition hover:opacity-75">
                Accounts Review
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <p className="text-2xl font-bold text-white">Helpful Links</p>

        <nav aria-label="Footer Navigation - Company" className="mt-6">
          <ul className="space-y-4 text-xl font-semibold">
            <li>
              <a href="#" className="text-slate-200 transition hover:opacity-75">
                Contact
              </a>
            </li>

            <li>
              <a href="#" className="text-slate-200 transition hover:opacity-75">
                FAQs
              </a>
            </li>

            <li>
                <Link
                  className="group flex justify-start gap-1.5 sm:justify-start"
                  href="/"
                >
                  <span
                    className="text-slate-200 transition group-hover:text-slate-200/75"
                  >
                    Live Chat
                  </span>

                  <span className="relative flex h-2 w-2">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
                    ></span>
                    <span
                      className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"
                    ></span>
                  </span>
                </Link>
              </li>
          </ul>
        </nav>
      </div>

      <div>
        <p className="text-2xl font-bold text-white">Legal</p>

        <nav aria-label="Footer Navigation - Legal" className="mt-6">
          <ul className="space-y-4 text-xl font-semibold">
            <li>
              <a href="#" className="text-slate-200 transition hover:opacity-75">
                Accessibility
              </a>
            </li>

            <li>
              <a href="#" className="text-slate-200 transition hover:opacity-75">
                Returns Policy
              </a>
            </li>

            <li>
              <a href="#" className="text-slate-200 transition hover:opacity-75">
                Refund Policy
              </a>
            </li>

            <li>
              <a href="#" className="text-slate-200 transition hover:opacity-75">
                Hiring Statistics
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <p className="text-xs text-gray-500">
      &copy; 2022. Company Name. All rights reserved.
    </p>
  </div>
</footer>

    );
}

export default Footer;