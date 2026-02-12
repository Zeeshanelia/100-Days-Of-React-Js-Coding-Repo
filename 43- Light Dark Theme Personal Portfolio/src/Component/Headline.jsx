import { useState, useEffect } from 'react';

export const Headline = () => {
  const phrases = [
    "Web Development",
    "Next-Gen Technology",
    "Creative Solutions",
    "Digital Innovation",
    "User Experience",
    "Future Ready",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText !== currentPhrase) {
        // Typing
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        setSpeed(80); // slightly faster typing feels more modern
      } else if (isDeleting && currentText !== '') {
        // Deleting
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        setSpeed(40); // faster delete
      } else if (!isDeleting && currentText === currentPhrase) {
        // Pause at full text
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && currentText === '') {
        // Move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, speed]);

  return (
    <section
      className="
        relative py-16 md:py-24 lg:py-32 overflow-hidden
        bg-gradient-to-r from-gray-50 to-blue-50
        dark:from-gray-900 dark:to-purple-900
        text-gray-900 dark:text-gray-100
        transition-colors duration-300
        px-4 sm:px-6 lg:px-8
      "
    >
      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* Main Typing Animation */}
        <div className="relative inline-block mb-6 md:mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="block md:inline">
              Leading in{' '}
            </span>
            <span
              className="
                text-emerald-600 dark:text-emerald-400
                border-r-4 border-emerald-500 dark:border-emerald-400
                pr-1 animate-pulse
              "
            >
              {currentText || '\u00A0'}
            </span>
          </h1>

          {/* Fallback cursor when text is empty */}
          {currentText === '' && (
            <span
              className="
                absolute left-[calc(100%-0.25rem)] top-1/2 -translate-y-1/2
                w-1.5 md:w-2 h-10 md:h-14 bg-emerald-500 dark:bg-emerald-400
                animate-pulse rounded-sm
              "
            />
          )}
        </div>

        {/* Subtitle */}
        <p className="
          text-lg md:text-xl lg:text-2xl
          text-gray-700 dark:text-gray-300
          max-w-3xl mx-auto leading-relaxed
          mb-10 md:mb-14
        ">
          Innovative approaches for modern businesses
        </p>

        {/* Animated Dots Indicator */}
        <div className="flex justify-center gap-2.5 md:gap-3 mb-12 md:mb-16">
          {phrases.map((_, index) => (
            <div
              key={index}
              className={`
                w-2.5 h-2.5 rounded-full transition-all duration-400
                ${index === currentPhraseIndex
                  ? 'bg-emerald-500 dark:bg-emerald-400 w-10 scale-110'
                  : 'bg-gray-300 dark:bg-gray-600'
                }
              `}
            />
          ))}
        </div>

        {/* Decorative Separator + Stats */}
        <div className="flex flex-col items-center gap-8 md:gap-10">
          <div className="flex items-center gap-6 w-full max-w-lg">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
            <span className="text-sm md:text-base text-gray-500 dark:text-gray-400 uppercase tracking-widest font-medium">
              Expertise
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            {[
              { value: '100%', label: 'Quality Focus' },
              { value: '24/7', label: 'Dedication' },
              { value: '2+',  label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-600 dark:text-emerald-400">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 md:mt-16">
          <button
            className="
              group relative inline-flex items-center gap-3
              px-8 py-4 md:px-10 md:py-5
              bg-gradient-to-r from-emerald-500 to-emerald-600
              dark:from-emerald-600 dark:to-emerald-700
              text-white font-semibold text-lg md:text-xl rounded-full
              hover:from-emerald-600 hover:to-emerald-700
              dark:hover:from-emerald-700 dark:hover:to-emerald-800
              transition-all duration-300
              shadow-lg shadow-emerald-500/20 dark:shadow-emerald-500/30
              hover:shadow-xl hover:shadow-emerald-500/30 dark:hover:shadow-emerald-500/40
              hover:-translate-y-1
            "
          >
            Start Your Project
            <span className="text-xl md:text-2xl group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Very subtle background pattern */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_center,transparent_1px,transparent_1px)]
          bg-[size:5rem_5rem] opacity-[0.03] dark:opacity-[0.06]
        "
      />
    </section>
  );
};