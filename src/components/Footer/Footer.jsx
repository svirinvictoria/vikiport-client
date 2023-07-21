import "./Footer.scss";
const Footer = () => {
    return (
      <footer className="footer">
      <div>
        <p className="ftr-link">
          <a href="https://api.currencyapi.com">
            Exchange rate is taken from currencyapi.com
          </a>
        </p>
        <p className="ftr-link">
          <a href="https://api.openweathermap.org">
            Weather forecast is taken from openweathermap.org
          </a>
        </p>
        <p className="ftr-link">
          <a href="https://rickandmortyapi.com/api/character">
            Cartoons are taken from rickandmortyapi.com
          </a>
        </p>
        <p className="ftr-link">
          <a target="_blank" href="https://icons8.com/icon/89392/us-dollar">Dollar</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </p>
        <p className="ftr-link">
        <a target="_blank" href="https://icons8.com/icon/89789/euro">Euro</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </p>
       
      </div>
      <div>
        <p className="ftr-link"> Viki 2023&copy;</p>
        <p className="ftr-link"><a href="https://github.com/svirinvictoria/vikiport-client">Client Repo is here</a></p>
        <p className="ftr-link"><a href="https://github.com/svirinvictoria/vikiport-server">Server Repo is here</a></p>
      </div>
      <div>
        <p className="ftr-link">
          <a
            href="https://www.flaticon.com/free-icons/forex"
            title="forex icons"
          >
            Forex icons created by juicy_fish - Flaticon
          </a>
        </p>
        <p className="ftr-link">
          <a
            href="https://www.flaticon.com/free-icons/forecast"
            title="forecast icons"
          >
            Forecast icons created by ChilliColor - Flaticon
          </a>
        </p>
        <p className="ftr-link">
        <a target="_blank" href="https://icons8.com/icon/123112/british-pound">British Pound</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </p>
        <p className="ftr-link">
        <a target="_blank" href="https://icons8.com/icon/123118/japanese-yen">Yen</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </p>
        <p className="ftr-link">
        <a target="_blank" href="https://icons8.com/icon/123122/shekel">Ils</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </p>
      </div>
    </footer>

    );
}

export default Footer;