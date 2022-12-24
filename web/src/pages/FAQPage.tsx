import { FC } from "react";

const qa = [
  {
    heading: "Account",
    qusetions: [
      {
        question: "Testing",
        answer: "Testing",
      },
    ],
  },
  {
    heading: "Product",
    qusetions: [
      {
        question: "Testing",
        answer: "Testing",
      },
    ],
  },
];

const FaqPage = () => {
  return (
    <section className="px-4 ">
      <header className="py-8">
        <h2 className="text-center font-medium text-4xl">FAQ</h2>
      </header>

      <hr className="py-4" />

      <div className="">
        {qa.map(({ heading, qusetions }) => (
          <div className="py-4">
            <h3 className="font-medium text-2xl text-center">{heading}</h3>
            {qusetions.map(({ question, answer }) => (
              <div className="py-4">
                <div className="px-2 py-2 text-lg font-medium">{question}</div>
                <div className="px-4">{answer}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqPage;
