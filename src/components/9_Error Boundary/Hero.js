import React from 'react'

function Hero(props) {
    const heroName = props.heroName;
        if(heroName === 'Joker'){
            throw new Error('Not A Hero !!!');
        }

    return (
        <div>
           Hero is : {heroName}
        </div>
    )
}

export default Hero;
