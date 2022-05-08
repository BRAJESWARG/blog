import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BsHandThumbsUp } from "react-icons/bs";
import { ArrayofBlogs } from './ArrayOfBlog/ArrayOfBlog';
import MoreFromSiren from './MoreFromSiren';



const Article = () => {

    const [data] = useContext(ArrayofBlogs)
    const { Id } = useParams()
    const { cat } = useParams()

    return (
        <div>
            {data.filter((value) => ((value.ID == Id) && (value.Category === cat))).map((val) => (
                <div className='articleContainer'>
                    <p className='articleTitle'>{val.Title}</p>
                    <div className='articleProfileBox'>
                        {/* <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20574488.jpg' alt='' className='articleProfileImg' /> */}
                        {/* <div>
                            <p><b>{val.Author}</b></p>
                            <p>{val.Date}</p>
                        </div> */}
                    </div>
                    <img src={val.Image} alt='' className='articleImg' />
                    <p>{val.Body}{val.Body}</p>
                    <p><BsHandThumbsUp />  <b>9.3k Like</b></p>
                    <hr />

                    <div className='articleProfileBox'>
                        <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20574488.jpg' alt='' className='articleProfileImg' />
                        <div>
                            <p>Written By</p>
                            <p><b>{val.Author}</b></p>
                            <p>{val.Date}</p>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}

        <MoreFromSiren />

        </div>
    );
};

export default Article;