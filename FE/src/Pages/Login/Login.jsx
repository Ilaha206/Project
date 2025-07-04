import axios from 'axios';
import "../Login/Login.css";
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [codeVerified, setCodeVerified] = useState(false);
  const [codeInput, setCodeInput] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Normal login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/login', formData);
      const token = res.data;
      if (token) {
        localStorage.setItem('token', token);
        alert('Uğurla daxil oldunuz!');
        navigate('/admin');
      } else {
        alert('Token alınmadı!');
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        alert('Email və ya şifrə yanlışdır!');
      } else {
        alert('Server xətası baş verdi!');
      }
    }
  };

  // Send reset code to email
  const handleSendCode = async () => {
    if (!formData.email) return alert("Zəhmət olmasa login hissəsində emailinizi yazın!");
    try {
      await axios.post('http://localhost:3000/forgot-password', { email: formData.email });
      alert("4 rəqəmli kod emailinizə göndərildi!");
      setCodeSent(true);
    } catch (error) {
      alert("Email tapılmadı və ya server xətası!");
    }
  };

  // Verify code entered by user
  const handleVerifyCode = async () => {
    try {
      await axios.post('http://localhost:3000/verify-reset-code', {
        email: formData.email,
        code: codeInput
      });
      alert("Kod düzgün daxil edildi! Yeni şifrəni yazın.");
      setCodeVerified(true);
    } catch (err) {
      alert("Kod yanlışdır və ya vaxtı keçib!");
    }
  };

  // Reset password
  const handleResetPassword = async () => {
    if (!newPassword) return alert("Yeni şifrə boş ola bilməz!");
    try {
      await axios.post('http://localhost:3000/reset-password', {
        email: formData.email,
        newPassword
      });
      alert("Yeni şifrə uğurla təyin edildi! İndi yenidən daxil olun.");
      setShowForgot(false);
      setCodeSent(false);
      setCodeVerified(false);
      setCodeInput('');
      setNewPassword('');
    } catch (err) {
      alert("Şifrə dəyişdirilə bilmədi. Yenidən cəhd edin.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h4>Daxil ol</h4>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Şifrə"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        </div>
        <button type="submit">Giriş</button>

        <p className="forgot-password" onClick={() => setShowForgot(!showForgot)}>
          Parolu unutmusunuz?
        </p>

        {showForgot && (
          <div className="forgot-password-form">
            {!codeSent && (
              <div>
                <p>Emailiniz: <b>{formData.email || "email daxil edilməyib"}</b></p>
                <button type="button" onClick={handleSendCode} disabled={!formData.email}>
                  Kodu göndər
                </button>
              </div>
            )}

            {codeSent && !codeVerified && (
              <div>
                <input
                  type="text"
                  placeholder="4 rəqəmli kod"
                  maxLength={4}
                  value={codeInput}
                  onChange={(e) => setCodeInput(e.target.value)}
                />
                <button type="button" onClick={handleVerifyCode}>
                  Kodu təsdiqlə
                </button>
              </div>
            )}

            {codeVerified && (
              <div>
                <input
                  type="password"
                  placeholder="Yeni şifrə"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button type="button" onClick={handleResetPassword}>
                  Şifrəni yenilə
                </button>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
