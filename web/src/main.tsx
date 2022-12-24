import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePaage";
import "./index.css";
import useDetectClick from "./useDetectoutside";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import SigninPage from "./pages/SigninPage";
import FaqPage from "./pages/FAQPage";

const NavLink = ({ to, text }: { to: string; text: string }) => (
  <li className="mb-2 w-full md:mb-0 md:mr-2 py-1 px-2 rounded-lg font-light hover:bg-white/5 transition-colors">
    <a className="block" href={to}>
      {text}
    </a>
  </li>
);

const FooterList = ({
  list,
  heading,
}: {
  list: Array<{ text: string; to: string }>;
  heading: string;
}) => (
  <div className="">
    <h6 className="font-bold mb-2">{heading}</h6>

    <div className="">
      {list.map((item) => (
        <a
          className="block font-light my-3"
          key={`link-${item.text}`}
          href={item.to}
        >
          {item.text}
        </a>
      ))}
    </div>
  </div>
);

const Nav = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const eventHandler = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") setVisible(false);
    };

    document.addEventListener("keyup", eventHandler);
    return () => {
      document.removeEventListener("keyup", eventHandler);
    };
  }, []);

  return (
    <nav className="relative">
      <div
        className={`${
          visible ? "block" : "hidden"
        } md:hidden h-screen w-screen fixed z-10 right-0 top-0 bg-black/20`}
        onClick={() => setVisible(false)}
      />

      <div className="rounded-full px-2 py-2 -mt-2 hover:bg-white/20 transition-colors">
        <button
          type="button"
          aria-label="menu"
          onClick={() => setVisible((old) => !old)}
          className="md:hidden relative z-40 w-6 outline-none"
        >
          <span
            className={`block h-0.5 w-full bg-white transition-transform origin-top-left ${
              visible ? "rotate-45 -translate-y-0.5 translate-x-1" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full ${
              visible ? "w-0" : "w-full"
            } bg-white my-1 transition-width`}
          />
          <span
            className={`block h-0.5 w-full bg-white transition-transform origin-bottom-left ${
              visible ? "-rotate-45 translate-x-1 translate-y-0.5" : ""
            }`}
          />
        </button>
      </div>

      <ul
        className={`${
          visible
            ? "absolute z-20 mt-3 right-0 bg-nav-menu px-2 pt-1 w-40 rounded-lg"
            : "hidden"
        } md:flex flex-row flex-nowrap md:bg-transparent md:p-0 md:mt-0 md:w-auto md:rounded-none`}
      >
        <NavLink to="/features" text="Features" />
        <NavLink to="/pricing" text="Pricing" />
        <NavLink to="/signin" text="Signin" />
      </ul>
    </nav>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <header className="flex flex-row flex-nowrap justify-between p-4">
        <div className="">
          <Link to="/" className="font-semibold">
            OneTake
          </Link>
        </div>
        <Nav />
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </main>

      <footer className="py-2 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row flex-nowrap py-4">
            <div className="w-full md:w-60 md:mr-4">
              <h3 className="font-bold">OneTake</h3>
            </div>

            <div className="md:w-60">
              <FooterList
                heading="Product"
                list={[{ to: "/faq", text: "FAQ" }]}
              />
            </div>

            <div className="md:w-60">
              <FooterList
                heading="Downloads"
                list={[
                  { to: "/", text: "MacOS" },
                  { to: "/", text: "Windows" },
                  { to: "/", text: "Linux" },
                ]}
              />
            </div>
          </div>

          <div className="border-t border-white/10 mt-4">
            <div className="text-sm text-slate-300 py-6">
              @ 2022 One Take, Inc.
            </div>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  </React.StrictMode>
);
