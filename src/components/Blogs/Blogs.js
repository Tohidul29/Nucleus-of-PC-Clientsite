import { faBook, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Blogs = () => {
    return (
        <div className="card w-100 bg-[#0D0D0D] shadow-xl image-full mt-12 mx-12">
            <div className="card-body mx-auto">
                <h1 className='text-3xl text-center mb-6'>Simple Blog Q&A <FontAwesomeIcon icon={faBook}></FontAwesomeIcon></h1>
                <h2 className="card-title">1. How will you improve the performance of a React Application?</h2>
                <p>
                    <ul>
                        <li>&#x2022; Try to compress the image sizes which are you using on the website to avoid extra loading.</li>
                        <li>&#x2022; Don't repeat your codes or components. If necessary make hooks and use that hooks where you needed to implement them.</li>
                        <li>&#x2022; Memoizing React components to prevent unnecessary re-renders.</li>
                        <li>&#x2022; You can use dynamic export or import where you need to implement it.</li>
                    </ul>
                </p>
                <h2 className="card-title mt-4">2. What are the different ways to manage a state in React Application?</h2>
                <p>As far as we know, in React have four states. They are URL state, Server state, Local state, and Global state. React employs an observable object as the state, which tracks changes to the state and assists the component in responding appropriately. If we alter the state of any component, such as the following, the webpage will not re-render because React State will not be able to detect the changes.</p>
                <h2 className="card-title mt-4">3. How does prototypical inheritance work?</h2>
                <p>Every object, along with its methods and attributes, has a secret internal property called [[Prototype]]. Prototypal inheritance is a javascript feature that allows you to add methods and attributes to objects. It's a technique that allows one object to inherit the attributes and methods of another. We use Object.getPrototypeOf and Object.setPrototypeOf to get and set the [Prototype] of an object, respectively. It is now set using __proto__ in current programming languages.</p>
                <h2 className="card-title mt-4">4. You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>First of all, if it's an array of objects, we can use the map function to check every element of that array. Then inside the array, there have objects and we can find the object element by using (object element name.the element we wanted to get). For example, If we use products array after maping we can get every single elements as product. Then we can use product.name to get the name of the object element. Then we need to use an input tag and we have to get the value from input tag. If searching element matched with product.name then it will show that element from that array of object.</p>
                <h2 className="card-title mt-4">5. What is a unit test? Why should write unit tests?</h2>
                <p>Before code is deployed, unit testing verifies that it fulfills quality criteria. This promotes a stable engineering environment that prioritizes quality. Unit testing saves time and money across the product development life cycle, and it helps developers produce better code faster.</p>
            </div>
        </div>
    );
};

export default Blogs;