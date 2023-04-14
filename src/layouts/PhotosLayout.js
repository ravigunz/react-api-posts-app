import React, { useEffect, useState } from 'react'

export default function PhotosLayout() {

const [photos, setPhotos] = useState([]);

useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/photos").then((response) => response.json()).then((data) => {
    setPhotos(data);
}).catch(() => {});
}, []);

  return (
    <div>
        <h2 style={{ textAlign: 'left'}}>Photos</h2>
        {photos.map((val, key) =>{
            return (
                <div key={key}>
<p style={{ textAlign: 'left'}}>{val.thumbnailUrl}</p>
                    </div>
            )
        })}
    </div>
  )
}
