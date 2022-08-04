import React from "react";
import { Formik, Field, Form } from "formik";

const base_url = "";
export default function SignUpPage() {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    /*body: raw,*/
    redirect: "follow",
  };
  return (
    <div style={{ width: "486px", height: "475px" }}>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
          const res = await fetch(`${base_url}/registration`, requestOptions)
            .then((res) => res.text())
            .then((res) => console.log(res));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="login">Login</label>
            <Field name="login" />
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" placeholder="Jane" />
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" placeholder="Doe" />
            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="jane@acme.com" type="email" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
