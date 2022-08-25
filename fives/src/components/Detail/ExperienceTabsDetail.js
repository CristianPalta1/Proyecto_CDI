import React, { useState } from 'react'


const ExperienceTabsDetail = ({
    detailsTitle,
    detailsDescription,
    hoursList,
    helpfulLinks,
    imageDetail,
    imageDetailMobile,
    titlePrices,
    titleLinks,
    prices,
    faqs,
    titleHours
}) => {
    const [tabActive, setTabActive] = useState(0);

    const [activeFaqs, setActiveFaqs] = useState(false)
    const [faqsID, setfaqsID] = useState(0)

    const handleViewFAQS = (i) => {

        setfaqsID(i)
        if (faqsID === i) {
            setActiveFaqs(!activeFaqs)
        } else {
            if (activeFaqs) {
                setActiveFaqs(true)
            } else {
                setActiveFaqs(true)
            }
        }
    }

    const data = [
        {
            title: `${detailsTitle}`,
            content: {
                title: `${detailsTitle}`,
                description: `${detailsDescription}`,
                prices: prices,
                hours: hoursList,
                links: helpfulLinks,
                titlePrices,
                titleHours,
                titleLinks,
                imageDetail,
                imageDetailMobile
            }
        },
        {
            title: "FAQs",
            content: faqs
        }
    ]

    return (
        <section className='tabs-experience-section'>
            <div className='container'>
                <div className='types-tabs'>
                    {
                        data.map((tab, id) => {
                            return (
                                <button
                                    key={`type-item-content ${id}`}
                                    onClick={() => setTabActive(id)}
                                    className={`type-item-content ${tabActive === id ? 'active' : ''}  ${tab.title}`}
                                >
                                    {tab.title}
                                </button>
                            )
                        })
                    }
                </div>
                <div className='tabs-content'>
                    <div className='row'>
                        {data[tabActive] && tabActive === 0 ?
                            (
                                <>
                                    <div className='col-md-4 content-info'>
                                        <h2 className='content-title'>{data[tabActive].title}</h2>
                                        <div className='content-description'
                                            dangerouslySetInnerHTML={{
                                                __html: data[tabActive].content.description
                                            }}></div>
                                        <ul className='content-list'>
                                            <div className='prince__content'>
                                                <li className='prices'
                                                    dangerouslySetInnerHTML={{
                                                        __html: data[tabActive].content.titlePrices
                                                    }}>
                                                </li>
                                                <ul className='prices-content'>
                                                    {
                                                        data[tabActive].content.prices.length > 0 && data[tabActive].content.prices.map((price, id) => <li className='content-item'
                                                            key={`content-item${price}`}
                                                        > {price}</li>)
                                                    }
                                                </ul>
                                            </div>

                                            <div className='hours__content'>
                                                <li className='hours'
                                                    dangerouslySetInnerHTML={{
                                                        __html: data[tabActive].content.titleHours
                                                    }}>
                                                </li>
                                                <ul className='hours-content'>
                                                    {
                                                        data[tabActive].content.hours.length > 0 && data[tabActive].content.hours.map((hour, id) => <li className='content-item'
                                                            key={`content-item${hour}`}
                                                        > {hour}</li>)
                                                    }
                                                </ul>
                                            </div>

                                        </ul>
                                        <h4 className='content-subtitle'>{data[tabActive].content.titleLinks}</h4>
                                        <ul className='content-list'>
                                            {
                                                data[tabActive].content.links.length > 0 && data[tabActive].content.links.map((link, i) => {
                                                    return (
                                                        <li className='content-item' key={`content-item ${i}`}>
                                                            <a className='content-link' href={`${link?.url}`}>{link?.text}</a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className='col-md-8 content-image-field'>
                                        <picture>
                                            <source media="(max-width: 798px)" srcSet={data[tabActive].content?.imageDetailMobile?.url} />
                                            <img
                                                loading='lazy'
                                                className='content-image'
                                                src={data[tabActive].content?.imageDetail?.url}
                                                title={data[tabActive].content?.imageDetail?.title}
                                                alt={data[tabActive].content?.imageDetail?.alt}
                                            />
                                        </picture>
                                    </div>
                                </>
                            ) : (
                                <div className='col-md-12'>
                                    {
                                        data[tabActive].content.length > 0 && data[tabActive].content.map((faq, i) => {
                                            return (
                                                <div className='faq-content' key={`faq-content${i}`}>
                                                    <div className={`faq-title content-subtitle ${activeFaqs && faqsID === i ? "active" : ""}`}
                                                        onClick={() => { handleViewFAQS(i) }}
                                                        dangerouslySetInnerHTML={{
                                                            __html: faq?.question_title
                                                        }}></div>
                                                    <div className={`faq-description-content ${activeFaqs && faqsID === i ? "active" : ""}`}>
                                                        <div className='faq-description'
                                                            dangerouslySetInnerHTML={{
                                                                __html: faq?.answer_description
                                                            }}></div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceTabsDetail;