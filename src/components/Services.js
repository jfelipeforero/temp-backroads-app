import Service from './Service';
import Title from './Title';

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        <Service />
      </div>
    </section>
  );
}
export default Services;
