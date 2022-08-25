import React, {useState} from 'react';
import Link from 'next/link';
import { useToggle } from 'hooks/useToggle';



const BlogCards = ({ blogData, setDataBlog }) => {

    let arrayCategories = [];
    const [visible, setVisible] = useState(false);
    const [idCategory, setIdCategory] = useState(0);
  
    blogData.map(({category_id,category_name }) => {
      let category = {category_id, category_name}
      arrayCategories.push(category)
    })
    let set = new Set( arrayCategories.map((item) => {
      return JSON.stringify(item)
   
    } ) )
    let arrSinDuplicaciones = Array.from(set).map((item) => {  return JSON.parse(item)} );

    const handleFilter  = (id, i) =>{   
      setIdCategory(i)
      setVisible(true)
      const dataNewBlog = blogData.filter((blog) => {
        return blog.category_id === id.toString()
      })
      setDataBlog(dataNewBlog)
      if(visible){       
        setVisible(false)        
        if(idCategory !== i){  
          setVisible(true)       
        }else{
          setDataBlog(blogData)
        }       
      }     
    }
    return (
        <>
             {
                  arrSinDuplicaciones.map((category, i)=>(
                    <div key = {category.category_name} className = "item__category">
                      <div className = {`category__name ${visible && idCategory === i ? "active" : ""} `}>
                        <p className = "name">{category.category_name}</p>
                      </div>
                      <div className = {`category__button ${visible && idCategory === i ? "active" : ""}`} onClick = {()=>{handleFilter(category.category_id, i)}}>
                        <div className = "btn_click"/>
                      </div>
                    </div>
                  ))
                }
        </>
    );
};

export default BlogCards;
