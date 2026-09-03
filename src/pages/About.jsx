import Seo from '../components/Seo';
import FaqSection from '../components/FaqSection';

export default function About() {
  return (
    <>
      <Seo
        title="About the Lab"
        description="The AICTE IDEA Lab at Kongunadu College of Engineering and Technology, Trichy, gives students hands-on resources to turn STEM ideas into working prototypes, open 24x7."
        path="/about"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About Lab', path: '/about' }]}
      />

      {/* Page Header */}
      <header className="page-header"
        style={{backgroundImage: "linear-gradient(rgba(0,33,71,0.8), rgba(0,33,71,0.8)), url('/idealab.webp')"}}>
        <div className="container">
          <h1>About The Lab</h1>
          <p className="breadcrumb">Home / About Lab</p>
        </div>
      </header>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="about-layout">
            <div className="about-image">
              <img src="/idealab.webp" alt="AICTE IDEA Lab interior workspace at Kongunadu College of Engineering and Technology"
                className="about-img" />
            </div>
            <div className="about-content">
              <h2 className="section-title">Overview</h2>
              <p>
                The AICTE IDEA (Idea Development, Evaluation & Application) Lab is established to encourage
                students for application of science, technology, engineering and mathematics (STEM) fundamentals
                towards enhanced hands-on experience and learning by doing. The lab acts as a central facility
                in the campus to make the students more imaginative and creative.
              </p>
              <p>
                It provides all necessary resources for converting an idea into a prototype. The lab is open
                24x7 for students and faculty to work on their projects and products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Why This Lab?</h2>
          <div className="card-grid">
            <div className="card about-card">
              <i className="fa-solid fa-lightbulb about-icon"></i>
              <h3>Encouraging Innovation</h3>
              <p>To promote a culture of innovation and creative problem solving among the student community.</p>
            </div>
            <div className="card about-card">
              <i className="fa-solid fa-hands-holding-circle about-icon"></i>
              <h3>Skill Enhancement</h3>
              <p>Training students in 21st-century skills like critical thinking, design thinking, and
                collaboration.</p>
            </div>
            <div className="card about-card">
              <i className="fa-solid fa-industry about-icon"></i>
              <h3>Industry Ready</h3>
              <p>Making engineering graduates more employable and industry-ready through practical exposure.</p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
