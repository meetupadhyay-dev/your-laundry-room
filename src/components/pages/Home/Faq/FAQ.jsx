import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How can I get started?",
    answer:
      "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
  },
  {
    id: 2,
    question: "What is the pricing structure?",
    answer:
      "Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.",
  },
  {
    id: 3,
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.",
  },
  {
    id: 4,
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Explore Common Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg hover:bg-gray-50 rounded-xl"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-5 sm:px-6 sm:pb-6"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?{" "}
          <span className="cursor-pointer font-medium text-blue-600 transition-all duration-200 hover:underline">
            Contact our support
          </span>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
