import React from "react";

class BusinessCarousel extends React.Component{

    render(){
        const numOfBusinesses = this.props.businessData.length || 0;

        const settings = {
            dots: true,
            infinite: false,
            slidesToShow: numOfBusinesses>3 ? 3 : numOfBusinesses,
            slidesToScroll: 1
        };

        let BusinessCards =
            (numOfBusinesses>0)
                ? this.props.businessData.map((itm, ind) => ( <div key = {ind}> <BusinessCard data = {itm}/> </div> ))
                : (<p>No businesses found.</p>);


        return (

            <div className='carousel'>
                <Slider {...settings}>{BusinessCards}</Slider>
            </div>
        )
    }
}