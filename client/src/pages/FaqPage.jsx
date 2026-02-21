import { faqs } from '../data/content';

function FaqPage() {
  return (
    <section className="section">
      <div className="container page-narrow">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqPage;
