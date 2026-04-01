export default function Tiles() {
  return (
    <section className="tilesSection">
      <div className="tilesGrid">
        {[1, 2, 3, 4].map((_, i) => (
          <div className="tile" key={i}>
            <h2>Article</h2>
            <p>Put random text here</p>
          </div>
        ))}
      </div>
    </section>
  );
}