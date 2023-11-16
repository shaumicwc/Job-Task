import React from 'react';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className='relative bg-cover bg-center' style={{backgroundImage : 'url("https://blog.mozilla.org/wp-content/blogs.dir/278/files/2018/05/No_More_404s.gif")', width : '100%', height : '100vh'}}>
            <Link className='absolute top-2/3 left-1/2' to='/'><button className='btn rounded-lg hover:bg-btn-color bg-btn-color border-none text-black'>Back To Home</button></Link>
        </div>
    );
};

export default ErrorElement;