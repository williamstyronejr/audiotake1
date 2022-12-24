import { useState } from "react";

const SigninPage = () => {
  const [input, setInput] = useState("");
  return (
    <section className="text-center">
      <h1 className="font-medium text-4xl ">Under Contstruction</h1>
      <p className="py-4">
        We are currently building our web base platform, please enter your email
        below to get notified when it's ready.
      </p>

      <div className="h-screen">
        <form className="flex flex-row flex-nowrap  justify-center pt-4">
          <input
            className="px-2 w-36 py-2 rounded-lg rounded-tr-none rounded-br-none outline-none bg-slate-500 focus:bg-slate-700 transition-colors"
            type="text"
            value={input}
            placeholder="Email Address ..."
            onChange={(evt) => setInput(evt.target.value)}
          />

          <button
            className="p-2 rounded-lg rounded-tl-none rounded-bl-none bg-indigo-600 hover:bg-indigo-800 transition-colors"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default SigninPage;
