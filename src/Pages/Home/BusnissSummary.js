import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FaRegFlag } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { AiTwotoneLike } from 'react-icons/ai';

const BusinessSummary = () => {
    return (
        <div className='bg-white py-20'>
            <h1 className='text-center text-2xl lg:text-6xl font-bold text-purple-900 mb-2 pt-10'>Business History</h1>
            <p className='text-center text-2xl lg:text-4xl font-medium mb-2 pt-10'>Doing Business for over a decade</p>
            <p className='text-center lg:text-lg font-medium mb-6'>We provide what our client wants</p>
            <div className='p-10 mb-10'>
                <div className='flex items-center justify-center flex-wrap gap-10'>
                    <div className=' text-center flex flex-col items-center justify-center'>
                        <div className='mb-4'>
                            <FaRegFlag className='text-[#9114a1] -rotate-[10deg] w-10 h-10'></FaRegFlag>
                            {/* <FaRegFlag className='text-[#0eadc9] rotate-[10deg]'></FaRegFlag> */}
                        </div>
                        <div className='mb-2 text-4xl font-medium'>
                            <CountUp start={0} end={59} duration={1} decimals={0} delay={0.3}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <p className='text-2xl text-[#9114a1] font-medium'>Countries</p>
                    </div>
                    <div className=' text-center flex flex-col items-center justify-center'>
                        <div className='mb-2'>
                            <MdDeliveryDining className=' -rotate-[5deg] w-12 h-12' style={{ color: '#9114a1' }}></MdDeliveryDining>
                        </div>
                        <div className='mb-2 text-4xl font-medium'>
                            <CountUp start={0} end={10} suffix={'M+'} duration={1} decimals={0} delay={0.3}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <p className='text-2xl text-[#9114a1] font-medium'>Products Delivered</p>
                    </div>
                    <div className=' text-center flex flex-col items-center justify-center'>
                        <div className='mb-4'>
                            <BsFillPeopleFill className=' w-10 h-10' style={{ color: '#9114a1' }}></BsFillPeopleFill>
                        </div>
                        <div className='mb-2 text-4xl font-medium'>
                            <CountUp start={0} end={175} duration={1} decimals={0} delay={0.3}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <p className='text-2xl text-[#9114a1] font-medium'>Happy Clients</p>
                    </div>
                    <div className=' text-center flex flex-col items-center justify-center'>
                        <div className='mb-4'>
                            <AiTwotoneLike className=' pt-2 w-10 h-10' style={{ color: '#9114a1' }}></AiTwotoneLike>
                        </div>
                        <div className='mb-2 text-4xl font-medium'>
                            <CountUp start={0} end={450} suffix={'+'} duration={1} decimals={0} delay={0.3}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </div>
                        <p className='text-2xl text-[#9114a1] font-medium'>Feedbacks</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;