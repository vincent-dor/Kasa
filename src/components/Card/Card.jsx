export default function Card({ image, title }) {
  return (
    <article className="card">
      <img src={image} alt="location" />
      <p className="card__title">{title}</p>
    </article>
  );
}
