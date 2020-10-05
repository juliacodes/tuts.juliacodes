import React, { useState } from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { FormCont } from "../theming/styles"

const CustomForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(false)
  const [errorAnim, setErrorAnim] = useState(false)

  let email

  const submit = () => {
    setError(false)
    email &&
      !email.value.includes("@") &&
      !email.value.includes(".") &&
      setError(true) &&
      setErrorAnim(true)

    email &&
      email.value.indexOf("@") > 0 &&
      onValidated({
        EMAIL: email.value,
      })
  }
  return (
    <>
      <FormCont>
        <div
          className={
            status === "error" ? "error-icon" : error ? "error-icon" : null
          }
          id="form"
        >
          <input
            className={
              status === "error"
                ? ["form-error"(errorAnim ? " error-anim" : "")]
                : error
                ? ["form-error"(errorAnim ? " error-anim" : "")]
                : null
            }
            onAnimationEnd={() => setErrorAnim(false)}
            ref={node => (email = node)}
            type="text"
            id="email"
            placeholder="Your Email Address"
          />
          <button
            className={status === "success" ? "sent" : null}
            onClick={submit}
            id="submit"
          ></button>
        </div>
      </FormCont>
      {status === "sending" && (
        <div style={{ color: "#24B0FF", textAlign: "center", paddingTop: 20 }}>
          sending...
        </div>
      )}
      {status === "error" && (
        <div style={{ color: "#e4453a", textAlign: "center", paddingTop: 20 }}>
          {message.split(" ").slice(0, 4).join(" ")}
        </div>
      )}
      {status === "success" && !error && (
        <div style={{ color: "#24B0FF", textAlign: "center", paddingTop: 20 }}>
          Subscribed!
        </div>
      )}
      {error && (
        <div style={{ color: "#e4453a", textAlign: "center", paddingTop: 20 }}>
          Enter a valid email
        </div>
      )}
    </>
  )
}

const Form = () => {
  return (
    <MailchimpSubscribe
      url={process.env.REACT_APP_MAILCHIMP_URL}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  )
}
export default Form
