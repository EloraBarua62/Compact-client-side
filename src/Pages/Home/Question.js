import React, { Fragment, useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody
} from "@material-tailwind/react";

const Question = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className='py-20'>
            <h1 className='text-4xl font-bold text-slate-800 pb-10'>Frequently ask question</h1>
        <div className='flex justify-center items-center h-96'>
            
                <div className='text-2xl bg-slate-200 p-20 border-8 border-slate-800'>
                <Fragment>
                    <Accordion open={open === 1} onClick={() => handleOpen(1)}>
                        <AccordionHeader>Can rural people get home delivery?</AccordionHeader>
                        <AccordionBody>
                            Yes,ofcourse.We are always there for urban and rural people
                            {/* We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our
                    dreams. */}
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} onClick={() => handleOpen(2)} className='py-5'>
                        <AccordionHeader>Do you give some offer on product?</AccordionHeader>
                        <AccordionBody className='py-5'>
                            No,We keep it on chepest rate
                            {/* We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our
                    dreams. */}
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} onClick={() => handleOpen(3)}>
                        <AccordionHeader>Are the products authentic?</AccordionHeader>
                        <AccordionBody>
                            Yes,you can try once.It have any objection,we will return money
                            {/* We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our
                    dreams. */}
                        </AccordionBody>
                    </Accordion>
                </Fragment>
            </div>
        </div>
        </div>
    );
};

export default Question;