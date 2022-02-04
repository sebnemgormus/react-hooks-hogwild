import React from 'react';

function Details({hog}) {

    const { greased, weight, "highest medal achieved": medal } = hog

    return (
        <div className="ui list description ">
          <strong>{greased ? 'Greased' : 'Nongreased'}</strong>
          <div className="item">
            Highest medal achived: <strong>{medal}</strong>
          </div>
          <div className="item">
            Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator
            with Thru-the-Door Ice and Water: <strong>{weight}</strong>
          </div>
        </div>
      )
}

export default Details;
