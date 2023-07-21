import { useNavigate } from "react-router-dom";
import "./Header.scss"

const Header = () => {
  const navigate = useNavigate();
  const goToInfoHandler = () => navigate("/in");
  const goToContentPage = () => navigate("/");

  return (
    <header className="header">
      <div className="title" onClick={goToContentPage}>
        Vikiport
      </div>
      <button className="header-btn" onClick={goToInfoHandler}>
        About this site
      </button>
    </header>
  );
};

export default Header;
