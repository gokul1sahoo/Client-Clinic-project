import { fullTreatments } from '../data/content';

function TreatmentsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Treatments</h1>
        <p className="page-intro">
          Sakthi Dental Clinic offers comprehensive dental solutions with modern techniques and
          patient-first care.
        </p>

        <div className="card-grid two-col">
          {fullTreatments.map((item) => (
            <article className="card" key={item.title}>
              <img src={item.image} alt={item.title} className="card-image" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TreatmentsPage;
