import developer from "../../images/developer.png";
import "./InfoPage.scss";

function InfoPage(){
    return(
        <p className="inf">
            <div><img src={developer} alt="vikiport"/></div>
            Welcome to my website! 
            <br />
        
            My name is Viki.  
            <br />
            
            This site was developed by me as part of my portfolio while studying the React.js.
             <br />

            The site does not pursue any commercial goals and objectives and takes information only from open sources that are listed in the footer of the site. 
            <br /> <br />
            
            All the rights to images, icons and all other information from the above mentioned sources belong exclusively to the copyright holders.
        </p>
    )
}

export default InfoPage;