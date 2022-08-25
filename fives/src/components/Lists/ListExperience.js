import React from 'react'
import LargeCard from '../Cards/LargeCard'

const ListExperience = ({blockData, objList, innerText = false, isExperience = false }) => {

    const {banner: { title },description} = blockData;

  return (
    <section className="experiences-types">
    <div className="container">
      <div className="experiences-info-content">
        {/* {
          innerText ? (<div className="experiences-title" dangerouslySetInnerHTML={{
            __html: title
        }} />) : (<h1 className="experiences-title">
        <span className="experiences-title-comp">{title ? title : ''}</span>
      </h1>)
        } */}
        <div className="experiences-title"
              dangerouslySetInnerHTML={{
                __html:title
              }}>
            
        </div>
        <div
          className="experiences-description"
          dangerouslySetInnerHTML={{ __html: description ? description : '' }}
        />
      </div>
      <div className='experiences-content row'>
        {
          objList.length > 0 && objList.map((exper, id) => <LargeCard isExperience = {isExperience} exp={exper} 
                                                                      key={`room ${id}`}/> )
        }
      </div>
    </div>
  </section>
  )
}

export default ListExperience;