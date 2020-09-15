import React from 'react';

const ShowInfo = (props) => {
    return (
        <div>
            <h3>
              {props.showTime} {props.showName}
            </h3>
            <h4>{props.tagline}</h4>
            <p>{props.description}</p>
        </div>
    );
};

export default ShowInfo;