import { ArrowRight, Eye, Palette, PenTool, Globe, Sparkles, CheckCircle } from 'lucide-react';

export const Service = () => {
  const services = [
    {
      title: "UI/UX Design",
      desc: "Designing intuitive, visually engaging user interfaces that enhance usability and deliver delightful digital experiences.",
      icon: <Palette className="w-6 h-6" />,
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      title: "Application Design",
      desc: "Creating modern, scalable app designs with a seamless user journey tailored to your product and brand goals.",
      icon: <PenTool className="w-6 h-6" />,
      features: ["Chart Flow", "Admin Dashboard", "Interactive Prototypes"]
    },
    {
      title: "Website Design",
      desc: "Building responsive, high-performance websites that strengthen brand identity and drive user engagement.",
      icon: <Globe className="w-6 h-6" />,
      features: ["Mobile Responsive Design", "SEO Optimized", "Fast Loading", "Cross-Browser"]
    },
  ];

  return (
    <section
      id="services"
      className={`
        relative py-2 overflow-hidden bg-gradient-to-r from-gray-50 to-blue-50
        dark:from-gray-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>

      {/* Background Watermark */}
      <h1
        className="
          absolute top-6 md:top-10 left-1/2 -translate-x-1/2 text-[60px] md:text-[140px] lg:text-[160px]
          font-extrabold tracking-widest text-emerald-600/5 dark:text-emerald-400/5 select-none pointer-events-none z-0">
        SERVICES
      </h1>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-20 gap-6">
          <div className="flex-1">
            <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              My Specialization
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="text-emerald-600 dark:text-emerald-400">Services</span>{' '}
              <span className="text-gray-800 dark:text-gray-100">I Provide</span>
            </h2>
          </div>

          <button
            className="
              hidden md:flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold px-7 py-3 rounded-full dark:from-emerald-600 dark:to-emerald-700 hover:from-emerald-600 hover:to-emerald-700 dark:hover:from-emerald-700 dark:hover:to-emerald-800 transition-all duration-300 shadow-lg shadow-emerald-500/20 dark:shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/30 dark:hover:shadow-emerald-500/40 group" >
            View All Services
            <Eye className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className={`
                group relative p-6 md:p-8 rounded-2xl lg:rounded-3xl
                bg-white/70 dark:bg-gray-900/40 backdrop-blur-sm
                border border-gray-200/60 dark:border-gray-700/40
                shadow-lg shadow-gray-200/40 dark:shadow-black/30
                hover:shadow-xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/30
                hover:-translate-y-2 transition-all duration-300
              `}
            >
              {/* Subtle glow on hover */}
              <div
                className="
                  absolute inset-0 rounded-2xl lg:rounded-3xl
                  bg-gradient-to-br from-emerald-500/8 to-emerald-600/5
                  dark:from-emerald-500/10 dark:to-emerald-600/8
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500
                "
              />

              {/* Icon container */}
              <div
                className="
                  w-16 h-16 rounded-full
                  bg-emerald-50 dark:bg-emerald-950/40
                  border border-emerald-200/60 dark:border-emerald-800/40
                  flex items-center justify-center mb-5
                  group-hover:scale-110 group-hover:rotate-3 transition-all duration-300
                "
              >
                <div className="text-emerald-600 dark:text-emerald-400">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {item.desc}
              </p>

              {/* Features */}
              <div className="space-y-2.5 mb-7">
                {item.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-800 dark:text-gray-200 text-sm md:text-base">
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* Learn More */}
              <a
                href="#"
                className="
                  inline-flex items-center gap-2 font-medium
                  text-emerald-600 dark:text-emerald-400
                  hover:text-emerald-700 dark:hover:text-emerald-300
                  group-hover:gap-3 transition-all duration-300
                "
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};