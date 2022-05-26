import React from 'react';
import image from '../images/IMG_9192.JPG'

const MyPortfolio = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold py-10'>Elora's Portfolio</h1> 
        <div className='flex justify-center items-center'>
           
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Elora" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Elora Barua</h2>
                    <h2 class="card-subtitle">Email address : elorabarua62@gmail.com</h2>
                    <p>I have completed my graduation on CSE from Sylhet Engineering College</p>

                        <br />
                    <p>I have learned some programming language like javascript,javascript library react and framework express.js and Node.js for back-end.I also have got some basic knowledge on Databse MongoDB.Beside this,i took some sound knowledge on CSS libraries like Bootstrap,Tailwind</p>
                    <br />
                    <p> Here,some of my recent project as newbie.Hope,you will enjoy to see this.</p>
                    <li><a href="https://resplendent-taffy-9f5a72.netlify.app/">BookFantasy</a></li>
                    <li><a href="https://law-and-lawyer-764d9.web.app/">Law&Lawyer</a></li>
                    <li><a href="https://bookpile-66c24.web.app/">BookPile</a></li>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default MyPortfolio;