import ServiceCard from "./ServiceCard.jsx";

function ServiceGrid({ services }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {services.map((service, i) => (
        <div
          key={service.id}
          className="reveal revealed"
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
}

export default ServiceGrid;
