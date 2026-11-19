import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim() || !password) return setMessage({ type: "error", text: "Todos los campos son obligatorios." });
    if (password.length < 6) return setMessage({ type: "error", text: "La contraseña debe tener al menos 6 caracteres." });
    setMessage({ type: "success", text: "¡Inicio de sesión exitoso!" });
    setPassword("");
  };
  return (
    <section className="auth-section" aria-labelledby="login-title"><div className="auth-card">
      <span className="auth-card__eyebrow">Qué bueno verte</span><h1 id="login-title">Iniciar sesión</h1><p className="auth-card__intro">Ingresa tus datos para continuar.</p>
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <label className="form-field"><span>Email</span><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="nombre@correo.cl" autoComplete="email" /></label>
        <label className="form-field"><span>Contraseña</span><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Mínimo 6 caracteres" autoComplete="current-password" /></label>
        <button className="button button--submit" type="submit">Ingresar</button>
      </form>
      {message.text && <p className={`form-message form-message--${message.type}`} role={message.type === "error" ? "alert" : "status"}>{message.text}</p>}
    </div></section>
  );
}
export default Login;
