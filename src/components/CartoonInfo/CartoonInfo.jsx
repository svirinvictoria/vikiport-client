import { NavLink } from "react-router-dom";
import "./CartoonInfo.scss";

function CartoonInfo(props) {
  const cartoonElements = props.cartoonList
    ? props.cartoonList.map((item) => {
        return (
          <NavLink
            key={item.id}
            className="style-link"
            to={"/person/" + item.id}
          >
            <div className="cartoon-container">
              <div className="cartoon-item">
                <div className="cartoon-header">
                  <span>{item.name}</span>
                </div>
                <div className="image-box">   
                  {/* <img className="image-cartoon" src={item.image} alt="" /> */}
                </div>
              </div>
            </div>
          </NavLink>
        );
      })
    : [];

  //cartoonElements = array of elements
  return <div className="cartoons-box">{cartoonElements}</div>;
}

export default CartoonInfo;
