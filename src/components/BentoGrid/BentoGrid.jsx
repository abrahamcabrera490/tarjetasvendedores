import Card from './Card.jsx';

export default function BentoGrid({ cards = [] }) {
  return (
    <section className="bento-grid">
      {cards.map((c, i) => (
        <Card key={i} {...c} />
      ))}
    </section>
  );
}
