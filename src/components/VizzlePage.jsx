import React from "react";

export default function SetupSection() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        
        {/* LEFT SIDE TEXT */}
        <div className="w-full py-24 flex flex-col items-center text-center px-6">

      {/* Step Number */}
      <div className="border rounded-md w-10 h-10 flex items-center justify-center text-gray-700 mb-6">
        1
      </div>

      {/* Main Heading - EXACT TWO LINES */}
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
        Try on outfits from
      </h2>
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
        your camera roll
      </h2>

      {/* Subtext EXACT LINE-BREAK STYLE */}
      <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
        See an outfit you love on social media, a blog, or even a friend?
        Upload an image or screenshot from your camera roll and turn that
        inspiration into your next look.
      </p>

    </div>

        {/* RIGHT SIDE PHONE MOCKUP */}
        <div className="flex justify-center">
          <div className="rounded-3xl bg-[#70BBD4C9] p-6 shadow-md w-[450px] md:w-[580px]">
            <div className="rounded-[40px] overflow-hidden shadow-xl border border-black/10">
              
              {/* Replace THIS image with your own video */}
              <video
                src="/cloths.mp4"
                autoPlay
                loop
                muted
                className="w-full h-auto"
              />
              {/* If you want image instead:
              <img src="/your-image.jpg" alt="model" className="w-full" />
              */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
