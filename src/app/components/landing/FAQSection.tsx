'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Что такое инфраструктура данных государственного уровня?",
    answer:
      "Централизованная платформа, объединяющая данные из различных ведомств в единое управляемое пространство для аналитики, стратегического планирования и принятия решений на основе доказательных данных.",
  },
  {
    question: "Как обеспечивается суверенитет данных?",
    answer:
      "Tengrilake.AI поддерживает развёртывание на собственной государственной инфраструктуре, в государственном облаке или в гибридной среде. Все данные остаются под юрисдикцией заказчика и не передаются третьим сторонам.",
  },
  {
    question: "Можно ли развернуть платформу на государственной инфраструктуре?",
    answer:
      "Да. Платформа поддерживает полноценное on-premises развёртывание, обеспечивая полный контроль над данными внутри государственного периметра безопасности.",
  },
  {
    question: "Соответствует ли система требованиям регуляторов?",
    answer:
      "Tengrilake.AI спроектирован с учётом требований государственного сектора: ролевое управление доступом (RBAC), сквозное шифрование данных, полное журналирование аудита и прослеживаемость данных на протяжении всего жизненного цикла.",
  },
  {
    question: "Для каких уровней государственного управления подходит платформа?",
    answer:
      "Платформа масштабируется от муниципальных проектов до национальных экосистем данных — поддерживается развёртывание на муниципальном, региональном и национальном уровнях.",
  },
  {
    question: "Сколько времени занимает внедрение платформы?",
    answer:
      "Сроки внедрения зависят от масштаба проекта и существующей инфраструктуры. Пилотное развёртывание, как правило, реализуется в течение 8–12 недель. Национальные проекты планируются индивидуально после технического обследования.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`border transition-colors duration-200 ${open ? 'border-cyan-400/30' : 'border-white/10 hover:border-white/20'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      viewport={{ once: true }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left hover:bg-white/[0.03] transition-colors duration-200"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-semibold text-white/85 text-base leading-snug">
          {question}
        </span>
        <span className={`flex-shrink-0 p-1 border transition-colors duration-200 ${open ? 'border-cyan-400/40 text-cyan-400' : 'border-white/15 text-white/40'}`}>
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-7 pb-6 pt-1 border-t border-white/8">
              <p className="text-white/60 leading-relaxed text-sm">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Часто задаваемые{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
              вопросы
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Ответы на ключевые вопросы о платформе государственного уровня.
          </p>
        </motion.div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
