"use client";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <div className="text-slate-100 relative">
      <motion.div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4 py-12 px-4 lg:py-26">
        <motion.h2 className="text-xl lg:text-2xl opacity-80 font-sans font-semibold">
          Ready to Turn Your Customers Into Fans?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-serif mb-4 text-5xl lg:text-7xl font-black"
        >
          Forget boring marketing. Let&#39;s talk fandom.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl opacity-80 mb-8"
        >
          This isn&#39;t theory. It&#39;s what I&#39;ve lived at Disney, City,
          and beyond. Real brands. Real transformation. Real growth.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="hover:scale-105 bg-primary rounded-full font-bold text-lg text-slate-50 shadow-2xl hover:shadow-3xl transition-all w-full max-w-xl py-4 px-8"
        >
          Let&#39;s talk growth
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Cta;
