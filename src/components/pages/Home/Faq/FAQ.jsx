import React, { useState } from "react";

const faqs = [
  {
    question: "What could possibly be your first question?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
  },
  {
    question: "How does this FAQ component work?",
    answer:
      "This FAQ component is fully responsive and dynamic. You can easily add or remove FAQs by editing the array of questions and answers."
  },
  {
    question: "Can I customize the styling?",
    answer:
      "Yes, it's built with Tailwind CSS, so you can easily customize colors, spacing, and layouts as per your design requirements."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="mt-4 text-sm leading-7 text-gray-500">F.A.Q</p>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Frequently Asked <span className="text-indigo-600">Questions</span>
          </h3>
        </div>

        {/* FAQ List */}
        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg shadow-sm">
              {/* Question */}
              <button
                className="w-full flex justify-between items-center p-5 text-left text-gray-900 font-medium hover:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="p-5 bg-gray-50 text-gray-700 text-sm border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
