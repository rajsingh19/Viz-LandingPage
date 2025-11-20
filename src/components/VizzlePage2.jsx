import React from "react";

export default function SetupSection() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        
        {/* LEFT SIDE — VIDEO */}
        <div className="flex justify-center order-1 md:order-none">
          <div className="rounded-3xl bg-[#70BBD4C9] p-6 shadow-md w-[450px] md:w-[580px]">
            <div className="rounded-[40px] overflow-hidden shadow-xl border border-black/10">

              <video
                src="/GV.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />

            </div>
          </div>
        </div>

        {/* RIGHT SIDE — TEXT */}
        <div className="w-full py-24 flex flex-col items-center  text-center  px-6">

          {/* Step Number */}
          <div className="border rounded-md w-10 h-10 flex items-center justify-center text-gray-700 mb-6">
            2
          </div>

          {/* Heading exact 2 lines */}
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            See your looks in
          </h2>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            motion
          </h2>

          {/* Subtext */}
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
            Add video animation to bring your look to life.
          </p>

        </div>

      </div>
    </div>
  );
}
