const ProfileAccount = () => {
  return (
    <div className="account-container">
      <h2 className="title">Account Settings</h2>

      <div className="profile-section">
        <div className="avatar-wrapper">
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt="profile"
            className="avatar"
          />

          <button className="camera-btn">📷</button>
        </div>

        <div className="user-info">
          <h3>Marry Doe</h3>
          <p>Marry@gmail.com</p>
        </div>
      </div>

      <div className="description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>
    </div>
  );
};

export default ProfileAccount;
