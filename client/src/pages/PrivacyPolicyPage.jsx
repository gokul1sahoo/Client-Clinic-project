import { clinicInfo, privacyPolicySections } from '../data/content';

function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="container page-narrow">
        <h1>Privacy Policy</h1>
        <p>
          At Sakthi Dental Clinic, we are committed to protecting your privacy. This policy explains
          how information is collected, used, stored, and disclosed.
        </p>

        {privacyPolicySections.map((section) => (
          <article key={section.title} className="privacy-block">
            <h3>{section.title}</h3>
            <ul>
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}

        <article className="privacy-block">
          <h3>9. Contact Us</h3>
          <p>Address: {clinicInfo.address}</p>
          <p>Email: {clinicInfo.email}</p>
          <p>Phone: {clinicInfo.phone}</p>
        </article>
      </div>
    </section>
  );
}

export default PrivacyPolicyPage;
