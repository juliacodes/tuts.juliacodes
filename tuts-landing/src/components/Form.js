import React, { useState, useEffect } from "react"
// import MailchimpSubscribe from "react-mailchimp-subscribe"
import { FormCont, Button } from "../theming/styles"
import addToMailchimp from "gatsby-plugin-mailchimp"
const Form = () => {
  const [error, setError] = useState(false)
  const [errorAnim, setErrorAnim] = useState(false)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState({
    result: "is this showing up",
    msg: "",
  })

  const handleSubmit = () => {
    setError(false)
    setTimeout(() => {
      setErrorAnim(false)
    }, 1000)

    if (
      (email && !email.includes("@") && !email.includes(".")) ||
      email.length < 1
    ) {
      setError(true)
      setErrorAnim(true)
      setStatus({
        ...status,
        result: "error",
        msg: "Please enter a valid address",
      })
    }

    if (email && email.indexOf("@") > 0) {
      addToMailchimp(email)
        .then(data => {
          setStatus({
            ...status,
            result: `${data.result}`,
            msg: `${data.msg}`,
          })
        })
        .catch(() => {
          console.log("uh oh")
        })
    }
  }

  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  return (
    <>
      <FormCont>
        <form
          onSubmit={e => {
            e.preventDefault()
            {
              handleSubmit()
            }
          }}
          className={
            status === "error" ? "error-icon" : error ? "error-icon" : null
          }
          id="form"
        >
          <input
            className={
              status === "error"
                ? [errorAnim ? "error-anim" : "form-error"]
                : error
                ? [errorAnim ? "error-anim form-error" : "form-error"]
                : null
            }
            type="text"
            id="email"
            placeholder="Your Email Address"
            onChange={handleEmailChange}
          />
          <Button
            className={status === "success" ? "sent" : null}
            type="submit"
            id="submit"
          ></Button>
        </form>
        {status.result === "sending" && (
          <div
            style={{ color: "#24B0FF", textAlign: "center", paddingTop: 20 }}
          >
            sending...
          </div>
        )}
        {status.result === "error" && (
          <div
            style={{ color: "#e4453a", textAlign: "center", paddingTop: 20 }}
            dangerouslySetInnerHTML={{ __html: status.msg }}
          />
        )}
        {status.result === "success" && (
          <div
            style={{ color: "#24B0FF", textAlign: "center", paddingTop: 20 }}
            dangerouslySetInnerHTML={{ __html: status.msg }}
          />
        )}
      </FormCont>
    </>
  )
}

export default Form
