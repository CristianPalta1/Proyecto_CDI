import React from 'react'

export default function BannerCard({ data, innerText = false, isDestinations= false}) {

    return (
        <section className={`banner__cards ${isDestinations ? "up" : ""}`}>
            <div className="card_description">
                {
                    innerText ? (<div className="content-title" dangerouslySetInnerHTML={{
                        __html:  data[0] ? data[0]?.desc : data.desc
                    }} />) : data[0] ? (<h3 className="content-title">{data[0]?.desc}</h3>) : (<h3 className="content-title">{data.description}</h3>)
                }

                {
                    innerText ? (<div className="content-description" dangerouslySetInnerHTML={{
                        __html: data[0] ? data[0]?.title : data.title
                    }} />) : data[0] ? ( <h1 className="content-description">{data[0]?.title}</h1>) : ( <h1 className="content-titles">{data?.banner?.title}</h1>)
                }

               
            </div>
        </section>
    )
}
