"use client";

import Headline from "components/ui/headline";
import { motion } from "framer-motion";
import { FaPlaneDeparture, FaThumbsUp, FaUserCheck } from "react-icons/fa";

const achievements = [
  {
    id: 1,
    icon: <FaUserCheck />,
    stat: "5000+",
    description: "Happy Travelers",
  },
  {
    id: 2,
    icon: <FaPlaneDeparture />,
    stat: "1500+",
    description: "Trips Taken",
  },
  {
    id: 3,
    icon: <FaThumbsUp />,
    stat: "2000+",
    description: "5-Star Reviews",
  },
];

const OurAchievements = () => {
  return (
    <section className="py-16 ">
      {/* Content Container */}
      <motion.div
        className="max-w-screen-xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Title */}
        <Headline
          title="Our Achievements"
          subtitle="We take pride in delivering exceptional travel experiences. Here’s what makes us stand out."
          classes={{
            container: "max-w-4xl mx-auto",
            title: "text-3xl font-bold text-gray-800 dark:text-white",
            subtitle: "mt-4 text-base text-gray-600 dark:text-gray-400",
          }}
        />

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="group relative flex flex-col items-center justify-center p-6 rounded-lg shadow-lg bg-gradient-to-br from-white/60 to-gray-100 dark:from-gray-800 dark:to-gray-700 backdrop-blur-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="text-6xl text-primary-600 mb-4 transition-transform duration-300 group-hover:scale-110">
                {achievement.icon}
              </div>

              {/* Statistic */}
              <h3 className="text-4xl font-extrabold text-gray-800 dark:text-white">
                {achievement.stat}
              </h3>

              {/* Description */}
              <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurAchievements;
