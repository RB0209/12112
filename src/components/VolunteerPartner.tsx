
import React from "react";
import { motion } from "framer-motion";

const VolunteerPartner = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-[#38b6ff] mb-4">Volunteer & Partner With Us</h2>
        <p className="text-gray-700 text-md">
          We collaborate with individuals, local organizations, and global partners who share our vision of sustainable change. Whether it's offering your time, skills, or resources — your support drives our mission forward.
        </p>
        <div className="mt-6 flex justify-center gap-6 flex-wrap">
          <div className="flex items-center gap-3 text-gray-600">
            <span className="text-xl">🤝</span> <span>Partnership Programs</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <span className="text-xl">🧑‍🤝‍🧑</span> <span>Volunteer Opportunities</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <span className="text-xl">🌍</span> <span>Community Outreach</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VolunteerPartner;
