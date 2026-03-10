import { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const colors = {
    royalBlack: "#050505",
    richGold: "#D4AF37",
  };

  const faqs = [
    {
      question: "Which kind of maze will be used?",
      answer: "Obstacle or wall maze."
    },
    {
      question: "Will components be provided? Is it a hardware hackathon?",
      answer: "No. This is not a hardware hackathon and components will not be provided."
    },
    {
      question: "Do we have to build a line follower bot?",
      answer: "No. Participants must build an obstacle-avoiding bot using an ultrasonic sensor."
    },
    {
      question: "Will this event clash with other events?",
      answer: "No. The schedule is designed to avoid clashes with other events."
    },
    {
      question: "Will the Codestorm event be online?",
      answer: "Yes, Codestorm is completely online."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 px-6"
      style={{ backgroundColor: colors.royalBlack }}
    >
      <div className="max-w-4xl mx-auto text-white">

        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 uppercase tracking-[0.2em]"
          style={{ color: "white" }}
        >
          FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border transition-all duration-300"
              style={{ borderColor: colors.richGold }}
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-5 font-semibold text-lg"
              >
                {faq.question}

                <span
                  className="text-xl"
                  style={{ color: colors.richGold }}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-300">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};