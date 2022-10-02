import React from 'react';


const CardInfo = ({img , CardTitle, bgClass, CardDescribe}) => {
    return (
        <div>
            <div className={`card mx-3 ${bgClass} py-2 my-3 lg:card-side shadow-xl`}>
                <figure className='pl-6'><img src={img} alt="Album" /></figure>
                <div className="card-body ">
                    <h2 className="text-white text-2xl font-semibold">{CardTitle}</h2>
                    <p className='text-white text-sm'>{CardDescribe}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default CardInfo;