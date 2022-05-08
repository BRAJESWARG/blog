import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ArrayofBlogs } from "../ArrayOfBlog/ArrayOfBlog";


const NavComponent = () => {
  const [data] = useContext(ArrayofBlogs)

  return (
    <div>
      <div className='heading'>
        <p className='the'>The</p>
        <p className='siren'>Siren</p>
      </div>

      <div className='navContainer' >
        <Link to="/" className='NavCategory'>Home</Link>

        {data.filter((value) => value.ID === 1).map((val) => (

          <Link to={`/category/${val.Category}`} className='NavCategory'>{val.Category}</Link>

        ))}
        

      </div>
      {/* <hr className='navHr' /> */}


    </div>
  );
};


export default NavComponent;
