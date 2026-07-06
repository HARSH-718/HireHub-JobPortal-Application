import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Jobs from "../pages/Jobs/Jobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

function AppRoutes() {
  return (
    <Routes>

      {/* Main Layout */}
      <Route element={<MainLayout />}>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Jobs */}
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact />} />

      </Route>

    </Routes>
  );
}

export default AppRoutes;