import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
}