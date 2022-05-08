import React, { useContext, useState } from "react";
import { ArrayofBlogs } from "../../ArrayOfBlog/ArrayOfBlog";
import { Link } from "react-router-dom";
import TopPostHome from "../Top Post Home/TopPostHome";
import Advertisement from "../Advertisement/Advertisement"

const LatestArticles = () => {
    const [data] = useContext(ArrayofBlogs)
    const [load, setLoad] = useState(true)

    return (

        <>
            <p className='mainCategory'>Latest Articles</p>
            <hr className='mainCategoryHr' />
            <div className='blogBody'>

                <div>
                    {data.filter((value) => (load ? (value.ID <= 4) : (value.ID <= 6)) && value.Category === "Bollywood").map((val) => (

                        <div>
                            <Link to={`/article/${val.Category}/${val.ID}`}>

                                <div className='blogContainer'>
                                    <img src={val.Image} className='blogImg' alt="" />
                                    <div className='blogContent'>
                                        <p className='blogTitle'>{val.Title}</p>
                                        <p className='blogDetail'>{val.Body.substring(0, 150)}...</p>
                                        <p className='blogCategory'>{val.Category}</p>
                                    </div>
                                </div>
                            </Link>

                            <hr className='blogLine' />
                        </div>
                    ))}

                    <div className='btn'>
                        <button onClick={() => setLoad(!load)} className='btn'>{(load ? "View More" : "View Less")}</button>
                    </div>
                </div>

                <div>
                    <Advertisement />
                    <TopPostHome />
                </div>

            </div>
        </>


        // <>
        // <div className="text-left mt-5 text-2xl">
        //     <span className="font-bold underline">Latest</span>
        //     <span className="font-bold underline">Articles</span>

        //     <div className="flex">
        //         <div className="grid grid-rows-5 gap-5 w-1/5 h-1/5">
        //             {
        //                 data.filter(
        //                     d => d.id === "1" && (d.category === "Tourism" || d.category === "Fitness" || d.category === "Food"|| d.category === "Bollywood"|| d.category === "Hollywood"|| d.category === "Technology")
        //                 ).map(
        //                     (e, index) =>   <img key={index} src={e.imgURL} alt={e.title} className='rounded-2xl' />
        //                 )
        //             }

        //         </div>
        //         {/* <TopPost /> */}

        //     </div>

        // </div>
        // </>
    )
}

export default LatestArticles;