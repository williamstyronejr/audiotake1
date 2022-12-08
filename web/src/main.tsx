import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import useDetectClick from "./useDetectoutside";

const NavLink = ({ to, text }: { to: string; text: string }) => (
  <li className="mb-2 w-full md:mb-0 md:mr-2 py-1 px-2 rounded-lg font-light hover:bg-white/5 transition-colors">
    <a href={to}>{text}</a>
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
    <h6 className="font-bold">{heading}</h6>

    <div className="">
      {list.map((item) => (
        <a className="" href={item.to}>
          {item.text}
        </a>
      ))}
    </div>
  </div>
);

const Nav = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useDetectClick({ ref });

  return (
    <nav className={`relative`}>
      <div
        className={`md:hidden h-screen w-screen absolute z-10 left-0 top-0 bg-black/20`}
      />
      <button
        className="md:hidden z-40"
        type="button"
        onClick={() => setVisible((old) => !old)}
      >
        B
      </button>

      <ul
        className={`${
          !visible
            ? "absolute z-20 right-0 bg-nav-menu px-6 pt-1 rounded-lg "
            : "hidden"
        } md:flex flex-row flex-nowrap md:bg-transparent `}
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
    <header className="flex flex-row flex-nowrap justify-between py-4 px-2">
      <div className="">Title</div>
      <Nav />
    </header>

    <main className="flex-grow">
      <App />

      {/* <footer className="flex flex-row flex-nowrap justify-between bg-sky-600">
        <div></div>

        <div className="flex flex-row flex-nowrap">
          <FooterList heading="Product" list={[]} />
        </div>
      </footer> */}
    </main>
  </React.StrictMode>
);
