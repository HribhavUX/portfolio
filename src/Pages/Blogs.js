import {useState,useEffect} from 'react';
import client from "../client";
import BlogCard from "../components/BlogCard";


function Blogs() {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] { title, slug, description, publishedAt }`
      )
      .then((data) => setPosts(data))
  }, [])


  return (
    <>
      {/* Background */}
      {/* Blogs Container */}
      <div className='flex flex-wrap w-screen mt-[13vmax] small:mt-[28vmax] relative z-5 px-10 justify-center'>
        {posts.map((post, i) =>(
          <>
          <BlogCard key={i} title={post.title}
                    link={post.slug.current}
                    description={post.description}
                    date={post.publishedAt}/>
          </>
        ))}
      </div>

    </>
  )
}

export default Blogs