import React, { useState } from "react";
import { Sparkles, Gift, X } from "lucide-react"; // icons

const Banner = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Offer Banner */}
      <div className="relative py-10 px-5">
        <div className="z-20 max-w-4xl rounded-2xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-8 shadow-xl animate__animated animate__pulse animate__infinite">
          {/* Left Side */}
          <div className="flex items-center gap-3 text-white">
            <Gift className="w-10 h-10 animate-bounce" />
            <h2 className="text-2xl md:text-3xl font-extrabold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-orange-500 animate-pulse">
                Special Laundry Offer!
              </span>
            </h2>
          </div>

          {/* Right Side */}
          <button
            onClick={() => setOpen(true)}
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:scale-105 transition transform"
          >
            Grab Now 🚀
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 relative max-w-lg w-[90%] animate-[pop_0.3s_ease]">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="text-center">
              <Sparkles className="w-10 h-10 text-yellow-500 mx-auto animate-spin" />
              <h2 className="text-2xl font-bold mt-3 text-gray-800">
                🎉 Limited Time Offer 🎉
              </h2>
              <p className="text-gray-600 mt-2">
                Get <span className="font-bold text-blue-600">50% OFF</span> on
                your first laundry service! Free pickup & delivery included.
              </p>
              <button
                className="mt-5 px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition"
              >
                Claim Offer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Keyframe for popup animation */}
      <style>
        {`
          @keyframes pop {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </>
  );
};

export default Banner;
