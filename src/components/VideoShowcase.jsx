'use client'

const VideoShowcase = () => {
  const video = {
    videoUrl: "/assets/video 3.mp4",
    duration: "1:30"
  };

  const handleScrollToPackages = () => {
    const section = document.getElementById("packages");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 to-gray-100 py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Watch our product demo to discover how it can transform your daily routine
          </p>
        </div>

        {/* Video Container (No Shadow) */}
        <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-200">
          <div className="aspect-video relative">
            <video
              src={video.videoUrl}
              autoPlay
              loop
              playsInline
              controls={false}
              className="w-full h-full object-cover"
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f1f5f9' viewBox='0 0 400 225'%3E%3Crect width='400' height='225'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%2364748b' font-size='14'%3ELoading...%3C/text%3E%3C/svg%3E"
            />
            <div className="absolute top-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
              {video.duration}
            </div>
          </div>

          {/* Minimal Info Bar */}
          <div className="p-6 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">{video.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                HD Quality
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleScrollToPackages}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-4 px-10 rounded-xl transition-all duration-300 bg-white hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
