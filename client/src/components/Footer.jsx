import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { clinicInfo, coreTreatments } from '../data/content';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>Contact Info</h4>
          <p>{clinicInfo.address}</p>
          <p>{clinicInfo.email}</p>
          <p>{clinicInfo.phone}</p>
          <p>{clinicInfo.timings}</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/treatments">Treatments</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Key Treatments</h4>
          <ul>
            {coreTreatments.slice(0, 6).map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <div className="social-row" aria-label="social links">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <p className="copyright">© {new Date().getFullYear()} Sakthi Dental Clinic. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
