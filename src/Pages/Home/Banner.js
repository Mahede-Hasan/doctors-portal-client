import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';
import bannerBackground from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div style={{
            background: `url(${bannerBackground})`
        }} className="hero min-h-screen  bg-base-200 bg-hero-bg">
            <div className="hero-content flex-col xl:flex-row-reverse">
                <img src={chair} alt="" className=" rounded-lg lg:w-[70%] lg:h-[300px] md:w-[100%] md:h-[200px] shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold ">Find your doctor make an appointment</h1>
                    <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br /> excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;