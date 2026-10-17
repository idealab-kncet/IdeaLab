import Seo from '../components/Seo';

export default function Activities() {
  return (
    <>
      <Seo
        title="Activities"
        description="Workshops, hackathons, and hands-on programmes run by the AICTE IDEA Lab at Kongunadu College of Engineering and Technology, Trichy, with details on duration, audience, and capacity."
        path="/activities"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Activities', path: '/activities' }]}
      />

      {/* Page Header */}
      <header className="page-header"
        style={{backgroundImage: `linear-gradient(rgba(0,33,71,0.8), rgba(0,33,71,0.8)), url('${import.meta.env.BASE_URL}idealab.webp')`}}>
        <div className="container">
          <h1>Activities</h1>
          <p className="breadcrumb">Home / Activities</p>
        </div>
      </header>

      {/* Activities Grid */}
      <section className="section activities-section">
          <div className="container">
            {/* Grid of Activities */}
            <div className="card-grid" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px'}}>

            {/* 1. Faculty Development Programme (FDP) */}
            <div className="card" style={{padding: '25px', borderTop: '4px solid var(--secondary-color)'}}>
              <div
                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px'}}>
                <i className="fa-solid fa-chalkboard-user"
                  style={{fontSize: '2rem'}}></i>
                <span
                  style={{background: 'var(--light-grey)', color: 'var(--text-color)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 500}}>06
                  Days</span>
              </div>
              <h3 style={{marginBottom: '15px', fontSize: '1.2rem'}}>Faculty Development Programme (FDP)</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)', fontSize: '0.95rem'}}>
                <li style={{marginBottom: '8px'}}><i className="fa-solid fa-users"
                    style={{color: 'var(--secondary-color)', width: '20px'}}></i> Audience:
                  <strong>Faculty</strong>
                </li>
                <li><i className="fa-solid fa-maximize" style={{color: 'var(--secondary-color)', width: '20px'}}></i>
                  Capacity: <strong>20 Participants</strong></li>
              </ul>
            </div>

            {/* 2. Skilling Programmes */}
            <div className="card" style={{padding: '25px', borderTop: '4px solid var(--secondary-color)'}}>
              <div
                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px'}}>
                <i className="fa-solid fa-gears" style={{fontSize: '2rem', color: 'var(--primary-color)'}}></i>
                <span
                  style={{background: 'var(--light-grey)', color: 'var(--text-color)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 500}}>06
                  Days</span>
              </div>
              <h3 style={{marginBottom: '15px', fontSize: '1.2rem'}}>Skilling Programmes</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)', fontSize: '0.95rem'}}>
                <li style={{marginBottom: '8px'}}><i className="fa-solid fa-graduation-cap"
                    style={{color: 'var(--secondary-color)', width: '20px'}}></i> Audience:
                  <strong>Students</strong>
                </li>
                <li><i className="fa-solid fa-maximize" style={{color: 'var(--secondary-color)', width: '20px'}}></i>
                  Capacity: <strong>20–30 Participants</strong></li>
              </ul>
            </div>

            {/* 3. Bootcamps */}
            <div className="card" style={{padding: '25px', borderTop: '4px solid var(--secondary-color)'}}>
              <div
                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px'}}>
                <i className="fa-solid fa-fire" style={{fontSize: '2rem', color: 'var(--primary-color)'}}></i>
                <span
                  style={{background: 'var(--light-grey)', color: 'var(--text-color)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 500}}>12
                  Days</span>
              </div>
              <h3 style={{marginBottom: '15px', fontSize: '1.2rem'}}>Bootcamps</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)', fontSize: '0.95rem'}}>
                <li style={{marginBottom: '8px'}}><i className="fa-solid fa-users"
                    style={{color: 'var(--secondary-color)', width: '20px'}}></i> Audience:
                  <strong>Faculty</strong>
                </li>
                <li><i className="fa-solid fa-maximize" style={{color: 'var(--secondary-color)', width: '20px'}}></i>
                  Capacity: <strong>05–10 Participants</strong></li>
              </ul>
            </div>

            {/* 4. Ideation Workshops */}
            <div className="card" style={{padding: '25px', borderTop: '4px solid var(--secondary-color)'}}>
              <div
                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px'}}>
                <i className="fa-solid fa-lightbulb" style={{fontSize: '2rem', color: 'var(--primary-color)'}}></i>
                <span
                  style={{background: 'var(--light-grey)', color: 'var(--text-color)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 500}}>03–05
                  Days</span>
              </div>
              <h3 style={{marginBottom: '15px', fontSize: '1.2rem'}}>Ideation Workshops</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)', fontSize: '0.95rem'}}>
                <li style={{marginBottom: '8px'}}><i className="fa-solid fa-graduation-cap"
                    style={{color: 'var(--secondary-color)', width: '20px'}}></i> Audience:
                  <strong>Students</strong>
                </li>
                <li><i className="fa-solid fa-maximize" style={{color: 'var(--secondary-color)', width: '20px'}}></i>
                  Capacity: <strong>30–40 Participants</strong></li>
              </ul>
            </div>

            {/* 5. Industry Awareness Workshops */}
            <div className="card" style={{padding: '25px', borderTop: '4px solid var(--secondary-color)'}}>
              <div
                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px'}}>
                <i className="fa-solid fa-industry" style={{fontSize: '2rem', color: 'var(--primary-color)'}}></i>
                <span
                  style={{background: 'var(--light-grey)', color: 'var(--text-color)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 500}}>02
                  Days</span>
              </div>
              <h3 style={{marginBottom: '15px', fontSize: '1.2rem'}}>Industry Awareness Workshops</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)', fontSize: '0.95rem'}}>
                <li style={{marginBottom: '8px'}}><i className="fa-solid fa-briefcase"
                    style={{color: 'var(--secondary-color)', width: '20px'}}></i> Audience: <strong>Industry
                    Participants</strong></li>
                <li><i className="fa-solid fa-maximize" style={{color: 'var(--secondary-color)', width: '20px'}}></i>
                  Capacity: <strong>05–10 Participants</strong></li>
              </ul>
            </div>

            {/* 6. Internship Programmes */}
            <div className="card" style={{padding: '25px', borderTop: '4px solid var(--secondary-color)'}}>
              <div
                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px'}}>
                <i className="fa-solid fa-user-clock" style={{fontSize: '2rem', color: 'var(--primary-color)'}}></i>
                <span
                  style={{background: 'var(--light-grey)', color: 'var(--text-color)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 500}}>2–6
                  Months</span>
              </div>
              <h3 style={{marginBottom: '15px', fontSize: '1.2rem'}}>Internship Programmes</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)', fontSize: '0.95rem'}}>
                <li style={{marginBottom: '8px'}}><i className="fa-solid fa-graduation-cap"
                    style={{color: 'var(--secondary-color)', width: '20px'}}></i> Audience:
                  <strong>Students</strong>
                </li>
                <li><i className="fa-solid fa-maximize" style={{color: 'var(--secondary-color)', width: '20px'}}></i>
                  Capacity: <strong>15–20 Participants</strong></li>
              </ul>
            </div>

            {/* 7. Professional Skilling Programmes */}
            <div className="card" style={{padding: '25px', borderTop: '4px solid var(--secondary-color)'}}>
              <div
                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px'}}>
                <i className="fa-solid fa-tools" style={{fontSize: '2rem', color: 'var(--primary-color)'}}></i>
                <span
                  style={{background: 'var(--light-grey)', color: 'var(--text-color)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 500}}>12
                  Days</span>
              </div>
              <h3 style={{marginBottom: '15px', fontSize: '1.2rem'}}>Professional Skilling Programmes</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)', fontSize: '0.95rem'}}>
                <li style={{marginBottom: '8px'}}><i className="fa-solid fa-user-gear"
                    style={{color: 'var(--secondary-color)', width: '20px'}}></i> Audience: <strong>ITI Students
                    / Class 10–12 Pass</strong></li>
                <li><i className="fa-solid fa-maximize" style={{color: 'var(--secondary-color)', width: '20px'}}></i>
                  Capacity: <strong>05–10 Participants</strong></li>
              </ul>
            </div>

            {/* 8. School Teachers Awareness Program */}
            <div className="card" style={{padding: '25px', borderTop: '4px solid var(--secondary-color)'}}>
              <div
                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px'}}>
                <i className="fa-solid fa-person-chalkboard"
                  style={{fontSize: '2rem', color: 'var(--primary-color)'}}></i>
                <span
                  style={{background: 'var(--light-grey)', color: 'var(--text-color)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 500}}>06
                  Days</span>
              </div>
              <h3 style={{marginBottom: '15px', fontSize: '1.2rem'}}>School Teachers Awareness</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)', fontSize: '0.95rem'}}>
                <li style={{marginBottom: '8px'}}><i className="fa-solid fa-school"
                    style={{color: 'var(--secondary-color)', width: '20px'}}></i> Audience: <strong>Teachers from
                    Nearby Schools</strong></li>
              </ul>
            </div>

            {/* 9. Open Day for School Students */}
            <div className="card" style={{padding: '25px', borderTop: '4px solid var(--secondary-color)'}}>
              <div
                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px'}}>
                <i className="fa-solid fa-door-open" style={{fontSize: '2rem', color: 'var(--primary-color)'}}></i>
                <span
                  style={{background: 'var(--light-grey)', color: 'var(--text-color)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 500}}>01
                  Day</span>
              </div>
              <h3 style={{marginBottom: '15px', fontSize: '1.2rem'}}>Open Day for School Students</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)', fontSize: '0.95rem'}}>
                <li style={{marginBottom: '8px'}}><i className="fa-solid fa-children"
                    style={{color: 'var(--secondary-color)', width: '20px'}}></i> Audience: <strong>Class XI–XII
                    Students</strong></li>
                <li><i className="fa-solid fa-maximize" style={{color: 'var(--secondary-color)', width: '20px'}}></i>
                  Capacity: <strong>25–30 Students</strong></li>
              </ul>
            </div>

            {/* 10. Participation in Technical Exhibitions */}
            <div className="card" style={{padding: '25px', borderTop: '4px solid var(--secondary-color)'}}>
              <div
                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px'}}>
                <i className="fa-solid fa-trophy" style={{fontSize: '2rem', color: 'var(--primary-color)'}}></i>
              </div>
              <h3 style={{marginBottom: '15px', fontSize: '1.2rem'}}>Annual Technical Exhibitions</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)', fontSize: '0.95rem'}}>
                <li style={{marginBottom: '8px'}}><i className="fa-solid fa-earth-americas"
                    style={{color: 'var(--secondary-color)', width: '20px'}}></i> Audience: <strong>Nationwide
                    IDEA Labs</strong></li>
              </ul>
            </div>

            {/* 11. Newsletter */}
            <div className="card" style={{padding: '25px', borderTop: '4px solid var(--secondary-color)'}}>
              <div
                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px'}}>
                <i className="fa-solid fa-newspaper" style={{fontSize: '2rem', color: 'var(--primary-color)'}}></i>
              </div>
              <h3 style={{marginBottom: '15px', fontSize: '1.2rem'}}>Newsletter</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)', fontSize: '0.95rem'}}>
                <li style={{marginBottom: '8px'}}><i className="fa-solid fa-earth-americas"
                    style={{color: 'var(--secondary-color)', width: '20px'}}></i> Audience: <strong>Nationwide
                    IDEA Labs</strong></li>
              </ul>
            </div>

            {/* 12. Official Website & Knowledge Portal */}
            <div className="card" style={{padding: '25px', borderTop: '4px solid var(--secondary-color)'}}>
              <div
                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px'}}>
                <i className="fa-solid fa-globe" style={{fontSize: '2rem', color: 'var(--primary-color)'}}></i>
              </div>
              <h3 style={{marginBottom: '15px', fontSize: '1.2rem'}}>Official Website & Knowledge Portal</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)', fontSize: '0.95rem'}}>
                <li style={{marginBottom: '8px'}}><i className="fa-solid fa-users"
                    style={{color: 'var(--secondary-color)', width: '20px'}}></i> Audience: <strong>All
                    Stakeholders</strong></li>
              </ul>
            </div>

            {/* 13. Annual IDEA Lab Conference */}
            <div className="card" style={{padding: '25px', borderTop: '4px solid var(--secondary-color)'}}>
              <div
                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px'}}>
                <i className="fa-solid fa-handshake" style={{fontSize: '2rem', color: 'var(--primary-color)'}}></i>
              </div>
              <h3 style={{marginBottom: '15px', fontSize: '1.2rem'}}>Annual Conference / Symposium</h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)', fontSize: '0.95rem'}}>
                <li style={{marginBottom: '8px'}}><i className="fa-solid fa-earth-americas"
                    style={{color: 'var(--secondary-color)', width: '20px'}}></i> Audience: <strong>IDEA Labs,
                    DIY Labs & Innovation Centers</strong></li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
