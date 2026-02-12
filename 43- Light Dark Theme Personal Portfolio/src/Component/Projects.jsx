export const Projects = () => {
  const projects = [
    {
      title: "Smart Financial Dashboard for Digital Management",
      desc: "A dynamic and interactive user interface for entering invoice details. Features include client and company details management, invoice tracking, and integration with backend systems like Firebase and Supabase for data persistence.",
      image: "images/proj1.jpg",
      sourceCode: "https://invoice-generator-react-app-with-ta.vercel.app/signup",
      tech: ["React JS", "Chart.js", "Supabase", "Tailwind CSS"],
    },
    {
      title: "E-Commerce App With Admin Analytics Panel",
      desc: "Modern and responsive e-commerce web application built with React and Vite. Includes product browsing, shopping cart, checkout process, and an advanced admin dashboard with real-time analytics for sales and customer insights.",
      image: "images/proj2.png",
      sourceCode: "https://ecommerce-store-react-vite.vercel.app/",
      tech: ["React JS", "Firebase", "Tailwind CSS", "Chart.js"],
    },
  ];




  return (
    <section
      className={`
        relative w-full py-2 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>

                            {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900/30 opacity-20 dark:opacity-30 pointer-events-none" />

                             {/* Ambient glow blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/6 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 dark:bg-purple-500/8 rounded-full blur-3xl animate-pulse-slow [animation-delay:1.5s]" />

                               {/* Watermark */}
      <h1
        className="absolute top-16 md:top-20 left-1/2 -translate-x-1/2 text-6xl md:text-8xl lg:text-[115px] font-black tracking-wider text-emerald-600/5 dark:text-emerald-400/5 select-none pointer-events-none z-0">
        PORTFOLIO
      </h1>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/8 border border-emerald-500/20 dark:border-emerald-500/15 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium uppercase tracking-wider">
                My Portfolio
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Let's Have A Look At
              <span className="block mt-1 md:mt-2 text-emerald-600 dark:text-emerald-400">
                My Portfolio
              </span>
            </h2>
          </div>

          <a href="https://github.com/Zeeshanelia" target="_blank"
            className=" group relative inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white font-semibold px-6 py-3 rounded-full hover:from-emerald-600 hover:to-emerald-700 dark:hover:from-emerald-700 dark:hover:to-emerald-800 transition-all duration-300 shadow-lg shadow-emerald-500/20 dark:shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/30 dark:hover:shadow-emerald-500/40">
            View All Projects
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
          </a>
        </div>

        {/* Project Cards */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={` relative group bg-white/65 dark:bg-gray-900/35 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/40 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 grid md:grid-cols-2 gap-8 lg:gap-12 hover:border-emerald-400/50 dark:hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/15 dark:hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-300
                  ${isReverse ? "md:grid-flow-col-dense" : ""}`}>


                                         {/* Image */}

                <div className={`rounded-2xl overflow-hidden border border-gray-300/50 dark:border-gray-600/50 shadow-lg ${isReverse ? "md:col-start-2" : ""}`}>
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={project.title}
                      className="w-full h-64 md:h-80 lg:h-96 object-scale-down group-hover:scale-105 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center
                  ${isReverse ? "md:col-start-1 md:row-start-1" : ""}`}>


                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className=" px-3.5 py-1.5 text-xs md:text-sm rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40 font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 md:mb-8 max-w-xl">
                    {project.desc}
                  </p>

                  {/* View Project Link */}
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-3text-emerald-600 dark:text-emerald-400 font-semiboldhover:text-emerald-700 dark:hover:text-emerald-300transition-colors duration-300 w-fit">
                    View Project
                    <span
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 dark:border-emerald-500/20 group-hover/link:bg-emerald-500/20 dark:group-hover/link:bg-emerald-500/25 group-hover/link:scale-110 transition-all duration-300">

                      <i className="ri-arrow-right-up-line text-lg group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* More projects teaser */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3.5 bg-gray-100/70 dark:bg-gray-800/40 rounded-full border border-gray-200/60 dark:border-gray-700/40 backdrop-blur-sm">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse [animation-delay:0.3s]" />
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse [animation-delay:0.6s]" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              More projects coming soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};