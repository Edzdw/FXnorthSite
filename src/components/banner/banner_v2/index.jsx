import React  from 'react';
import '../styles.scss'
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';

Banner.propTypes = {
    data : PropTypes.array,
};

function Banner (props) {
    const {data} = props;
    return (

        <div className="page-title">
            <div className="icon_bg">
                <img src={require ('../../../assets/images/backgroup/bg_inner_slider.png')} alt="Risebot" />
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
                            <div className="slider-st2">
                                <img className="icon icon_1" src={require ("../../../assets/images/common/icon1_slider_2.png")} alt="" />
                                <img className="icon icon_2" src={require ("../../../assets/images/common/icon2_slider_2.png")} alt="" />
                                <img className="icon icon_3" src={require ("../../../assets/images/common/icon3_slider_2.png")} alt="" />
                                <div className="overlay">
                                    <img src={require ("../../../assets/images//backgroup/bg-slider2.png")} alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="box-slider">
                                                <div className="content-box">
                                                    <h1 className="title" >Become an early investor with the new EA Trading bot</h1>
                                                    <p className="sub-title">[project_name] is an Leading Forex EA Trading Stragety,  <br className="show-destop" />maximizing profits through advanced algorithms and automated strategies for efficient and successful trading</p>
                                                    <div className="wrap-btn">
                                                        <Link to="/faqs" className="tf-button style2">
                                                            HOW TO START
                                                        </Link>
                                                    </div>
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

export default Banner;