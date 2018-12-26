import React from 'react';
import Slider from 'react-slick';
import BusinessCard from './BusinessCard';

class BusinessCarousel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {businessData : [
                {"imageUrl":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
                 "name": "Burgundy Flemming",
                 "description": "Schloss Scharlottenburg"
                },
                {"imageUrl":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
                    "name": "Migel Huan Sanchos",
                    "description": "Spanish embassy"
                },
                {"imageUrl":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
                    "name": "Antoine de Saint-Exupery",
                    "description": "Charming moon and poor small boy"
                },
                {"imageUrl":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample121.jpg",
                    "name": "Karl Marks",
                    "description": "Ostbahnhof als Kapitalanlage"
                },

            ]}
    }

    render(){
        const numOfBusinesses = this.state.businessData.length || 0;

        const settings = {
            dots: true,
            infinite: false,
            slidesToShow: numOfBusinesses>3 ? 3 : numOfBusinesses,
            slidesToScroll: 1
        };

        let BusinessCards =
            (numOfBusinesses>0)
                ? this.state.businessData.map((itm, ind) => (<BusinessCard data = {itm}/>))
                : (<p>No businesses were found.</p>);


        return (

            <div className='carousel'>
                <Slider {...settings}>{BusinessCards}</Slider>
            </div>
        )
    }
}

export default BusinessCarousel;