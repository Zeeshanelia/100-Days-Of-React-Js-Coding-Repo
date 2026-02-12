import { GraduationCap, Briefcase, Calendar, Award, Code, Palette } from 'lucide-react';

export const Education = () => {
  const sections = [
    {
      title: "Education",
      subtitle: "Academic Background",
      icon: GraduationCap,
      items: [
        {
          icon: Award,
          title: "BZ University (PAK)",
          desc: "Bachelor's Degree",
          date: "2014 – 2018"
        },
        {
          icon: Code,
          title: "Govt. College Montgomery",
          desc: "Intermediate in Computer Science (ICS)",
          date: "2010 – 2012"
        }
      ]
    },
    {
      title: "Work & Certifications",
      subtitle: "Professional Experience",
      icon: Briefcase,
      items: [
        {
          icon: Award,
          title: "Cisco Networking / VU-ITU-DTC",
          desc: "Certified JavaScript Developer (JSE1-2025)",
          date: "2025"
        },
        {
          icon: Palette,
          title: "Self-Employed Web Designer",
          desc: "WordPress & Frontend Development",
          date: "Feb 2021 – May 2022"
        }
      ]
    }
  ];

  return (
    <section
      className="
        relative py-16 md:py-24 lg:py-28 overflow-hidden
        bg-gradient-to-r from-gray-50 to-blue-50
        dark:from-gray-900 dark:to-purple-900
        text-gray-900 dark:text-gray-100
        transition-colors duration-300
        px-4 sm:px-6 lg:px-8
      "
    >
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/8 border border-emerald-500/20 dark:border-emerald-500/15 mb-6 backdrop-blur-sm">
            <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <p className="text-sm font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              My Journey
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Education & Experience
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Academic foundation and professional milestones
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="
                group relative
                bg-white/70 dark:bg-gray-900/40 backdrop-blur-md
                rounded-2xl lg:rounded-3xl
                border border-gray-200/60 dark:border-gray-700/40
                shadow-lg shadow-gray-200/30 dark:shadow-black/20
                hover:shadow-xl hover:shadow-emerald-500/15 dark:hover:shadow-emerald-500/20
                hover:-translate-y-1 transition-all duration-300
                overflow-hidden
              "
            >
              {/* Left accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700" />

              <div className="relative p-6 md:p-8 lg:p-10">
                {/* Section header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <section.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {section.subtitle}
                    </p>
                  </div>
                </div>

                {/* Timeline items */}
                <div className="space-y-10 md:space-y-12">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="relative pl-6 md:pl-8
                        before:absolute before:left-3 before:top-0 before:bottom-0 before:w-0.5
                        before:bg-gradient-to-b before:from-emerald-500/30 before:to-emerald-600/20
                        dark:before:from-emerald-600/30 dark:before:to-emerald-700/20"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <item.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-base md:text-lg font-medium text-emerald-600 dark:text-emerald-400">
                            {item.desc}
                          </p>
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40 rounded-full text-sm font-medium text-emerald-700 dark:text-emerald-300 whitespace-nowrap">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};