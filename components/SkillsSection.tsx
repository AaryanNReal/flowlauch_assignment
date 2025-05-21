  import data from '@/app/api/data';

  export default function SkillsSection() {
    const { skills, certifications } = data;
    
    return (
      <section id="skills" className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill: string, index: number) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Web Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.web.map((skill: string, index: number) => (
                <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill: string, index: number) => (
                <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((skill: string, index: number) => (
                <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Certifications</h3>
          <ul className="space-y-2">
            {certifications.map((cert: string, index: number) => (
              <li key={index} className="flex items-center">
                <span className="text-black mr-2">🏅</span>
                <span className='text-black'>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }