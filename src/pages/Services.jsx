import Seo from '../components/Seo';

export default function Services() {
  return (
    <>
      <Seo
        title="Services Provided"
        description="Training, seed fund, mentoring, incubation, internships, and 7 more services offered by the AICTE IDEA Lab at Kongunadu College of Engineering and Technology, Trichy."
        path="/services"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services Provided', path: '/services' }]}
      />

      {/* Page Header */}
      <header className="page-header"
        style={{backgroundImage: "linear-gradient(rgba(0,33,71,0.8), rgba(0,33,71,0.8)), url('/idealab.webp')"}}>
        <div className="container">
          <h1>Services Provided</h1>
          <p className="breadcrumb">Home / Services Provided</p>
        </div>
      </header>

      {/* Services Content */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            {/* 1. Training */}
            <div className="service-item">
              <div className="icon-container">
                <i className="fa-solid fa-chalkboard-user"></i>
              </div>
              <h3>Training</h3>
            </div>

            {/* 2. Seed Fund */}
            <div className="service-item">
              <div className="icon-container">
                <i className="fa-solid fa-seedling"></i>
              </div>
              <h3>Seed Fund</h3>
            </div>

            {/* 3. Development */}
            <div className="service-item">
              <div className="icon-container">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3>Development</h3>
            </div>

            {/* 4. Mentoring */}
            <div className="service-item">
              <div className="icon-container">
                <i className="fa-solid fa-user-group"></i>
              </div>
              <h3>Mentoring</h3>
            </div>

            {/* 5. Incubation */}
            <div className="service-item">
              <div className="icon-container">
                <i className="fa-solid fa-flask"></i>
              </div>
              <h3>Incubation</h3>
            </div>

            {/* 6. Internship */}
            <div className="service-item">
              <div className="icon-container">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <h3>Internship</h3>
            </div>

            {/* 7. Startup */}
            <div className="service-item">
              <div className="icon-container">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <h3>Startup</h3>
            </div>

            {/* 8. Commercialisation */}
            <div className="service-item">
              <div className="icon-container">
                <i className="fa-solid fa-sack-dollar"></i>
              </div>
              <h3>Commercialisation</h3>
            </div>

            {/* 9. Consultancy */}
            <div className="service-item">
              <div className="icon-container">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <h3>Consultancy</h3>
            </div>

            {/* 10. Marketing */}
            <div className="service-item">
              <div className="icon-container">
                <i className="fa-solid fa-bullhorn"></i>
              </div>
              <h3>Marketing</h3>
            </div>

            {/* 11. IPR */}
            <div className="service-item">
              <div className="icon-container">
                <i className="fa-solid fa-copyright"></i>
              </div>
              <h3>IPR</h3>
            </div>

            {/* 12. Networking */}
            <div className="service-item">
              <div className="icon-container">
                <i className="fa-solid fa-network-wired"></i>
              </div>
              <h3>Networking</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
