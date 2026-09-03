import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * DRAFT CONTENT — pending review by lab staff.
 *
 * These answers were written from what's already published elsewhere on this
 * site (contact details, lab hours, the general lab description) plus
 * deliberately cautious, non-specific wording anywhere a real policy or fact
 * (exact booking process, eligibility rules, equipment inventory) would
 * otherwise have to be invented. Before treating this as final copy, have
 * someone from the lab confirm each answer and replace the hedged ones with
 * real specifics.
 */
const FAQ_ITEMS = [
  {
    question: 'What is the AICTE IDEA Lab?',
    answer:
      'The AICTE IDEA (Idea Development, Evaluation & Application) Lab is a facility at Kongunadu College of Engineering and Technology, Trichy, that gives students hands-on resources to apply STEM fundamentals and turn ideas into working prototypes.',
  },
  {
    question: 'Who can use the lab?',
    answer:
      'Students and faculty of Kongunadu College of Engineering and Technology can use the lab for coursework, personal projects, and research prototypes. Contact the lab coordinator to confirm eligibility for a specific project.',
  },
  {
    question: "What are the lab's operating hours?",
    answer:
      'The lab is accessible 24x7 for students. Staff support is available Monday to Friday, 9:00 AM to 5:00 PM.',
  },
  {
    question: 'How do I get started with a project idea?',
    answer:
      "Reach out to the AICTE IDEA Lab team by email or phone with your idea, and the team will guide you through ideation, prototyping, and evaluation support.",
  },
  {
    question: 'What equipment and facilities are available?',
    answer:
      'The lab provides prototyping infrastructure and dedicated workspace — see the Facilities page for photos of the space. Contact the lab directly for the current equipment list.',
  },
  {
    question: 'How can I contact the lab?',
    answer:
      'Email idealab@kongunadu.ac.in, call +91 86800 02425, or visit the AICTE IDEA Lab, D Block (First Floor), Kongunadu College of Engineering and Technology, Namakkal-Trichy Main Road, Trichy - 621215.',
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className="card"
      style={{ padding: 0, overflow: 'hidden', height: 'fit-content' }}
    >
      <h3 style={{ margin: 0 }}>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            padding: '22px 26px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            font: 'inherit',
            fontSize: '1.05rem',
            fontWeight: 600,
            color: 'var(--primary-color)',
            textAlign: 'left',
          }}
        >
          <span>{item.question}</span>
          <i
            className="fa-solid fa-chevron-down"
            aria-hidden="true"
            style={{
              flexShrink: 0,
              transition: 'transform 0.3s ease',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              color: 'var(--secondary-color)',
            }}
          ></i>
        </button>
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.3s ease',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <p style={{ margin: 0, padding: '0 26px 22px' }}>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  // Two independent columns (first half / second half) instead of a single
  // CSS grid — a grid's row height is set by its tallest cell, so opening one
  // item would stretch its row and push every row below it down, even on the
  // other side. Separate flex columns mean opening an item only reflows items
  // below it in its own column. Splitting by half (rather than interleaving)
  // also means stacking the two columns on mobile still reads in the
  // original question order (1,2,3,4,5,6), not (1,3,5,2,4,6).
  const withIndex = FAQ_ITEMS.map((item, index) => ({ item, index }));
  const half = Math.ceil(withIndex.length / 2);
  const leftItems = withIndex.slice(0, half);
  const rightItems = withIndex.slice(half);

  const renderColumn = (entries) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {entries.map(({ item, index }) => (
        <FaqItem
          key={item.question}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );

  return (
    <section className="section bg-light">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div
          className="faq-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            alignItems: 'start',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {renderColumn(leftItems)}
          {renderColumn(rightItems)}
        </div>
      </div>
    </section>
  );
}
