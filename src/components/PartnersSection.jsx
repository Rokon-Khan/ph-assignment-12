const partners = [
  {
    logo: "https://i.ibb.co.com/2Mf9PwD/brand-3.png",

    name: "Educator",
    description:
      "Educator is a leading company in the tech industry, specializing in software development.",
  },
  {
    logo: "https://i.ibb.co.com/0hdC5Cw/brand-1-1.png", // Replace with actual logo URL
    name: "Study Central",
    description:
      "Study Central is known for innovative solutions in artificial intelligence and machine learning.",
  },
  {
    logo: "https://i.ibb.co.com/BTNHKTN/brand-1.png", // Replace with actual logo URL
    name: "Scholar",
    description:
      "Scholar offers top-notch services in cloud computing and infrastructure.",
  },
  {
    logo: "https://i.ibb.co.com/qmkCytB/brand-4.png",
    name: "TechHub",
    description:
      "TechHub provides expert consultancy and implementation services in cybersecurity.",
  },
  {
    logo: "https://i.ibb.co.com/RBjnknc/brand-5.png", // Replace with actual logo URL
    name: "iAcademy",
    description:
      "iAcademy is a global leader in digital marketing and branding solutions.",
  },
  {
    logo: "https://i.ibb.co.com/BTNHKTN/brand-1.png", // Replace with actual logo URL
    name: "Educator",
    description:
      "Educator specializes in providing end-to-end e-commerce solutions for businesses.",
  },
];

const PartnersSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-12">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Our Trusted Partners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-full h-full object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
            <p className="text-center text-gray-600 text-sm">
              {partner.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
