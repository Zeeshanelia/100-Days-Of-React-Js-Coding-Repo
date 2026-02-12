import Marquee from "react-fast-marquee";

export const HeadlineSlider = () => {
  const tags = [
    "React.js", "Redux-Toolkit", "Tailwind CSS", "Bootstrap CSS", "Chart.js",
    "CSS3", "JavaScript", "HTML", "Redux Toolkit", "Zustand",

    "Framer Motion", "Git & GitHub", "Firebase", "Vite", "Supabase",
  ];

  return (
    <section className="relative overflow-hidden py-6
      bg-gradient-to-r from-gray-100 to-blue-50
      dark:from-gray-900 dark:to-purple-900">

      {/* TITLE */}
      <div className="text-center  mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-emerald-500">Technologies</span> I Work With
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Modern tools for scalable web apps
        </p>
      </div>

      {/* SLIDER 1 */}
      <Marquee speed={40} pauseOnHover gradient={false}>
        {tags.slice(0, 10).map((tag, i) => (
          <Tag key={i} color="emerald">
            {tag}
          </Tag>
        ))}
      </Marquee>

      {/* SLIDER 2 (reverse) */}
      <Marquee
        speed={30}
        direction="right"
        pauseOnHover
        gradient={false}
        className="mt-6"
      >
        {tags.slice(10).map((tag, i) => (
          <Tag key={i} color="purple">
            {tag}
          </Tag>
        ))}
      </Marquee>
    </section>
  );
};

/* Reusable Tag Component */
const Tag = ({ children, color }) => (
  <div
    className={`lg:mx-8 mx-4 m-1  px-3 py-3 rounded-full whitespace-nowrap bg-white/80 dark:bg-gray-800/80 backdrop-blur border border-${color}-500/30 text-${color}-600 dark:text-${color}-400 shadow-md hover:-translate-y-1 transition`}>
    {children}
  </div>
);
