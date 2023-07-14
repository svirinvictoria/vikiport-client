
import "./Forex.css";
import forex_img from "../../img/forex.png";
import usd_img from "../../img/usd.png";
import eur_img from "../../img/eur.png";
import pound_img from "../../img/pound.png";
import yen_img from "../../img/yen.png";
import shekel_img from "../../img/shekel.png";


function Forex(props){

    const forexElements =  props.forex ? <div>
      <div>
        <img src={usd_img} className="coin-icon" alt="USD" />
        USD (USA) = {props.forex.dollar}
      </div>
      <div>
        <img src={eur_img} className="coin-icon" alt="Euro"/>
        Euro (EU) = {props.forex.euro}
      </div>
      <div>
        <img src={pound_img} className="coin-icon" alt="pound"/>
        Pound Sterling (GB) = {props.forex.pound}
      </div>
      <div>
        <img src={yen_img} className="coin-icon" alt="Yen"/>
        Yen (Japan) = {props.forex.yen}{" "}
      </div>
      <div>
        {" "}
        <img src={shekel_img} className="coin-icon" alt="shekel"/>
        Shekel (Israel) = {props.forex.shekel}{" "}
      </div>
    </div> : <div>Can't load actual weather</div>

    return(
        <div className="info info-item info-text-forex">
            <div>
              {" "}
              <img src={forex_img} className="bcg" alt=""/>
            </div>
            {forexElements}
          </div>
    )
}

export default Forex;