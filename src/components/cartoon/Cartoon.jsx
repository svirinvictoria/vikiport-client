import "./Cartoon.css"

function Cartoon(props) {

    const cartoonElements = props.cartoonList ? props.cartoonList.map((item) => {
        return (
          <div key={item.id} className="cartoon-item">
            <div className="cartoon-header">{item.name}</div>
            <div className="image-box">
              <img className="image-cartoon" src={item.image} alt=""/></div>
          </div>
        );
      }) : [];

    //cartoonElements = array of elements
    return(<div className="cartoons-box">{cartoonElements}</div>)
}

export default Cartoon;