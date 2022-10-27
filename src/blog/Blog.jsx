import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='text-3xl bg-violet-600 mt-4 lg:mx-20 md:mx-16 sm:mx-8 lg:p-10 md:p-6 sm:p-3 p-2 rounded-md'>
                <h1 className='bg-white rounded-md text-center'>Question 1: What is Cors?</h1>
                <p className='bg-gray-200 md:w-3/4 sm:w-full rounded-md md:p-3 sm:p-2 p-2 my-4 mx-auto relative'>Answer: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div className='text-3xl bg-violet-600 mt-4 lg:mx-20 md:mx-16 sm:mx-8 lg:p-10 md:p-6 sm:p-3 p-2 rounded-md'>
                <h1 className='bg-white rounded-md'>Question 2:  Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p className='bg-gray-200 md:w-3/4 sm:w-full rounded-md md:p-3 sm:p-2 p-2 my-4 mx-auto relative'>Answer: Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. </p>
            </div>
            <div className='text-3xl bg-violet-600 mt-4 lg:mx-20 md:mx-16 sm:mx-8 lg:p-10 md:p-6 sm:p-3 p-2 rounded-md'>
                <h1 className='bg-white rounded-md text-center'>Question 3:  How does the private route work?</h1>
                <p className='bg-gray-200 md:w-3/4 sm:w-full rounded-md md:p-3 sm:p-2 p-2 my-4 mx-auto relative'>Answer: The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            </div>
            <div className='text-3xl bg-violet-600 mt-4 lg:mx-20 md:mx-16 sm:mx-8 lg:p-10 md:p-6 sm:p-3 p-2 rounded-md'>
                <h1 className='bg-white rounded-md text-center'>Question 4:  What is Node? How does Node work?</h1>
                <p className='bg-gray-200 md:w-3/4 sm:w-full rounded-md md:p-3 sm:p-2 p-2 my-4 mx-auto relative'>Answer: Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
            </div>
        </div>
    );
};

export default Blog;