
import React from "react";
import { motion } from "framer-motion";

const initiatives = [
  {
    title: "Clean Water Project",
    description: "Providing access to clean and safe drinking water in remote villages.",
    image: "/assets/initiative1.jpg",
  },
  {
    title: "Education for All",
    description: "Empowering children with access to quality primary education.",
    image: "/assets/initiative2.jpg",
  },
  {
    title: "Health Camps",
    description: "Organizing medical checkups and awareness drives in rural areas.",
    image: "/assets/initiative3.jpg",
  },
];

const FeaturedInitiatives = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#38b6ff] mb-8 text-center">Our Featured Initiatives</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {initiatives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl shadow hover:shadow-[#38b6ff]/40 transition-shadow"
            >
              <img src={item.image} alt={item.title} className="rounded-t-xl w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#38b6ff] mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInitiatives;
