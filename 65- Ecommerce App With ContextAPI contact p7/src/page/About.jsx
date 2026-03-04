import React from 'react';

const About = () => {
  return (
    <section className="py-16 md:py-20 bg-none">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            About Click Shop Online Store
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Welcome to <span className="font-semibold text-indigo-600">Click Shop Online Store</span>,
             your one-stop destination for the latest and greatest in electronics.
            From cutting-edge gadgets to must-have accessories, we're here to power up your tech life with premium products and unbeatable service.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center md:text-left">
            Our Mission
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              At Click Shop Online Store, our mission is to make innovative technology accessible to everyone. We're passionate about connecting people with the
              tools and tech they need to thrive in a digital world — all at competitive prices and delivered with speed and care.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center md:text-left">
            Why Choose Click Shop Online Store?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              "Top-quality electronic products from trusted brands",
              "Lightning-fast and secure shipping",
              "Reliable customer support, always ready to help",
              "Easy returns and hassle-free shopping experience"
            ].map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Our Vision
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              We envision a future where technology elevates everyday life.  we're committed to staying ahead of the curve, offering
              cutting-edge solutions that are both practical and affordable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;