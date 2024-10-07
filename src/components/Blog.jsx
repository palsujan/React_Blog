import React, { useEffect,useState } from 'react'
import Post from './Post';
import Pagination from './Pagination';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchPost = async () =>{
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if(!response.ok){
                    throw new Error('Network repsonse was not ok');
                }
                const data = await response.json();
                console.log("Data", data);
                setPosts(data);
            } catch (err){
                setError('Error fetching pots')
            } finally{
                setLoading(false)
;            }
        }
        fetchPost();
    },[]);
    if(loading)return <div>Loading.......</div>
    if(error) return <div>{error}</div>
  return (
    <div >
        <h1>Blog Post</h1>
        <div className='card-container'>
            {posts.map((post)=>(
                <Post key={post.id} title={post.title} content ={post.body}/>
            ))}
        </div>
        <Pagination/>
        
    </div>
  )
}

export default Blog;