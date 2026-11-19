function Profile() {
  return (
    <section className="auth-section" aria-labelledby="profile-title">
      <div className="auth-card profile-card">
        <span className="auth-card__eyebrow">Mi cuenta</span>
        <h1 id="profile-title">Perfil</h1>
        <p className="auth-card__intro">usuario@mammamia.cl</p>
        <button className="button button--submit" type="button">Cerrar sesión</button>
      </div>
    </section>
  );
}

export default Profile;
