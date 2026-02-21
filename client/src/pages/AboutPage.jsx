import { doctors } from '../data/content';

function AboutPage() {
  return (
    <section className="section">
      <div className="container page-narrow">
        <h1>Get to Know Dr. Anupriya</h1>
        <h3>Your Trusted Partner in Dental Care</h3>
        <p>
          Bringing over 20 years of expertise, Dr. Anupriya stands as a leading figure in modern
          dentistry at Hosur. She began her professional journey after graduating in 2000 and further
          refined her clinical skills during six impactful years at Mathura Clinic.
        </p>
        <p>
          In 2004, she founded Sakthi Dental Clinic with a vision to make high-quality dental care
          accessible to all. Her dedication also includes long-standing service with the Primary
          Health Center at Chandara Hospital as a trusted dental consultant.
        </p>
        <p>
          At Sakthi Dental Clinic, every visit blends advanced dental technology with a warm,
          patient-friendly environment. From preventive care to specialized treatment, the team is
          committed to comfort, precision, and personalized outcomes.
        </p>

        <h2>Our Vision & Mission</h2>
        <p>
          Our mission is to redefine oral healthcare through compassionate, personalized, and
          advanced dental care. We create a welcoming environment where patients feel confident,
          supported, and informed at every stage of treatment.
        </p>
        <p>
          Our vision is to be a leading force in modern dentistry, recognized for excellence,
          innovation, and community impact. We aspire to improve lives by encouraging preventive
          practices and delivering trusted, long-lasting dental outcomes.
        </p>

        <h2>Our Team of Doctors</h2>
        <ul className="doctor-list">
          {doctors.map((doctor) => (
            <li key={doctor}>{doctor}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutPage;
