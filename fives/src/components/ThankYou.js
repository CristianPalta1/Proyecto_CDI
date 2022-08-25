import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ThankYou = ({ data }) => {
    const router = useRouter();
    const emailIcon = '/resourses/assets/email_contact.svg';

    /**Sí isOpen es falso no muestra nada */
    if (!data) return null;
   

    const handleOnClick = () => {
        router.push('/');
    }
    return (
        <div className="thankyou__container">
            <picture className="image__thank-you">
                <source media="(max-width: 767.98px)" srcSet={data.background_image_mobile.url}></source>
                <img
                    width={data?.background_image?.dimensions?.width} 
                    height={data?.background_image?.dimensions?.height}     
                    src={data.background_image.url} 
                    alt={data.alt} 
                    title={data.title} 
                    loading="eager"
                />
            </picture>
            <div className="thank-you__info--container">
                <div className="thank-you">
                    <div className="thank_you_icon">
                        <Image src={emailIcon} alt={"icon_email"} title={"icon_email"} width="51.542" height="32.364"/>
                    </div>
                    <div className="description__container">
                        <h3 className='title__thank-you'>{data.title}</h3>
                        <p className='desc__thank-you'>{data.subtitle}</p>
                    </div>
                    <button type="button" className="btn__thank-you" onClick={() => { handleOnClick() }}>Accept</button>
                </div>
            </div>
        </div>

    );
};

export default ThankYou;
