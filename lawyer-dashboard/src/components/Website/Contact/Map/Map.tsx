

import { Container } from "react-bootstrap";

const Map = () => {
  return (
    <div className="sectionStyle">
      <Container>
        <div
          className="overflow-hidden rounded-3"
          style={{ width: "100%", height: "600px" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830913564!2d-74.11976373946231!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1648396699742!5m2!1sen!2sbd"
            width="1800"
            height="600"
            // allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default Map;
