import { Download } from 'lucide-react';
import { motion } from 'framer-motion'



export const AboutMe = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/images/OfferLetter.pdf';
    link.download = 'Developer.CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const variants = {
    hidden: { opacity: 0, x: -100, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.8 }
    }
  }

  return (
    <section
      className={` relative py-6 md:py-10 overflow-hidden bg-gradient-to-r from-gray-50 to-blue-50
        dark:from-gray-900 dark:to-purple-900 text-gray-900 dark:text-gray-100
        transition-colors duration-300 `}>


      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900/40 opacity-20 dark:opacity-30 pointer-events-none" />

      {/* Soft ambient glow blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 md:w-96 md:h-96 bg-emerald-500/5 dark:bg-emerald-500/8 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-80 h-80 md:w-96 md:h-96 bg-blue-500/5 dark:bg-purple-500/8 rounded-full blur-3xl animate-pulse-slow [animation-delay:2s]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">

        {/* LEFT SIDE – IMAGE COMPOSITION */}
        <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
          {/* Outer glow ring */}
          <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-r from-emerald-500/15 via-emerald-600/10 to-teal-500/5 blur-xl animate-pulse" />

          {/* Circular accent bg */}
          <div className="absolute w-full h-full rounded-full bg-[radial-gradient(circle_at_center,#10b98122,transparent_65%)] dark:bg-[radial-gradient(circle_at_center,#10b98133,transparent_65%)]" />

          {/* Main image container */}
          <div className="relative w-[300px] h-[300px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden z-10 border-4 border-white/30 dark:border-gray-700/60 shadow-2xl shadow-emerald-500/20 dark:shadow-emerald-500/15">
            <img
              src="images/name55.png"
              alt="Zeeshan Elia - Web Developer"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>



        {/* RIGHT SIDE – TEXT CONTENT */}

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible" className="relative order-1 lg:order-2">
          {/* FADED BACKGROUND TEXT */}
          <h2 className="absolute -top-6 -left-4 md:-top-10 md:-left-8 text-6xl md:text-8xl lg:text-9xl font-black text-emerald-600/5 dark:text-emerald-400/5 tracking-wider select-none pointer-events-none">
            ABOUT ME
          </h2>

          {/* Section label pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/8 border border-emerald-500/20 dark:border-emerald-500/15 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <p className="uppercase tracking-widest text-sm font-medium text-emerald-600 dark:text-emerald-400">
              About Me
            </p>
          </div>

          {/* Main heading */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Who is{' '}
            <span className="text-emerald-600 dark:text-emerald-400">
              Zeeshan Elia?
            </span>
          </h3>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-8 max-w-lg">
            A web developer passionate about clean code, modern design, user experience, and building responsive, accessible, and high-performing digital products. I am always eager to learn new technologies and improve my skills.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {[
              { value: "60+", label: "Projects Completed" },
              { value: "05+", label: "Industry Covered" },
              { value: "02+", label: "Years Of Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h4 className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                  {stat.value}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>



          {/* CTA – Download CV */}
          <button
            onClick={downloadCV}
            className="
              group relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600
              dark:from-emerald-600 dark:to-emerald-700 text-white font-semibold px-8 py-4 rounded-full hover:from-emerald-600 hover:to-emerald-700  dark:hover:from-emerald-700 dark:hover:to-emerald-800 transition-all duration-300 shadow-lg shadow-emerald-500/20 dark:shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/30 dark:hover:shadow-emerald-500/40 hover:-translate-y-1">

            <span className="relative flex items-center gap-3">
              <Download className="w-5 h-5" />
              Download CV
            </span>
          </button>

          {/* Availability status */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
                <div className="absolute top-1 left-1 w-1 h-1 bg-emerald-500 rounded-full" />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Available for new challenges
              </span>
            </div>

            <div className="hidden sm:block w-8 h-px bg-gradient-to-r from-emerald-500/40 to-transparent" />

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Open to Opportunities
              </span>
              <i className="ri-arrow-right-up-line text-emerald-500 dark:text-emerald-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </section >
  );
};