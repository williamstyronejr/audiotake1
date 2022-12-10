import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import useDetectClick from "./useDetectoutside";

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
  list: Array<any>;
  heading: string;
}) => (
  <div className="">
    <h6 className="font-bold mb-2">{heading}</h6>

    <div className="">
      {list.map((item) => (
        <a className="font-light" href={item.to}>
          {item.text}
        </a>
      ))}
    </div>
  </div>
);

const Nav = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(true);

  return (
    <nav className={`relative`}>
      <div
        className={`${
          visible ? "" : "hidden"
        } md:hidden h-screen w-screen fixed z-10 right-0 top-0 bg-black/20`}
        onClick={() => setVisible(false)}
      />
      <button
        className="md:hidden relative z-40 w-6"
        type="button"
        onClick={() => setVisible((old) => !old)}
        aria-label="menu"
      >
        <span
          className={`block h-0.5 w-full bg-white transition-transform origin-top-left ${
            visible ? "rotate-45 -translate-y-1" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-full ${
            visible ? "w-0" : "w-full"
          } bg-white my-1 transition-width`}
        ></span>
        <span
          className={`block h-0.5 w-full bg-white transition-transform origin-bottom-left ${
            visible ? "-rotate-45" : ""
          }`}
        ></span>
      </button>

      <ul
        className={`${
          visible
            ? "absolute z-20 right-0 bg-nav-menu px-2 pt-1 w-40 rounded-lg "
            : "hidden"
        } md:flex flex-row flex-nowrap md:bg-transparent md:p-0 md:w-auto md:rounded-none`}
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
    <header className="flex flex-row flex-nowrap justify-between py-4 px-2 max-w-7xl">
      <div className="">Title</div>
      <Nav />
    </header>

    <main className="flex-grow">
      <App />

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
          </div>

          <div className="border-t border-white/10 mt-4">
            <div className="text-sm text-slate-300 py-6">
              @ 2022 One Take, Inc.
            </div>
          </div>
        </div>
      </footer>
    </main>
  </React.StrictMode>
);
