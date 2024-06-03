// App.js
import React from 'react';
import { Formik, Field, FieldArray, Form } from 'formik';
import * as Yup from 'yup';
import './App.css';

// Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  age: Yup.number().required('Required').positive().integer(),
  employment: Yup.string().oneOf(['fullTime', 'partTime', 'freelancer']).required('Required'),
  propertyDetails: Yup.array().of(
    Yup.object().shape({
      RegId: Yup.string().required('Required'),
      Location: Yup.string().required('Required'),
    })
  ),
});

// Initial Values
const initialValues = {
  name: '',
  age: '',
  employment: '',
  propertyDetails: [{ RegId: '', Location: '' }],
};

// Generic Text Input Component
const TextInput = ({ field, form: { touched, errors }, ...props }) => (
  <div className="form-group">
    <input className="form-control" {...field} {...props} />
    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
);

// Generic Select Component
const SelectInput = ({ field, form: { touched, errors }, ...props }) => (
  <div className="form-group">
    <select className="form-control" {...field} {...props} />
    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
);

const App = () => {
  return (
    <div className="App">
      <h1>Formik Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form className="form-container">
            <div>
              <label className="form-label">Name</label>
              <Field name="name" component={TextInput} placeholder="Name" />
            </div>
            <div>
              <label className="form-label">Age</label>
              <Field name="age" component={TextInput} placeholder="Age" type="number" />
            </div>
            <div>
              <label className="form-label">Employment</label>
              <Field name="employment" component={SelectInput}>
                <option value="">Select Employment</option>
                <option value="fullTime">Full Time</option>
                <option value="partTime">Part Time</option>
                <option value="freelancer">Freelancer</option>
              </Field>
            </div>
            <FieldArray name="propertyDetails">
              {({ push, remove }) => (
                <div className="property-section">
                  {values.propertyDetails.map((_, index) => (
                    <div key={index} className="property-group">
                      <h4>Property {index + 1}</h4>
                      <div>
                        <label className="form-label">RegId</label>
                        <Field name={`propertyDetails.${index}.RegId`} component={TextInput} placeholder="RegId" />
                      </div>
                      <div>
                        <label className="form-label">Location</label>
                        <Field name={`propertyDetails.${index}.Location`} component={TextInput} placeholder="Location" />
                      </div>
                      {values.propertyDetails.length > 1 && (
                        <button type="button" className="remove-btn" onClick={() => remove(index)}>Delete Property</button>
                      )}
                    </div>
                  ))}
                  <button type="button" className="add-btn" onClick={() => push({ RegId: '', Location: '' })}>
                    Add One More Property
                  </button>
                </div>
              )}
            </FieldArray>
            <button type="submit" className="submit-btn">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
