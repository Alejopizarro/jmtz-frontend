"use client";
import { motion } from "framer-motion";

const Differential = () => {
  return (
    <section className="bg-background relative">
      <motion.div className="max-w-7xl mx-auto flex flex-col gap-8 py-20 px-8 lg:py-26">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl lg:text-7xl font-semibold bg-gradient-to-br from-slate-50 to-slate-300 text-transparent bg-clip-text leading-tight tracking-tight"
        >
          Forget Transactions.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl lg:text-7xl font-semibold bg-gradient-to-br from-slate-50 to-slate-300 text-transparent bg-clip-text leading-tight tracking-tight"
        >
          Forget Discounts.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-5xl lg:text-7xl font-semibold bg-gradient-to-br from-slate-50 to-slate-300 text-transparent bg-clip-text leading-tight tracking-tight"
        >
          The future of growth is ...
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-6xl lg:text-8xl font-black leading-tight tracking-tight text-section-gold"
        >
          Emotional
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Differential;
