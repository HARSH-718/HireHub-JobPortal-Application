import "./Pagination.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Pagination() {
  return (
    <section className="pagination-section">

      <div className="pagination-container">

        {/* Previous Button */}

        <button className="page-btn">

          <FaChevronLeft />

          Previous

        </button>

        {/* Page Numbers */}

        <div className="page-numbers">

          <button className="page-number active">
            1
          </button>

          <button className="page-number">
            2
          </button>

          <button className="page-number">
            3
          </button>

          <button className="page-number">
            4
          </button>

          <button className="page-number">
            5
          </button>

        </div>

        {/* Next Button */}

        <button className="page-btn">

          Next

          <FaChevronRight />

        </button>

      </div>

    </section>
  );
}

export default Pagination;