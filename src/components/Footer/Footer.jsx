
const Footer = () => {
    return (
      <footer className="ftr">
      <div>
        <p>
          <a href="https://api.currencyapi.com">
            Exchange rate is taken from currencyapi.com
          </a>
        </p>
        <p>
          <a href="https://api.openweathermap.org">
            Weather forecast is taken from openweathermap.org
          </a>
        </p>
        <p>
          <a href="https://rickandmortyapi.com/api/character">
            Cartoons are taken from rickandmortyapi.com
          </a>
        </p>
      </div>
      <div>
        <p>&copy; All rights reserved to Victoria Svirin 2023</p>
      </div>
      <div>
        <p>
          <a
            href="https://www.flaticon.com/free-icons/forex"
            title="forex icons"
          >
            Forex icons created by juicy_fish - Flaticon
          </a>
        </p>
        <p>
          <a
            href="https://www.flaticon.com/free-icons/forecast"
            title="forecast icons"
          >
            Forecast icons created by ChilliColor - Flaticon
          </a>
        </p>
      </div>
    </footer>

    );
}

export default Footer;