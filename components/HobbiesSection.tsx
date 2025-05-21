import data from '@/app/api/data';

export default function HobbiesSection() {
  const { hobbies } = data;
  
  const getHobbyIcon = (hobby: string) => {
    switch(hobby) {
      case "Sports":
        return '⚽';
      case "Chess":
        return '♟️';
      case "Coding challenges":
        return '💻';
      default:
        return '📚';
    }
  };

  return (
    <section id="hobbies" className="bg-white rounded-lg mb-2 shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Hobbies & Interests</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {hobbies.map((hobby: string, index: number) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-blue-600 text-xl">
                {getHobbyIcon(hobby)}
              </span>
            </div>
            <p className="text-gray-800">{hobby}</p>
          </div>
        ))}
      </div>
    </section>
  );
}