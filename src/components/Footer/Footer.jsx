import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p className="ftr-link">
          <a href="https://api.currencyapi.com/">
            Exchange rate is taken from currencyapi.com
          </a>
        </p>
        <p className="ftr-link">
          <a href="https://api.openweathermap.org/">
            Weather forecast is taken from openweathermap.org
          </a>
        </p>
        <p className="ftr-link">
          <a href="https://rickandmortyapi.com/">
            Cartoons are taken from rickandmortyapi.com
          </a>
        </p>
      </div>
      <div>
        <p className="ftr-link"> Viki 2023&copy;</p>
        <p className="ftr-link">
          <a href="https://github.com/svirinvictoria/vikiport-client">
            Client Repo is here
          </a>
        </p>
        <p className="ftr-link">
          <a href="https://github.com/svirinvictoria/vikiport-server">
            Server Repo is here
          </a>
        </p>
      </div>
      <div>
        <p className="ftr-link">
          <a
            href="https://uxwing.com/"
            title="Uxwing"
          >
            Icons are taken from uxwing.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
