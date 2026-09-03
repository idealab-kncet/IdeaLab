import Seo from '../components/Seo';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact the AICTE IDEA Lab at Kongunadu College of Engineering and Technology, Trichy — address, phone, email, and lab hours."
        path="/contact"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]}
      />

      {/* Page Header */}
      <header className="page-header"
        style={{backgroundImage: "linear-gradient(rgba(0,33,71,0.8), rgba(0,33,71,0.8)), url('/idealab.webp')"}}>
        <div className="container">
          <h1>Get In Touch</h1>
          <p className="breadcrumb">Home / Contact</p>
        </div>
      </header>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-layout-grid" style={{display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '60px', alignItems: 'start'}}>

            {/* Contact Info */}
            <div>
              <div className="text-content-block" style={{textAlign: 'left', margin: 0, padding: 0}}>
                <h2 className="section-title" style={{marginBottom: '20px'}}>Contact Information</h2>
                <p style={{marginBottom: '40px'}}>Have an idea? Want to visit the lab? Reach out to us using the details below.</p>
              </div>

              <div className="contact-info-grid">
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h4>Our Location</h4>
                    <p>AICTE IDEA Lab, D Block (First Floor)<br/>
                       Kongunadu College of Engineering and Technology<br/>
                       Namakkal-Trichy Main Road, Trichy - 621215</p>
                  </div>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px'}} className="contact-info-pair">
                  <div className="contact-info-item" style={{height: '100%'}}>
                    <div className="contact-icon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <h4>Email Us</h4>
                      <p><a href="mailto:idealab@kongunadu.ac.in">idealab@kongunadu.ac.in</a></p>
                    </div>
                  </div>

                  <div className="contact-info-item" style={{height: '100%'}}>
                    <div className="contact-icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <h4>Call Us</h4>
                      <p><a href="tel:+918680002425">+91 86800 02425</a></p>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div>
                    <h4>Lab Hours</h4>
                    <p>24/7 Access for Students<br/>
                       Mon - Fri: 9:00 AM - 5:00 PM (Staff Support)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <h3 style={{marginBottom: '20px', fontSize: '28px'}}>Find Us Here</h3>
              <div style={{height: '500px', boxShadow: 'var(--shadow-lg)', borderRadius: '16px', overflow: 'hidden'}}>
                <iframe
                  title="Map showing the location of Kongunadu College of Engineering and Technology, Trichy"
                  src="https://maps.google.com/maps?q=Kongunadu+College+of+Engineering+and+Technology,+Tholurpatti,+Tamil+Nadu+621215&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
