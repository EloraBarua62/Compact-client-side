import React from 'react';

const Blogs = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-5/6'>
                <div className='w-4/6 py-8'>

                    <h1 className='text-2xl font-bold'>1. How will you improve the performance of a React Application?</h1>
                    <p className='text-lg font-bold'>There are several things that we can do to improve the performance of React Application. We can detect wasted renders in React using React performance optimization tools. We can implement shouldComponentUpdate for preventing unnecessary renders. We can also use Pure Component that will help to improve performance. Also, we can prevent wasted renders in React with Immutable.js. Furthur, we can try improving the app's loading time by lazy loading Images. We can optimize React list performance by using correct keys for components.</p>
                </div>
                <div className='w-4/6 py-8'>

                    <h1 className='text-2xl font-bold'>2. What are the different ways to manage a state in a React application?</h1>
                    <p className='text-lg font-bold'>There are different ways to manage different state in a React Application. To manage a local state, we can use useState hook. If we want to manage a global state, then we can use Context API but it's not a good solution and so, we can use third party libraries. To manage a server a state, we can use third party library like SWR. And finally, we can use useLocation, useHistory or useParams to manage a URL state.</p>
                </div>
                <div className='w-4/6 py-8'>

                    <h1 className='text-2xl font-bold'>3. How does prototypical inheritance work?</h1>
                    <p className='text-lg font-bold'>Prototypal inheritance uses the concept of prototype chaining. Let's have a look at that concept where every object has a [[Prototype]] property that links to another object or null. Consider object C, which has a [[Prototype]] property that refers to object B. The [[Prototype]] property of item B points to prototype object A. This continues indefinitely, generating a chain known as the prototype chain. When we search our code, we use this concept. When we need to find a property in an object, we look for it first in the object, and if that doesn't work, we look for it in the prototype, and so on. As a result, until the property is found or null is reached, the complete prototype chain is explored.</p>
                </div>
                <div className='w-4/6 py-8'>

                    <h1 className='text-2xl font-bold'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p className='text-lg font-bold'>The array of the products must be containing objects of product. To find the products only by name, I'll use filter method. Inside filter method, I'll query only by name and if name is matched, then it will be stored in the resultant array. The main code for this problem is: " const result = products.filter(product => product.name == 'someName'); ". The output will be stored in the result array.</p>
                </div>
                <div className='w-4/6 py-8'>

                    <h1 className='text-2xl font-bold'>6. What is a unit test? Why should we write unit tests?</h1>
                    <p className='text-lg font-bold'>Unit testing's key objective is to separate written code in order to test and verify if it works as intended. Unit testing is a crucial phase in the development process because, if done correctly, it can assist detect early faults in code that would otherwise be difficult to find in later stages of testing. Test-driven development (TDD) is a practical methodology that takes a thorough approach to creating a product through continuous testing and revision. Unit testing approach is also the first level of software testing, and it comes before other types of testing like integration testing.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;