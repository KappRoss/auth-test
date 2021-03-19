import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from "./ItemCarousel";

const CarouselBlock = ({films, matches}) => {

    return (
        <Carousel
            // next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
            // prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }
            navButtonsProps={{
                style: {
                    display: matches && 'none',
                    background: 'none',
                    border: '2px solid white',

                }
            }}
            autoPlay={false}
        >
                {films.map((item, i) => <Item key={i} index={i} item={item} matches={matches}/>)}
        </Carousel>
    )
}

export default CarouselBlock