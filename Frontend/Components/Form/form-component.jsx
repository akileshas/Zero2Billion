import React, { useState } from 'react';
import './form-component.css';
import formsData from '../../../Data/forms-data';

const FormComponent = ({ formId }) => {
  const form = formsData.find(f => f.id === formId);
  if (!form) {
    return <div>Form not found</div>;
  }
  const [formData, setFormData] = useState(
    form.data.fields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {})
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="title">{form.data.title}</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit}>
        {form.data.fields.map((field, index) => (
          <div key={index} className="input-group">
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                placeholder={field.label}
                value={formData[field.name]}
                onChange={handleChange}
              ></textarea>
            ) : field.type === 'select' ? (
              <select
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              >
                {field.options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                placeholder={field.label}
                value={formData[field.name]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
