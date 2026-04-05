export default function ResumePage() {
  return (
    <main className="bg-white min-h-screen font-sans text-gray-900">

      {/* Header */}
      <header className="max-w-4xl mx-auto px-8 pt-14 pb-8 border-b border-gray-200">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-950 mb-2">
          Nishanth Baddigam
        </h1>
        <p className="text-base text-gray-500 tracking-wide mb-4">Frisco, TX</p>
        <nav
          aria-label="Contact information"
          className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600"
        >
          <a href="mailto:nishanth.baddigam6@gmail.com" className="hover:text-gray-900 transition-colors">
            nishanth.baddigam6@gmail.com
          </a>
          <a href="tel:4699967852" className="hover:text-gray-900 transition-colors">
            469-996-7852
          </a>
          <a href="https://linkedin.com/in/nishanthbaddigam06/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
            linkedin.com/in/nishanthbaddigam06
          </a>
          <a href="https://github.com/NishanthB6" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
            github.com/NishanthB6
          </a>
        </nav>
      </header>

      <div className="max-w-4xl mx-auto px-8 py-10 space-y-10">
        {/* Education */}
        <section aria-labelledby="education-heading">
          <h2 id="education-heading" className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            Education
          </h2>
          <article className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">University of South Florida</h3>
              <p className="text-sm text-gray-600">Bachelor of Science in Business Analytics & Information Systems</p>
              <p className="text-sm text-gray-500">Tampa, FL</p>
            </div>
            <p className="text-sm text-gray-500 whitespace-nowrap sm:pt-1">Expected May 2027</p>
          </article>
        </section>

        {/* Work Experience */}
        <section aria-labelledby="experience-heading" className="border-t border-gray-100 pt-10">
          <h2 id="experience-heading" className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            Work Experience
          </h2>
          <div className="space-y-8">
            <article>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">AI Automation Extern</h3>
                  <p className="text-sm text-gray-500">Extern · Wayfair · Remote</p>
                </div>
                <p className="text-sm text-gray-500 whitespace-nowrap sm:pt-1">Dec 2025 – Feb 2026</p>
              </div>
              <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-gray-700 leading-relaxed">
                <li>Developed AI agents to automate decision-driven workflows, accelerating category-level decisions by 25%.</li>
                <li>Engineered ETL pipelines for ingestion and validation of pricing and campaign datasets.</li>
                <li>Integrated outputs into a live Google Sheets dashboard used by product teams.</li>
              </ul>
            </article>

            <article>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Data Analyst Intern</h3>
                  <p className="text-sm text-gray-500">HCP Associates · Remote</p>
                </div>
                <p className="text-sm text-gray-500 whitespace-nowrap sm:pt-1">May 2025 – Sep 2025</p>
              </div>
              <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-gray-700 leading-relaxed">
                <li>Collaborated with Pinellas County to develop Tableau dashboards, improving efficiency by 35%.</li>
                <li>Designed interactive dashboards for 50+ stakeholders using SQL data.</li>
                <li>Performed SQL and Python-based analysis to support A/B testing and performance optimization.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Technical Skills */}
        <section aria-labelledby="skills-heading" className="border-t border-gray-100 pt-10">
          <h2 id="skills-heading" className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            Technical Skills
          </h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p><span className="font-semibold text-gray-900">Languages:</span> Python, SQL, HTML, CSS, JavaScript</p>
            <p><span className="font-semibold text-gray-900">Tools:</span> AWS, Azure, PostgreSQL, Tableau, Power BI, Git, Excel</p>
          </div>
        </section>
      </div>

      <footer className="max-w-4xl mx-auto px-8 py-6 border-t border-gray-100 mt-4">
        <p className="text-xs text-gray-400 text-center">Nishanth Baddigam · 2026</p>
      </footer>
    </main>
  );
}
