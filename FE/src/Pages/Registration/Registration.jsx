import { useState } from "react";
import axios from "axios";
import "../Registration/Registration.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Registration() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.username.length < 3 || formData.username.length > 30) {
      alert("İstifadəçi adı 3-30 simvol arası olmalıdır.");
      return;
    }

    if (formData.password.length < 6) {
      alert("Şifrə ən azı 6 simvoldan ibarət olmalıdır.");
      return;
    }
    try {
      await axios.post("http://localhost:3000/register", formData);
      alert("Qeydiyyat uğurla tamamlandı!");
    } catch (err) {
      alert("Xəta baş verdi.");
      console.error(err);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h4>Qeydiyyat</h4>
        <input type="text" name="username" placeholder="İstifadəçi adı" value={formData.username} onChange={handleChange} required />
        <input
          type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Şifrə"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div
            className="toggle-password"
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        </div>
        <button type="submit">Qeydiyyatdan keç</button>
      </form>
    </div>
  );
}

export default Registration;
