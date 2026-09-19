function Header({ title }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="header">
      <h4>{title}</h4>

      <div>
        <b>{user?.name}</b>
      </div>
    </div>
  );
}

export default Header;