import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>AICTE IDEA Lab</h3>
            <p style={{ opacity: 0.8 }}>
              Kongunadu College of Engineering and Technology<br />
              Namakkal-Trichy Main Road, Trichy - 621215
            </p>
            <p style={{ marginTop: '15px' }}>
              <i className="fa-solid fa-phone"></i> +91 86800 02425
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> <a href="mailto:idealab@kongunadu.ac.in" style={{color: 'inherit', textDecoration: 'none'}}>idealab@kongunadu.ac.in</a>
            </p>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Lab</Link></li>
              <li><Link to="/vision">Vision & Mission</Link></li>
              <li><Link to="/activities">Activities</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/KongunaduCollegeofEngineeringAndTechnology/"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Kongunadu College of Engineering and Technology on Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://x.com/Kongunadu_KNCET"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Kongunadu College of Engineering and Technology on X"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/school/kongunadu-college-of-engineering-and-technology/"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Kongunadu College of Engineering and Technology on LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/kongunadu_college_of_engineer/"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Kongunadu College of Engineering and Technology on Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          &copy; 2026 AICTE IDEA Lab. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
