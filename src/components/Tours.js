import Title from './Title';
import Tour from './Tour';

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />
      <div className="section-center featured-center">
        <Tour />
      </div>
    </section>
  );
}
export default Tours;
