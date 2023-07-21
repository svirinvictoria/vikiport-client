import { useNavigate } from "react-router-dom";
import developer from "../../images/developer.png";

import "./Header.scss"

const Header = () => {
  const navigate = useNavigate();
  const goToInfoHandler = () => navigate("/in");
  const goToContentPage = () => navigate("/");

  return (
    <header className="header">
      <div className="title" onClick={goToContentPage}>
        <div>Vikiport</div>
        <div><img src={developer} alt="vikiport"/></div>
      </div>
      <button className="header-btn" onClick={goToInfoHandler}>
        About this site
      </button>
    </header>
  );
};

export default Header;
