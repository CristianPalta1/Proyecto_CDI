import React from 'react';
import Link from 'next/link';
import { useToggle } from 'hooks/useToggle';



const OutStandingCards = ({ filterBlogHighlight, onClose }) => {

    
    const [visible, setVisible] = useToggle();
    const handleOnClose = () => {

        setVisible();
    };



    return (
        <>
            {
                filterBlogHighlight.map((item) => (
                    <div key={item.category_id} className="card__destacada">
                        <picture className="image__blog_destacada">
                            <source media="(max-width: 798px)" 
                                    srcSet={item?.image_mobile_press_room_export?.url} 
                                    width={item?.image_mobile_press_room_export?.dimensions.width}
                                    height={item?.image_mobile_press_room_export?.dimensions.height}
                                    />
                            <img src={item?.image_press_room_export?.url} 
                                    title={item?.image_press_room_export?.alt} 
                                    alt={item?.image_press_room_export?.alt} 
                                    width={item?.image_press_room_export?.dimensions.width}
                                    height={item?.image_press_room_export?.dimensions.height}
                                    />
                        </picture>
                        <div className="desc__blog_destacado" >
                            <div className="category__name">
                                <p className="category">{item?.category_name}</p>
                            </div>
                            <div className="container__information">
                                <span className="date__posted">
                                    {item?.blog_creation_date}
                                </span>
                                <div className="title__information" dangerouslySetInnerHTML={{__html: item?.title_blog_export?.replace(/&amp;/g, "&")}}>
                                    {/* {item?.title_blog_export} */}
                                </div>
                                <p className="description__information">
                                    {item?.main_description_blog}
                                </p>

                            </div>
                            <div className="link__container" >
                                <a target="_self" rel="noreferrer" href={item?.view_more_export?.url?.replace(/&amp;/g, "and").replace(/%26/g, "and")} className="linkItemOutStanding">{item?.view_more_export?.text}</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default OutStandingCards;
