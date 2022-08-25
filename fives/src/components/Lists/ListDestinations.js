import DestinationCard from 'components/Cards/DestinationsCard';
import React from 'react'
import LargeCard from '../Cards/LargeCard'
const ListDestinations = ({blockData, objList, isDestinations= false}) => {

    const {banner: { title }, description } = blockData;

  return (
    <section className={`destinations-types ${isDestinations ? "up" : ""}`}>
    <div className="container">
      {
        isDestinations ? <></> : ( <div className="destinations-info-content">
        <h1 className="destinations-title">
          {title ? title : ''}
        </h1>
        <div
          className="destinations-description"
          dangerouslySetInnerHTML={{ __html: description ? description : '' }}
        />
      </div>)
      }
     
      <div className='destination-content row'>
        {
          objList.length > 0 && objList.map((dest, id) => <DestinationCard dest={dest} 
                                                                      key={`destination ${id}`}/> )
        }
      </div>
    </div>
  </section>
  )
}

export default ListDestinations;