import React from 'react';
import { Quote, Star, User } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const avatars = {
  leslie: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
  dianne: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
  alex: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
};

const testimonials = [
  {
    name: "Leslie Alexander",
    title: "CEO, Software Company",
    avatar: avatars.leslie,
    rating: 5,
    text: "Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    name: "Dianne Russell",
    title: "CEO, Plant Shop App",
    avatar: avatars.dianne,
    rating: 5,
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
  },
  {
    name: "Alex Johnson",
    title: "CTO, Tech Startup",
    avatar: avatars.alex,
    rating: 5,
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  customPaging: (i) => (
    <div
      className={`
        w-3 h-3 rounded-full transition-all duration-300
        ${i === 0 ? 'bg-emerald-500 dark:bg-emerald-400' : 'bg-gray-300 dark:bg-gray-600 hover:bg-emerald-400 dark:hover:bg-emerald-500'}
      `}
    />
  ),
  dotsClass: "slick-dots !bottom-[-50px] md:!bottom-[-60px]",
};

export const Testimonials = () => {
  return (
    <section
      className="
        relative py-4 md:py-8 lg:py-12 overflow-hidden
        bg-gradient-to-r from-gray-50 to-blue-50
        dark:from-gray-900 dark:to-purple-900
        text-gray-900 dark:text-gray-100
        transition-colors duration-300
        px-4 sm:px-6 lg:px-8
      "
    >
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/8 border border-emerald-500/20 dark:border-emerald-500/15 mb-6 backdrop-blur-sm">
            <User className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <p className="text-sm font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Client Testimonials
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            What Clients Say
            <span className="block mt-2 text-emerald-600 dark:text-emerald-400">
              About Working With Me
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real feedback from real clients — the results speak for themselves.
          </p>
        </div>

        {/* Decorative glows */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/5 dark:bg-emerald-500/8 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 dark:bg-purple-500/8 rounded-full blur-3xl animate-pulse-slow [animation-delay:2s]" />

        {/* Slider */}
        <div className="relative max-w-5xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((item, idx) => (
              <div key={idx} className="px-4 md:px-6">
                <div
                  className="
                    group relative bg-white/70 dark:bg-gray-900/40 backdrop-blur-md
                    rounded-2xl lg:rounded-3xl border border-gray-200/60 dark:border-gray-700/40
                    p-6 md:p-8 lg:p-10 shadow-lg shadow-gray-200/30 dark:shadow-black/20
                    hover:shadow-xl hover:shadow-emerald-500/15 dark:hover:shadow-emerald-500/20
                    hover:-translate-y-2 transition-all duration-300
                  "
                >
                  {/* Subtle quote decoration */}
                  <div className="absolute top-6 right-6 text-emerald-500/10 dark:text-emerald-400/5">
                    <Quote className="w-20 h-20 md:w-24 md:h-24" />
                  </div>

                  {/* Accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 rounded-l-2xl lg:rounded-l-3xl" />

                  {/* Client info */}
                  <div className="flex items-start gap-4 md:gap-6 mb-6 md:mb-8">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-md">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 dark:bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-md">
                        <Quote className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-3">
                        {item.title}
                      </p>

                      {/* Rating stars */}
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 md:w-6 md:h-6 ${
                              i < item.rating
                                ? 'fill-emerald-500 text-emerald-500 dark:fill-emerald-400 dark:text-emerald-400'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial text */}
                  <div className="relative">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg italic pl-5 md:pl-6 border-l-4 border-emerald-500/30 dark:border-emerald-500/20">
                      "{item.text}"
                    </p>
                  </div>

                  {/* Verified badge */}
                  <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/40">
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Verified Client</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Navigation hint */}
        <div className="text-center mt-16 md:mt-20">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-100/70 dark:bg-gray-800/40 rounded-full border border-gray-200/60 dark:border-gray-700/40 backdrop-blur-sm">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse [animation-delay:0.3s]" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse [animation-delay:0.6s]" />
            </div>
            <span className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
              Swipe or click dots to explore
            </span>
          </div>
        </div>

             {/************** Stats **************/}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 max-w-4xl mx-auto">
          {[
            { value: "95%", label: "Client Satisfaction" },
            { value: "20+",  label: "Projects Delivered" },
            { value: "100%",  label: "On Time Delivery" },
            { value: "4.8",  label: "Average Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-600 dark:text-emerald-400">
                {stat.value}
              </div>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};