import React, { useState, useEffect } from 'react'


function AcordeonList({ data }) {

    useEffect(() => {
      let linksTo = document.querySelector('.container_privacy .privacy__description p a');
      let linksToCaseTwo = document.querySelector('.container_privacy .privacy__description ul a');
      linksTo?.setAttribute('target', '__blank')
      linksToCaseTwo?.setAttribute('target', '__blank');
    }, [])
    
    const [activeFaqs, setActiveFaqs] = useState(false)
    const [faqsID, setfaqsID] = useState(0)

    const handleViewDescription = (i) =>{
        
        setfaqsID(i)
        if (faqsID === i) {
            setActiveFaqs(!activeFaqs)
          } else {
            if (activeFaqs) {
                setActiveFaqs(true)
            }else{
                setActiveFaqs(true)
            }
          }
    }
    if (!data) return (<p>Loading ...</p>)
    return (
        <section className="room-types container_privacy" >

            <div className='container'>


                <div className='rooms-info-content privacy-content'>
                    <div className='room-title' dangerouslySetInnerHTML={{ __html: data.title }} />
                    <div className='rooms-description subtitle'><p className="subtitleIntro">{data.title_intro.replace(/&amp;/g, "&")}</p></div>
                    <div className='rooms-description'><p className="descIntro">{data.description}</p></div>
                    <div className="container__acordeon">
                        <ul className='title_acordeon'>
                            {
                                data.accordion_list_export.map((item, i) => (
                                    <div key={item.title_accordion}  className = "acordeon__content">
                                        <li className={`title__acordeon ${activeFaqs && faqsID === i ? "active" : ""}`}   onClick={()=>{handleViewDescription(i)}}>
                                            {item.title_accordion}
                                        </li>
                                        <div className={`privacy__description ${activeFaqs && faqsID === i ? "active" : ""}`} dangerouslySetInnerHTML={{__html: item.format_description}}></div>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default AcordeonList