import React, { Fragment, useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody
} from "@material-tailwind/react";
import './Question.css'

const Question = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div id='overlay' className="py-20 w-full flex-col items-center h-screen bg-cover bg-no-repeat bg-center bg-[url('https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')]">
            <h1 className='text-4xl font-bold text-white pb-16 uppercase underline underline-offset-8'>Frequently ask question</h1>
            <div className='flex justify-center items-center h-96'>

                <div className=' text-slate-900 p-20 border-8 border-slate-400'>
                    <Fragment>
                        <Accordion open={open === 1} onClick={() => handleOpen(1)}>
                            <div className='pl-3 bg-white'>
                                <AccordionHeader><h1 className='text-2xl'> Can rural people get home delivery?</h1></AccordionHeader>
                                <AccordionBody>
                                    <h1 className='text-xl'>Yes,ofcourse.We are always there for urban and rural people</h1>
                                </AccordionBody>
                            </div>
                            
                        </Accordion>
                        <Accordion open={open === 2} onClick={() => handleOpen(2)} className='py-5'>
                            <div className=' pl-3 bg-white'>
                                <AccordionHeader><h1 className='text-2xl'> Do you give some offer on product?</h1> </AccordionHeader>
                                <AccordionBody className='py-5'>
                                    <h1 className='text-xl'>No,We keep it on chepest rate</h1>
                                </AccordionBody>
                            </div>
                            
                        </Accordion>
                        <Accordion open={open === 3} onClick={() => handleOpen(3)}>
                            <div className='pl-3 bg-white'>
                                <AccordionHeader><h1 className='text-2xl'> Are the products authentic? </h1></AccordionHeader>
                                <AccordionBody>
                                    <h1 className='text-xl'>Yes,you can try once.It have any objection,we will return money</h1>

                                </AccordionBody>
                            </div>
                            
                        </Accordion>
                    </Fragment>
                </div>
            </div>
        </div>
    );
};

export default Question;