import Seo from '../components/Seo';

export default function Team() {
  return (
    <>
      <Seo
        title="Team"
        description="Meet the governance structure of the AICTE IDEA Lab at Kongunadu College of Engineering and Technology, Trichy — Chief Patron, Dean R&D, faculty coordinators, and project staff."
        path="/team"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Team', path: '/team' }]}
      />

      {/* Page Header */}
      <header className="page-header"
        style={{backgroundImage: `linear-gradient(rgba(0,33,71,0.8), rgba(0,33,71,0.8)), url('${import.meta.env.BASE_URL}idealab.webp')`}}>
        <div className="container">
          <h1>Team & Organisational Structure</h1>
          <p className="breadcrumb">Home / Team</p>
        </div>
      </header>

      {/* Governance Structure */}
      <section className="section">
        <div className="container">
          <div className="doc-container">

            {/* Chief Patron */}
            <table className="doc-table">
              <thead>
                <tr>
                  <th>CHIEF PATRON</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Dr. PSK. R. Periaswamy</strong><br />
                    Chairman
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Patrons + Tech Gurus: side by side */}
            <div className="team-pair-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start', marginTop: '24px'}}>

              <table className="doc-table" style={{margin: 0}}>
                <thead>
                  <tr>
                    <th colSpan="2">PATRONS </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width="50%">
                      <strong>Er. Konkan K. Thangavelu</strong><br />
                      Secretary
                    </td>
                    <td width="50%">
                      <strong>Dr. PST. V.S. Thennarasu</strong><br />
                      Treasurer
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Er. P.S.K. P. ArunKumar</strong><br />
                      Vice-Chairman
                    </td>
                    <td>
                      <strong>Er. P. Ashokkumar</strong><br />
                      Joint Secretary
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="doc-table" style={{margin: 0}}>
                <thead>
                  <tr>
                    <th colSpan="2">TECH-GURUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width="50%">
                      <strong>Mr. R. Baskar</strong><br />
                      Assistant Professor/ECE
                    </td>
                    <td width="50%">
                      <strong>Mr. R. Periyasamy</strong><br />
                      Assistant Professor/ME
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Mr. R. Raja</strong><br />
                      Assistant Professor/ME
                    </td>
                    <td>
                      <strong>Mr. P. Tamilnesan</strong><br />
                      Assistant Professor/EEE
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>

            {/* Mentor & Coordinators + Project Assistants: side by side */}
            <div className="team-pair-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start', marginTop: '24px'}}>

              <table className="doc-table" style={{margin: 0}}>
                <thead>
                  <tr>
                    <th colSpan="2">MENTOR & COORDINATORS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2">
                      <strong>Dr. R. Asokan</strong><br />
                      Principal & Professor (ECE)<br />
                      <span className="highlight-role">Chief Mentor</span>
                    </td>
                  </tr>
                  <tr>
                    <td width="50%">
                      <strong>Dr. J. Yogapriya</strong><br />
                      Dean (R&D), Professor (CSE)<br />
                      <span className="highlight-role">Coordinator</span>
                    </td>
                    <td width="50%">
                      <strong>Dr. P. Muthukumar</strong><br />
                      Associate Professor (Mechanical)<br />
                      <span className="highlight-role">Co-Coordinator</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="doc-table" style={{margin: 0}}>
                <thead>
                  <tr>
                    <th colSpan="2">PROJECT ASSISTANTS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width="50%">
                      <strong>Mr. M. Naveenkumar</strong><br />
                      Research & Development
                    </td>
                    <td width="50%">
                      <strong>Mr. S. Sivabalan</strong><br />
                      Research & Development
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Mr. S. Monish</strong><br />
                      Research & Development
                    </td>
                    <td>
                      <strong>Mr. A. Mahesh Boopathy</strong><br />
                      Research & Development
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
