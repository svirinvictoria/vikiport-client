import forex_img from "../../images/forex-icon.png";
import usd_img from "../../images/usdIcon.png";
import eur_img from "../../images/eurIcon.png";
import pound_img from "../../images/gbpIcon.png";
import yen_img from "../../images/jpyIcon.png";
import shekel_img from "../../images/ilsIcon.png";

import "./ForexInfo.scss";

function ForexInfo(props) {

  const forexElements = props.forex ? <div>
    <div>
      <img src={usd_img} className="coin-icon" alt="USD" />
      USD (USA) = {props.forex.dollar}
    </div>
    <div>
      <img src={eur_img} className="coin-icon" alt="Euro" />
      Euro (EU) = {props.forex.euro}
    </div>
    <div>
      <img src={pound_img} className="coin-icon" alt="pound" />
      Pound Sterling (GB) = {props.forex.pound}
    </div>
    <div>
      <img src={yen_img} className="coin-icon" alt="Yen" />
      Yen (Japan) = {props.forex.yen}{" "}
    </div>
    <div>
      <img src={shekel_img} className="coin-icon" alt="shekel" />
      Shekel (Israel) = {props.forex.shekel}{" "}
    </div>
  </div> : <div>Can't load actual weather</div>

  return (
    <div className="info info-item info-text-forex">
      <div className="forexImage">
        <img src={forex_img} className="bcg" alt="" />
      </div>
      <div>{forexElements}</div>
    </div>
  )
}

export default ForexInfo;