import React  from 'react';
import '../styles.scss'
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';

Banner3.propTypes = {
    data : PropTypes.array,
};

function Banner3 (props) {
    const {data} = props;
    return (

        <div className="page-title st3">
            <div className="overlay">
            </div>
            <div className="slider-main">
            <Swiper
                modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation 
                >
                {
                    data.slice(0,2).map(item => (
                        <SwiperSlide key={item.id}>
                            <div className="slider-st3">
                    
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="box-slider">
                                                <div className="content-box">
                                                    <h1 className="title" >FXCM Holdings</h1>
                                                    <p className="sub-title">Your Partners from the first</p>
                                                    <p style={{fontWeight:500, fontSize: 15 + "px"}} className="sub-title">FXCM Holdings, based in UK, is financial company established in the late 1990s. It has quickly become a top player in global financial trading. FXCM is committed to providing clients with the best trading experiences through advanced platforms that support various assets, including forex, stocks, cryptocurrencies, and commodities. With a team of experts, FXCM focuses on delivering accurate market information, analysis, and investor education. Whether you're a seasoned investor or a beginner, FXCM offers a trusted destination in the dynamic world of finance.</p>
                                                    <div className="wrap-btn">
                                                        <Link to="/" className="tf-button style2">
                                                            Join now
                                                        </Link>
                                                    </div>
                                                    {/* <div className="flat-box" > 
                                                        <div className="box-couter">
                                                            <p>Clients</p>
                                                            <div className="number-content">
                                                                <h6 className="count-number2">700+</h6>
                                                            </div>
                                                        </div>
                                                        <div className="box-couter">
                                                            <p>Total</p>
                                                            <div className="number-content">
                                                                <h6 className="count-number2">$570.24 M</h6>
                                                            </div>
                                                        </div>
                                                        <div className="box-couter">
                                                            <p>Investors</p>
                                                            <div className="number-content">
                                                                <h6 className="count-number2">6.297</h6> 
                                                            </div>
                                                        </div> 
                                                    </div> */}
                                                </div>
                                                <div className="image">
                                                    <img className="img_main" src={require ("../../../assets/images/common/img_slider3.png")} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </div>
    );
}

export default Banner3;