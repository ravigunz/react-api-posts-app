import React, { useEffect, useState } from 'react'

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then((data) => {
    setPosts(data);
}).catch(() => {});
    }, []);

  return (
    <div>
        <h2 style={{ textAlign: 'left' }}>Posts</h2>
        {posts.map((val, key) => {
            return (
                <div key={key}>
<p style={{ fontWeight: 'bold', textAlign: 'left'}}>{val.title}</p>
<p style={{ textAlign: 'justify'}}>{val.body}</p>
<br />
                    </div>
            )
        })}
    </div>
  )
}
