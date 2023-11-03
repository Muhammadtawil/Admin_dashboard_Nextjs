import { getServices } from "@/server/web/services/services/services";


const ServiceSelect = async () => {
  const services = await getServices();
  return (
    <select
      className="form-select bg-light border-0"
      name="clientService"
      style={{ height: "55px", color: "black" }}
    >
      <option value="">Select A Service</option>
      {services.length === 0 ? (
        <option value="" disabled>
          Loading...
        </option>
      ) : (
        services.map((service: any, index: any) => (
          <option key={index} value={service.serviceTitle}>
            {service.serviceTitle}
          </option>
        ))
      )}
    </select>
  );
};

export default ServiceSelect;
