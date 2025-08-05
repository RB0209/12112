
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { label: "Lives Impacted", value: 25000 },
  { label: "Events Conducted", value: 350 },
  { label: "Communities Reached", value: 120 },
  { label: "Active Volunteers", value: 800 },
];

const ImpactStats = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg hover:shadow-[#38b6ff]/50 transition-shadow duration-300 rounded-xl p-6 text-center transform hover:-translate-y-1 hover:scale-105"
          >
            <div className="text-4xl font-extrabold text-[#38b6ff]">
              <CountUp end={stat.value} duration={2} enableScrollSpy />
            </div>
            <p className="mt-2 text-gray-700 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
