function Header() {
  return (
    <div className="flex flex-row justify-between">
      <h3>Qoala Apps</h3>
      <div className="flex flex-row gap-x-3">
        <button>Color</button>
        <button>Cities</button>
      </div>
    </div>
  );
}

export default Header;
