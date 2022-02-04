import React, {useState} from 'react';
import Details from "./Details"

function Tile({hog}) {
const [showDetails, setShowDetails] = useState(false);

function handleDetailsClick() {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  }

  const { name, specialty, image } = hog;

  return (
    <div className="ui card eight wide column pigTile">
        <div className="blurring dimmable image">
            <img src={image} alt="hogPic" />
        </div>
        <div className="content">
            <h3 className="header">{name}</h3>
            <div className="description">Specialty: {specialty}</div>
        </div>
        <div classNameass="ui dimmer">
            <div className="content">
            <div className="center">
                <div className="ui button green" onClick={handleDetailsClick}>{showDetails ? "Less Info" : "More Info"}</div>
            </div>
            </div>
        </div>
        <div className="extra content">
            {showDetails ? <Details hog={hog} /> : null}
        </div>
    </div>);
}

export default Tile;
