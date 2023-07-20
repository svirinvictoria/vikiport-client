import { NavLink } from "react-router-dom";
import "./Cartoon.css";

function Cartoon(props) {
  const cartoonElements = props.cartoonList
    ? props.cartoonList.map((item) => {
        return (
          <NavLink key={item.id} className="style-link" to={"/person/" + item.id}>
            <div className="cartoon-item">
              <div className="cartoon-header">{item.name}</div>
              <div className="image-box">
                <img className="image-cartoon" src={item.image} alt="" />
              </div>
            </div>
          </NavLink>
        );
      })
    : [];

  //cartoonElements = array of elements
  return <div className="cartoons-box">{cartoonElements}</div>;
}

export default Cartoon;
