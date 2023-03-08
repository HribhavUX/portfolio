import React from 'react'
import {Link} from 'react-router-dom';

function BlogCard({title,date,description,link}) {
  let n = Math.floor(Math.random()*2);
  return (
        <Link to={`/blogs/${link}`} className={'p-10 bg-[white] shadow-md rounded-lg font-google font-[600] mx-10 my-5'+(n===1?' w-[20rem]':' w-[30rem]')}>
            <h1 className='font-PoM text-[1.5rem] mt-5'>{title}</h1>
            <p className='font-PoS text-[.75rem] mt-2'>{date.split('T')[0].replaceAll('-',' ')}</p>
            <p className='font-PoR font-[500] mt-5'>{description}</p>
        </Link>
  )
}

export default BlogCard