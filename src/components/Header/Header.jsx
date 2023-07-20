import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goToInfoHandler = () => navigate("/in");
  const goToContentPage = () => navigate("/");

  return (
    <header className="App-header">
      <div className="header" onClick={goToContentPage}>
        Vikiport
      </div>
      <button className="header-btn" onClick={goToInfoHandler}>
        About this site
      </button>
    </header>
  );
};

export default Header;
