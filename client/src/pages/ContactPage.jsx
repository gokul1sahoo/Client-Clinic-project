import { useState } from 'react';
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import axios from 'axios';
import { clinicInfo } from '../data/content';

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactPage() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Name is required.';
    if (!formData.email.trim()) nextErrors.email = 'Email is required.';
    if (formData.email.trim() && !emailRegex.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!formData.phone.trim()) nextErrors.phone = 'Phone number is required.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    if (!validate()) return;

    try {
      setSubmitting(true);
      const baseUrl = import.meta.env.VITE_API_URL || '';
      const response = await axios.post(`${baseUrl}/api/contact`, formData);

      setStatus({ type: 'success', message: response.data.message });
      setFormData(initialState);
      setErrors({});
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Unable to submit right now. Please try again.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section section-muted">
      <div className="container contact-grid">
        <article className="contact-card">
          <h1>We would love to hear from you</h1>
          <form onSubmit={handleSubmit} noValidate>
            <div className="field-wrap">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
              {errors.name && <small className="error-text">{errors.name}</small>}
            </div>

            <div className="field-wrap">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <small className="error-text">{errors.email}</small>}
            </div>

            <div className="field-wrap">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <small className="error-text">{errors.phone}</small>}
            </div>

            <div className="field-wrap">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-primary" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit'}
            </button>

            {status.message && (
              <p className={status.type === 'success' ? 'status-success' : 'status-error'}>{status.message}</p>
            )}
          </form>
        </article>

        <article className="contact-card">
          <h2>Reach us</h2>
          <ul className="reach-list">
            <li>
              <FaMapMarkerAlt />
              <span>{clinicInfo.address}</span>
            </li>
            <li>
              <FaEnvelope />
              <span>{clinicInfo.email}</span>
            </li>
            <li>
              <FaPhoneAlt />
              <span>{clinicInfo.phone}</span>
            </li>
            <li>
              <FaClock />
              <span>
                <strong>{clinicInfo.timings}</strong>
              </span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default ContactPage;
