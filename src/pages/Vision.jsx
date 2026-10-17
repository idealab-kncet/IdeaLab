import Seo from '../components/Seo';

export default function Vision() {
  return (
    <>
      <Seo
        title="Vision & Mission"
        description="The vision, mission, and objectives of the AICTE IDEA Lab at Kongunadu College of Engineering and Technology, Trichy — building innovation, prototyping, and entrepreneurship skills."
        path="/vision"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Vision & Mission', path: '/vision' }]}
      />

      {/* Page Header */}
      <header className="page-header"
        style={{backgroundImage: `linear-gradient(rgba(0,33,71,0.8), rgba(0,33,71,0.8)), url('${import.meta.env.BASE_URL}idealab.webp')`}}>
        <div className="container">
          <h1>Vision & Mission</h1>
          <p className="breadcrumb">Home / Vision & Mission</p>
        </div>
      </header>

      {/* Vision & Mission Content */}
      <section className="section">
        <div className="container">

          {/* Vision: full width */}
          <div className="card vision-card" style={{padding: '40px', borderLeft: '5px solid var(--secondary-color)', marginBottom: '40px'}}>
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '20px'}}>
              <i className="fa-solid fa-eye" style={{marginTop: '5px', fontSize: '2rem'}}></i>
              <div style={{textAlign: 'left', margin: 0, padding: 0}}>
                <h2 style={{marginBottom: '15px'}}>Our Vision</h2>
                <p style={{fontSize: '1.1rem', fontWeight: 400, fontStyle: 'normal', color: 'var(--text-color)', margin: 0}}>
                  To emerge as a center of excellence in innovation, design, and prototyping by transforming
                  students into competent professionals with leadership skills and ethical values through
                  experiential learning, research, and entrepreneurship.
                </p>
              </div>
            </div>
          </div>

          {/* Mission + Objectives: side by side below Vision */}
          <div className="vision-mission-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'stretch'}}>

            <div className="card mission-card" style={{padding: '40px', borderLeft: '5px solid var(--primary-color)'}}>
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '20px'}}>
                <i className="fa-solid fa-bullseye" style={{marginTop: '5px', fontSize: '2rem'}}></i>
                <div>
                  <h2 style={{marginBottom: '15px'}}>Our Mission</h2>
                  <ul style={{listStyleType: 'none', padding: 0}}>
                    <li style={{marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                      <i className="fa-solid fa-check-circle"
                        style={{marginTop: '5px', flexShrink: 0}}></i>
                      <span style={{fontSize: '1.1rem'}}>To provide state-of-the-art
                        resources and infrastructure for ideation, design, and prototyping.</span>
                    </li>
                    <li style={{marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                      <i className="fa-solid fa-check-circle"
                        style={{marginTop: '5px', flexShrink: 0}}></i>
                      <span style={{fontSize: '1.1rem'}}>To create a learner-centric
                        environment that promotes hands-on learning and continuous skill development.</span>
                    </li>
                    <li style={{marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                      <i className="fa-solid fa-check-circle"
                        style={{marginTop: '5px', flexShrink: 0}}></i>
                      <span style={{fontSize: '1.1rem'}}>To strengthen collaboration
                        with industry, research institutions, and innovation ecosystems.</span>
                    </li>
                    <li style={{marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                      <i className="fa-solid fa-check-circle"
                        style={{marginTop: '5px', flexShrink: 0}}></i>
                      <span style={{fontSize: '1.1rem'}}>To enhance employability and
                        entrepreneurial skills through innovation, startups, and intellectual property
                        creation.</span>
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                      <i className="fa-solid fa-check-circle"
                        style={{marginTop: '5px', flexShrink: 0}}></i>
                      <span style={{fontSize: '1.1rem'}}>To develop sustainable and
                        socially relevant technological solutions by adapting to emerging trends.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card objectives-card" style={{padding: '40px', borderLeft: '5px solid var(--secondary-color)'}}>
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '20px'}}>
                <i className="fa-solid fa-list-check" style={{marginTop: '5px', fontSize: '2rem', color: 'var(--secondary-color)'}}></i>
                <div>
                  <h2 style={{marginBottom: '15px'}}>Our Objectives</h2>
                  <ul style={{listStyleType: 'none', padding: 0}}>
                    <li style={{marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                      <i className="fa-solid fa-check-circle"
                        style={{marginTop: '5px', flexShrink: 0}}></i>
                      <span style={{fontSize: '1.1rem'}}>To promote innovation and creative thinking through hands-on ideation, design, and prototyping activities.</span>
                    </li>
                    <li style={{marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                      <i className="fa-solid fa-check-circle"
                        style={{marginTop: '5px', flexShrink: 0}}></i>
                      <span style={{fontSize: '1.1rem'}}>To provide experiential, learner-centric education that bridges the gap between theoretical knowledge and real-world problem solving.</span>
                    </li>
                    <li style={{marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                      <i className="fa-solid fa-check-circle"
                        style={{marginTop: '5px', flexShrink: 0}}></i>
                      <span style={{fontSize: '1.1rem'}}>To nurture entrepreneurship and startup culture by supporting product development, innovation-driven projects, and intellectual property creation.</span>
                    </li>
                    <li style={{marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                      <i className="fa-solid fa-check-circle"
                        style={{marginTop: '5px', flexShrink: 0}}></i>
                      <span style={{fontSize: '1.1rem'}}>To enhance employability and leadership skills such as critical thinking, teamwork, and ethical responsibility through project-based learning.</span>
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                      <i className="fa-solid fa-check-circle"
                        style={{marginTop: '5px', flexShrink: 0}}></i>
                      <span style={{fontSize: '1.1rem'}}>To develop sustainable and socially relevant technological solutions by adopting emerging technologies to address societal and industry challenges.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
