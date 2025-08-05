
import React from "react";
import { motion } from "framer-motion";

const cards = [
  { title: "Our Mission", text: "To create sustainable impact in underprivileged communities through education, health, and empowerment." },
  { title: "Our Vision", text: "A world where every individual has the opportunity to thrive and contribute meaningfully to society." },
  { title: "Our Values", text: "Integrity, Inclusivity, Innovation, and Impact." },
];

const MissionVision = () => {
  return (
    <section className="bg-white px-4 py-16 overflow-x-auto">
      <div className="flex space-x-6 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="min-w-[300px] sm:min-w-[400px] p-6 rounded-xl bg-gray-50 shadow-md hover:shadow-[#38b6ff]/40 transition-shadow"
          >
            <h3 className="text-xl font-semibold text-[#38b6ff] mb-2">{card.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;
