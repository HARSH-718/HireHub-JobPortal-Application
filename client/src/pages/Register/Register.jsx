import "./Register.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../api/authApi";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert(response.data.message);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="auth-section">
      <div className="auth-container">
        {/* LEFT SIDE */}

        <div className="auth-left">
          <h2>Create Account 🚀</h2>

          <p>
            Join HireHub and start applying for thousands of job opportunities
            from top companies.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}

        <div className="auth-card">
          <h3>Register</h3>

          <form onSubmit={handleSubmit}>
            {/* NAME */}

            <div className="input-box">
              <FaUser className="icon" />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* EMAIL */}

            <div className="input-box">
              <FaEnvelope className="icon" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* PASSWORD */}

            <div className="input-box">
              <FaLock className="icon" />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* CONFIRM PASSWORD */}

            <div className="input-box">
              <FaLock className="icon" />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            {/* BUTTON */}

            <button type="submit" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="switch-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
