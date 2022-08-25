import React from 'react'

function MainSpecialOfferCard({ onClick, data }) {

    const { image_desktop, image_mobile, offer_description, title, title_contact, book_now, discount_export } = data;
    return (
        <section className='section__main--offers'>
            <div className='container container__main--card'>
                <picture>
                    <source
                        media="(max-width: 968px)"
                        srcSet={image_desktop?.url}
                        width={image_desktop?.dimensions.width}
                        height={image_desktop?.dimensions.height}
                    />
                    <img
                        loading="lazy"
                        className="card-image"
                        title={image_desktop?.alt}
                        alt={image_desktop?.alt}
                        src={image_desktop?.url}
                        width={image_desktop?.dimensions.width}
                        height={image_desktop?.dimensions.height}
                    />
                    {/* <div className="offer__percent" dangerouslySetInnerHTML={{ __html: discount_export }} /> */}


                </picture>
                <div className='container__info'>
                    <div className="card__info">
                        <div className='title__special_offers'><h1>{title}</h1></div>
                        <div className="description__special_offers" dangerouslySetInnerHTML={{ __html: offer_description }} />
                        <p className='book__confidence'>{'Book with confidence'}</p>
                        <p className="terms__conditions" onClick={() => { onClick() }}>{title_contact}</p>
                        <div className='user-actions'>
                            <a target="_blank" rel="noreferrer" href={`${book_now?.url}`} className='btn-0'>
                                {book_now?.text}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSpecialOfferCard