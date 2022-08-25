import React from 'react'


export default function FooterCardHotel({ dataFooter, hotelData }) {



    const { description, font_color, name, images } = hotelData;
   
    let image = ''
    switch (dataFooter?.description.toLowerCase()) {
        case 'the fives oceanfront':
            image = "/resourses/assets/TFH_O.svg"
            break;
        case 'the fives beach':
            image = "/resourses/assets/TFH_B.svg"
            break;
        case 'the fives downtown':
            image = "/resourses/assets/TFH_D.svg"
            break;

        default:
            image = ''
            break;
    }

    return (
      
        <section className="footer__info--hotel">
            <div className="container__footer--info" style={{ backgroundColor: font_color }}>
                <picture>
                    {
                        image !== '' ? (
                            <img
                            loading="lazy"
                            src={image}
                            className="navbar-brand-logo"
                            title="logo"
                            alt="logo"
                        />
                        ) : (<></>)
                    }
                   
                </picture>
                <div className="container__location--detail">
                    <div className='container__logo'>
                        <img
                            loading="lazy"
                            src="/resourses/assets/location.svg"
                            className="navbar-brand-logo"
                            title="logo"
                            alt="logo"
                        />
                    </div>
                    <div className='container__address'>
                        <h3>{dataFooter?.title}</h3>
                        <p>{dataFooter?.description}</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
