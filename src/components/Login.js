import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";


const formSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Enter password"),
});

const Login = () => {
  const navigate=useNavigate();
  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "/users/login",
      data: values,
    })
      .then((response) => {
        //console.log(`response is:${JSON.stringify(response,null,2)}`);
        console.log(`token is:${response.data.token}`)
        actions.setSubmitting(true);
        actions.resetForm();
        localStorage.setItem('regtoken', JSON.stringify(response.data.token));
          localStorage.setItem(
            'regtoken user',
            JSON.stringify(response.data.userDetails)
          );
        if(response.data.token){
          navigate("/home");
        }
      })
      .catch((error) => {
        actions.setSubmitting(false);
      });
  };
  return (
    <div class="login">
      <h1>Welcome to Dairy Application</h1>
      <h2>Login Form</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleOnSubmit}
        validationSchema={formSchema}
      >
        {({ isSubmitting }) => (
          <Form id="login">
            <label htmlFor="email">Email:</label>
            <Field id="email" type="email" name="email" />
            <ErrorMessage name="email"/>
            <label htmlFor="password">Password:</label>
            <Field id="password" name="password" type="text"/>
            <ErrorMessage name="password"/>
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
            <p>If You dont have account Click on signup button</p>
            <p><Link to='/signup'><button>Signup</button></Link></p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;