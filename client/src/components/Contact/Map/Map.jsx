import "./Map.css";

function Map() {
  return (
    <section className="map-section">

      <div className="map-container">

        {/* Heading */}
        <div className="map-heading">

          <span>Our Location</span>

          <h2>
            Visit Our
            <span> Office</span>
          </h2>

          <p>
            We are located in the heart of the city.
            Feel free to visit or connect online anytime.
          </p>

        </div>

        {/* Map Card */}
        <div className="map-card">

         <iframe
  title="map"
  src="https://www.google.com/maps?q=New+Delhi&output=embed"
  loading="lazy"
></iframe>

        </div>

      </div>

    </section>
  );
}

export default Map;