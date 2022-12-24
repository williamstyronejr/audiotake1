import { Link } from "react-router-dom";

const PricingPage = () => {
  return (
    <section>
      <header>
        <h2 className="font-bold text-center text-4xl pt-4 pb-8">Pricing</h2>
      </header>

      <div className="flex flex-col lg:flex-row flex-nowrap px-4 items-center">
        <div className="flex-grow border w-80 py-8 px-4 mb-8 lg:mb-0 lg:mr-8">
          <h3 className="block font-medium text-4xl mb-4">Free</h3>

          <ul className="block">
            <li className="py-1">
              <span className="inline-block h-3 w-3 mr-2 bg-sky-500 rounded-full" />
              Testing
            </li>

            <li className="py-1">
              <span className="inline-block h-3 w-3 mr-2 bg-sky-500 rounded-full" />
              Testing
            </li>

            <li className="py-1">
              <span className="inline-block h-3 w-3 mr-2 bg-sky-500 rounded-full" />
              Testing
            </li>
            <li className="py-1">
              <span className="inline-block h-3 w-3 mr-2 bg-sky-500 rounded-full" />
              Testing
            </li>

            <li className="py-1">
              <span className="inline-block h-3 w-3 mr-2 bg-sky-500 rounded-full" />
              Testing
            </li>
          </ul>

          <Link
            className="block text-center mx-auto mt-4 py-2 font-medium rounded-md bg-sky-500"
            to="/signin"
          >
            Signin
          </Link>
        </div>

        <div className="flex-grow border w-80 py-8 px-4 mb-8 lg:mb-0 lg:mr-8">
          <h3 className="block font-medium text-4xl mb-4">Free</h3>

          <ul className="block">
            <li className="py-1">
              <span className="inline-block h-3 w-3 mr-2 bg-sky-500 rounded-full" />
              Testing
            </li>

            <li className="py-1">
              <span className="inline-block h-3 w-3 mr-2 bg-sky-500 rounded-full" />
              Testing
            </li>

            <li className="py-1">
              <span className="inline-block h-3 w-3 mr-2 bg-sky-500 rounded-full" />
              Testing
            </li>
            <li className="py-1">
              <span className="inline-block h-3 w-3 mr-2 bg-sky-500 rounded-full" />
              Testing
            </li>

            <li className="py-1">
              <span className="inline-block h-3 w-3 mr-2 bg-sky-500 rounded-full" />
              Testing
            </li>
          </ul>

          <Link
            className="block text-center mx-auto mt-4 py-2 font-medium rounded-md bg-sky-500"
            to="/signin"
          >
            Signin
          </Link>
        </div>

        <div className="flex-grow border w-80 py-8 px-4">
          <h3 className="block font-medium text-4xl mb-4">Free</h3>

          <ul className="block">
            <li className="py-1">
              <span className="inline-block h-3 w-3 mr-2 bg-sky-500 rounded-full" />
              Testing
            </li>

            <li className="py-1">
              <span className="inline-block h-3 w-3 mr-2 bg-sky-500 rounded-full" />
              Testing
            </li>

            <li className="py-1">
              <span className="inline-block h-3 w-3 mr-2 bg-sky-500 rounded-full" />
              Testing
            </li>
            <li className="py-1">
              <span className="inline-block h-3 w-3 mr-2 bg-sky-500 rounded-full" />
              Testing
            </li>

            <li className="py-1">
              <span className="inline-block h-3 w-3 mr-2 bg-sky-500 rounded-full" />
              Testing
            </li>
          </ul>

          <Link
            className="block text-center mx-auto mt-4 py-2 font-medium rounded-md bg-sky-500"
            to="/signin"
          >
            Signin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
