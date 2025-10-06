"use client";
import { motion } from "framer-motion";

const Differential = () => {
  return (
    <section className="min-h-screen bg-background relative">
      <motion.div
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col text-5xl lg:text-7xl gap-8 font-semibold bg-gradient-to-br from-slate-50 to-slate-300 text-transparent bg-clip-text leading-tight tracking-tight py-20 px-8 lg:py-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="hover:scale-105 transition duration-300 bg-gradient-to-br from-slate-50 to-slate-300 text-transparent bg-clip-text"
        >
          Forget Transactions.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hover:scale-105 transition duration-300 bg-gradient-to-br from-slate-50 to-slate-300 text-transparent bg-clip-text"
        >
          Forget Discounts.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hover:scale-105 transition duration-300 bg-gradient-to-br from-slate-50 to-slate-300 text-transparent bg-clip-text"
        >
          The future of growth is ...
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-6xl lg:text-8xl font-black leading-tight hover:scale-105 transition duration-300 tracking-tight text-section-gold"
        >
          Emotional
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Differential;
