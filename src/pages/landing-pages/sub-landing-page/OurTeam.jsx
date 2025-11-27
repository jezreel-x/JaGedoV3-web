

const teamMembers = [
  {
    name: "James Ayako ",
    role: "CEO & Co-founder ",
    image: 'bg-[url("/Sub-landing/jim.png")] bg-cover bg-center  h-74 w-70  ',
  },
  {
    name: "Florence Njoki",
    role: "Chief Operation Officer ",
    image: 'bg-[url("/Sub-landing/njoki.jpg")] bg-cover bg-center h-74 w-70',
  },
  {
    name: " Charles Nyamwaro ",
    role: " Chief Business Developer ",
    image: 'bg-[url("/Sub-landing/chuck.jpg")] bg-cover bg-center h-74 w-70',
  },
  {
    name: "Micheal Deya ",
    role: "Chief Constrution Officer ",
    image: 'bg-[url("/Sub-landing/Deya.jpeg")] bg-cover bg-center h-74 w-70 ',
  },
];

const OurTeam = () => {
  return (
    <section className="py-20 bg-gray-50" id ="OurTeam">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#000072]"> Our Team</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className={`h-48 ${member.image} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-[#000072] font-medium mb-2">{member.role}</div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
