import React from 'react';

const DetailBlock = ({ item, isRooms }) => {
  const { title, information, item_type } = item;

  return (
    <div className="col-md-4">
      <div className={`detail-block ${isRooms ? "detail-block__room" :"detail-block_restaurant"}`}>
        <div className={`detail-block-title ${isRooms ? "title__room" :"title_restaurant"}`}
          dangerouslySetInnerHTML={{
            __html:title
          }}>
        </div>
        {
          isRooms ? 
          (<div className={`detail-block-subitle ${information ? "content" : "nocontent"} ${information === "Meters" || information === "Metros" ? "isMeters" : ""}`}
          dangerouslySetInnerHTML={{
            __html:information
          }}>
        </div>) : (<></>)
        }

        <p className={`${isRooms ? "rooms__info" : "restaurant__info"} detail-block-type`}>{item_type}</p>
      </div>
    </div>
  );
};



const InfoDetail = ({ info = [], title = '', description, isRooms = false }) => {
  const splittedTitle = title.split(' ');
  return (
    <section className="complementary-information-section">
      <div className="container">
        <div className="row details-content">
          {info.length > 0 && info.map((obj, id) => (
            <DetailBlock item={obj} key={`detail-block ${id}`} isRooms = {isRooms}/>
          ))}
        </div>
        <div className="content-info">
          {splittedTitle.length > 1 ? (
            <h2 className="content-title">
              {splittedTitle[0] + ' ' + splittedTitle[1]}
              <span className="content-title-comp">{splittedTitle[2]}</span>
            </h2>
          ) : (
            <div className="content-title"
            dangerouslySetInnerHTML={{
              __html:title
            }}>
            </div>
          )}
          <div
            className="content-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoDetail;
