import "./Login.css";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../api/authApi";

import { FaEnvelope, FaLock } from "react-icons/fa";
function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    const { email, password } = formData;

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/auth/login", {
        email,
        password,
      });

      // Save Token
      localStorage.setItem("token", response.data.token);

      // Save User
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert(response.data.message);

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="auth-section">
      <div className="auth-container">
        {/* LEFT SIDE */}

        <div className="auth-left">
          <h2>Welcome Back 👋</h2>

          <p>
            Login to access your dashboard and explore latest job opportunities.
          </p>
        </div>

        {/* RIGHT SIDE - FORM */}

        <div className="auth-card">
          <h3>Login</h3>

          <form onSubmit={handleSubmit}>
            {/* EMAIL */}

            <div className="input-box">
              <FaEnvelope className="icon" />

              <input
                type="email"
                name="email"
                placeholder="Enter email"
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
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* BUTTON */}

            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="switch-text">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
