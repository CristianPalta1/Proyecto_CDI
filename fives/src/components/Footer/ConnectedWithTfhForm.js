import React, { useState, useEffect } from 'react';
import { validateEmail } from 'utils';
import { useRouter } from 'next/router';

//Components
import NewsLetterModal from 'components/Modals/NewsLetterModal';

const errors = {
  name: 'Por favor, ingrese sólo texto. *',
  email: 'Por favor, dígite un correo válido. *',
  phone: 'Por favor, dígite solo números. *',
  lname: 'Por favor, ingrese sólo texto. *',
  check: '*',
};

const ConnectedWithTfhForm = ({onClose}) => {
  const router = useRouter();
  const defaultState = {
    name: { value: '', withError: false },
    email: { value: '', withError: false },
    phone: { value: '', withError: false },
    lname: { value: '', withError: false },
    check: { value: false, withError: false },
  };
  const [form, setForm] = useState(defaultState);
  const [check, setCheck] = useState(false);


  const handleCheck = (e) => {
    const previousValue = form[e.target.name];
    setCheck(!check)
    setForm({
      ...form,
      [e.target.name]: { ...previousValue, value: e.target.checked },
    });
    
  }

  const handleChange = (e) => {
    const previousValue = form[e.target.name];
    setForm({
      ...form,
      [e.target.name]: { ...previousValue, value: e.target.value },
    });
  };

  const handleBlur = (e) => {
    const previousValue = form[e.target.name];
    let isValid;
    if (e.target.name === 'email') {
      isValid = validateEmail(e.target.value);
    }
    if (e.target.name === 'phone') {
      isValid = e.target.value.length > 0;
    }
    if (e.target.name === 'lname') {
      isValid = e.target.value.length > 0;;
    }
    if (e.target.name === 'name') {
      isValid = e.target.value.length > 0;
    }
    if (e.target.name === "check") {

      isValid = e.target.checked ? true : false;
    }
    setForm({
      ...form,
      [e.target.name]: { ...previousValue, withError: !isValid },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid =
      validateEmail(form.email.value) && form.name.value.length > 0 && form.phone.value.length > 0 && form.lname.value.length > 0 && form.check.value;
    if (isFormValid) {      
      alert('Formulario enviado');
      setForm(defaultState);
      let registerForm = document.getElementById('form-connected-with-newsletter');
      registerForm.reset();
      onClose();
      router.push('/thank-you');    
    } else {
      alert('Formulario con errores');
    }
  };

  return (
    <form
      className="form-connected-with"
      id="form-connected-with-newsletter"
      onSubmit={handleSubmit}
    >
      <h3 className="form__title--modal">Stay connected <span>with The Fives Hotels</span></h3>
      <p className="form__subtitle--modal">Subscribe and stay up to date with all our promotions and benefits</p>
      <div className="section__form--modal">
        <div className="form-group name">
          <label htmlFor="InputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control isNotSpecialCharacter minMaxCharacter"
            name="name"
            id="InputName"
            data-minlength="3"
            data-maxlength="30"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {form.name.withError && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group lastname">
          <label htmlFor="InputLName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control "
            name="lname"
            id="InputLName"
            data-minlength="3"
            data-maxlength="30"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {form.lname.withError && <span className="error">{errors.lname}</span>}
        </div>
        <div className="form-group phone">
          <label htmlFor="InputPhone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            name="phone"
            id="InputPhone"
            data-minlength="10"
            data-maxlength="30"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {form.phone.withError && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-group email">
          <label htmlFor="InputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control isEmail"
            id="InputEmail"
            placeholder="user@mail.com"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {form.email.withError && (
            <span className="error">{errors.email}</span>
          )}
        </div>
        <div className="form-check check">
          <input className="form-check-input" name="check" type="checkbox" defaultChecked={check} id="checkAcept" onBlur={handleBlur} onChange={(e) => { handleCheck(e) }} />
          <label className="form-check-label" htmlFor="checkAcept">
            {`Accept Terms  & Conditions`}
          </label>
          {form.check.withError && (
            <span className="error">{errors.check}</span>
          )}
        </div>
        <div className="form-actions btn__submit">
        
          <button className="btn btn-send form-submit">Send</button>
        </div>
      </div>
    </form>
  );
};

export default ConnectedWithTfhForm;
