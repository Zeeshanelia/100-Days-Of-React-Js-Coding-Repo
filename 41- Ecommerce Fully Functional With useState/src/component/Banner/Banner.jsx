import { useEffect, useState } from "react";

const Banner = () => {

  // 48 hours in seconds
  const initialTimes = 48 * 60 * 60;

  //  Safe initialization from localStorage
  const [timeLeft, setTimeLeft] = useState(() => {
    const storedTime = localStorage.getItem("remainTime");
    return storedTime !== null ? Number(storedTime) : initialTimes;
  });

  // Format time
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minute = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return {
      hours: String(hours).padStart(2, "0"),
      minute: String(minute).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const { hours, minute, seconds } = formatTime(timeLeft);

  //  Interval created ONCE (not on every render)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          localStorage.setItem("remainTime", 0);
          return 0;
        }

        const nextTime = prev - 1;
        localStorage.setItem("remainTime", nextTime);
        return nextTime;
      });
    }, 1000);

    //  Proper cleanup
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full mt-13 bg-yellow-100 px-4 py-2">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">

      
        <div className="flex flex-col items-center md:items-start text-center md:ml-8 space-y-4">

          <h1 className="tracking-tight text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-500 uppercase">
            Big Sales
          </h1>

          <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-400">
            Up to 40% OFF - Just In Limited Time Only!
          </h2>

          {/* Countdown */}
          <div className="flex gap-2 mt-3 px-3 py-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500 bg-slate-600 rounded">
            <p className="p-2">{hours}</p>:
            <p className="p-2">{minute}</p>:
            <p className="p-2">{seconds}</p>
          </div>

        </div>

    
        <div className="md:h-[300px] w-full md:w-1/2 lg:w-2/5">
          <img
            src="/images/2-girl-shopping-bags-hands.png"
            alt="Girl holding shopping bags"
            className="md:w-full md:h-[310px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
