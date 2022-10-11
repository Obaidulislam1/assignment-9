import React from 'react';

const Blog = () => {
    return (
        <div>
           <div className='w-4/5 m-auto'>
           <h1 className='text-center mt-10 mb-5 font-bold'>What is the perpas of react router ?</h1>
           <p className='text-center'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</p>
           </div>
           <div className='w-4/5 m-auto'>
            <h1 className='text-center mt-10 mb-5 font-bold'>How does context api work ?</h1>
            <p className='text-center'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
           </div>
           <div className='w-4/5 m-auto'>
            <h1 className='text-center mt-10 mb-5 font-bold'>What is useref ?</h1>
            <p className='text-center'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>

           </div>
        </div>
    );
};

export default Blog;