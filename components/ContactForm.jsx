import { Field, Form, Formik } from "formik";
import React, { createRef, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { string, object } from "yup";
import Turnstile from "react-turnstile";
import { AnimatePresence, motion } from "framer-motion";

const recaptchaSiteKey = "0x4AAAAAAASWjq6CIorruB2B";

const contactSchema = object().shape({
  name: string()
    .min(2, "too short!")
    .max(50, "too long!")
    .required("required!"),
  subject: string()
    .min(5, "too short!")
    .max(50, "too long!")
    .required("required!"),
  message: string()
    .min(10, "too short!")
    .max(1000, "too long!")
    .required("required!"),
});

export default function ContactForm() {
  // everyone is a bot until verified
  const [isBot, setIsBot] = useState(true);

  const handleSubmit = async (values, { resetForm }) => {
    const { email, name, message, subject } = values;

    let data = {
      name,
      email,
      message,
      subject,
    };

    const sendingMessagePromise = fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      // console.log("Response received");
      if (res.status === 200) {
        // console.log("Response succeeded!");
        // clear form
        resetForm();
      }
    });

    // notifiy user that message is being sent with "Sending..."
    // toast.promise(sendingMessagePromise, {
    //   pending: "Sending your message...",
    //   success: "Message sent!",
    //   error: "Message could not be sent! Please try again later.",
    // });

    return sendingMessagePromise;
  };
  return (
    <>
      {/* <ToastContainer theme='dark' /> */}
      {/* Same as */}
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        {({ errors, touched, dirty, isValid, isSubmitting }) => {
          const submitButtonEnabled = !(
            isSubmitting ||
            !(dirty && isValid) ||
            (isBot && isBot !== null)
          );

          return (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "calc(20px + 2vh)",
                justifyContent: "space-evenly",
                height: "100%",
                width: "300px",
                maxWidth: "100vw",
              }}
            >
              <Field
                className='small-text text-black'
                name='name'
                type='text'
                placeholder='Name'
                disabled={isSubmitting}
                style={{ fontFamily: "inherit" }}
              />
              {errors.name && touched.name && (
                <div className='error-text tiny-text'>{errors.name}</div>
              )}
              <Field
                className='small-text text-black'
                name='email'
                type='email'
                disabled={isSubmitting}
                placeholder='johnsmith@example.com'
                style={{ fontFamily: "inherit" }}
              />
              {errors.email && touched.email && (
                <div className='error-text tiny-text'>{errors.email}</div>
              )}
              <Field
                className='small-text text-black'
                name='subject'
                type='text'
                disabled={isSubmitting}
                placeholder='Subject'
                style={{ fontFamily: "inherit" }}
              />
              {errors.subject && touched.subject && (
                <div className='error-text tiny-text'>{errors.subject}</div>
              )}
              <Field
                className='small-text text-black'
                name='message'
                as='textarea'
                disabled={isSubmitting}
                placeholder='Your message here...'
                style={{ fontFamily: "inherit" }}
              />
              {errors.message && touched.message && (
                <div className='error-text tiny-text'>{errors.message}</div>
              )}
              <AnimatePresence>
                {dirty && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Turnstile
                      sitekey={recaptchaSiteKey}
                      onVerify={(_token) => {
                        setIsBot(false);
                      }}
                      theme='dark'
                      fixedSize={true}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                className='has-bg-inverse'
                style={{
                  width: "50%",
                  minWidth: "12ch",
                  opacity: submitButtonEnabled ? 1 : 0.5,
                  cursor: submitButtonEnabled ? "pointer" : "not-allowed",
                  border: "2px solid gray",
                }}
                // (form not filled and valid) or (is bot)
                disabled={!submitButtonEnabled}
                type='submit'
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
