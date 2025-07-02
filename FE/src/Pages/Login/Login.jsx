import axios from 'axios';
import "../Login/Login.css"
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    try {
      const res = await axios.post('http://localhost:3000/login', formData);
      const token = res.data.token;
      localStorage.setItem('token', token);
      alert('Uğurla daxil oldunuz!');
      // buradan sonra istədiyiniz səhifəyə yönləndirə bilərsiniz
    } catch (err) {
    if (err.response && err.response.status === 401) {
      alert('Email və ya şifrə yanlışdır!');
    } else {
      alert('Server xətası baş verdi!');
    }
    console.error(err);
  }
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h4>Daxil ol</h4>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
        <div className="password-field">
        <input type= "password" name="password" placeholder="Şifrə"  value={formData.password} onChange={handleChange} required/>
          <div type="button" className="toggle-password" onClick={() => setShowPassword(prev => !prev)}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
</div>
        <button type="submit">Giriş</button>
      </form>
    </div>
  )
}

export default Login