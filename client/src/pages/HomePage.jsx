import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  bannerImages,
  clinicInfo,
  coreTreatments,
  facilities,
  testimonials,
  whyChoose,
} from '../data/content';

function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Trusted Dental Care in Hosur</p>
            <h1>{clinicInfo.tagline}</h1>
            <p>{clinicInfo.subtext}</p>
            <div className="hero-cta-row">
              <button type="button" className="btn-primary">
                Fix an Appointment
              </button>
              <button type="button" className="btn-secondary">
                Emergency Dental Support
              </button>
            </div>
          </div>
          <div className="hero-card hero-banner-wrap">
            <img
              src={bannerImages[index % bannerImages.length]}
              alt="Sakthi Dental Clinic assurance banner"
              className="hero-banner-image"
            />
            <h3>{clinicInfo.assurance[0]}</h3>
            <p>{clinicInfo.assurance[1]}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Why Choose Sakthi Dental Clinic?</h2>
          <div className="card-grid four-col">
            {whyChoose.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <h2>Explore Our Services</h2>
          <div className="card-grid three-col">
            {coreTreatments.map((treatment) => (
              <article key={treatment.title} className="card">
                <img src={treatment.image} alt={treatment.title} className="card-image" />
                <h3>{treatment.title}</h3>
                <p>{treatment.description}</p>
              </article>
            ))}
          </div>
          <div className="center-row">
            <Link to="/treatments" className="btn-primary as-link">
              View Full List of Treatments
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What Our Patients Say</h2>
          <article className="testimonial-card">
            <p>“{testimonials[index].quote}”</p>
            <h4>- {testimonials[index].author}</h4>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <h2>Clinic Facilities</h2>
          <div className="facility-grid">
            {facilities.map((item) => {
              return (
                <article key={item.title} className="facility-item">
                  <img src={item.icon} alt={item.title} className="facility-icon-image" />
                  <span>{item.title}</span>
                </article>
              );
            })}
          </div>
          <p className="center-note">Doctors available daily: 9 AM - 9 PM</p>
        </div>
      </section>
    </>
  );
}

export default HomePage;
