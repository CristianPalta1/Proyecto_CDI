import InstaFeeds from 'components/InstaFeeds';
import React from 'react';

const InstagramTimeline = ({ token, limit = 5, title, desc, link }) => {
  
  return (
    <section className="section-instagram">
      <div className="content-title" dangerouslySetInnerHTML={{ __html: title }}/>
      <div className="content-description" dangerouslySetInnerHTML={{ __html: desc }}/>
    
      
      <InstaFeeds token={token} limit={limit} link = {link} />
    </section>
  );
};

export default InstagramTimeline;
