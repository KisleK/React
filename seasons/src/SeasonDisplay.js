import './SeasonDisplay.css'
import React from 'react';
//this const is a refactor of the ternary expressions
const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Brrrrrr it\'s chilly!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    //if lat greater than 0 return summer otherwise return winter
    }   else {
        return lat > 0 ? 'winter' : 'summer';
    //if lat greater than 0 return winter otherwise return summer

}

};



const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());

//removed these ternary expressions because of refactor on line 3
    //const text = season === 'winter' ? "Brrrrr it's chilly" : "Lets hit the beach!";
    //const icon = season === 'winter' ? 'snowflake' : 'sun';

    const { text, iconName } = seasonConfig[season]; //will return {text, iconName}

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
                <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;

