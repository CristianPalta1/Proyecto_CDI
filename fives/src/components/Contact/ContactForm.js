import React from 'react';

const ContactForm = ({ formBlockData }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div id="contact-form" className="contact-form" onSubmit={handleSubmit}>
      <h3 className="content-title">{formBlockData.title}</h3>
      <p className="content-description">{formBlockData.description}</p>
      <div id="contact-form-container"></div>
    </div>
  );
};

export default ContactForm;
