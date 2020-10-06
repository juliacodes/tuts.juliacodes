import React, { useState } from "react"
// import MailchimpSubscribe from "react-mailchimp-subscribe"
import { FormCont, Button } from "../theming/styles"
import addToMailchimp from "gatsby-plugin-mailchimp"
const Form = () => {
  // const [error, setError] = useState(false)
  // const [errorAnim, setErrorAnim] = useState(false)

  // let email

  // const submit = () => {
  //   setError(false)
  //   setTimeout(() => {
  //     setErrorAnim(false)
  //   }, 1000)

  //   if (email && !email.value.includes("@") && !email.value.includes(".")) {
  //     setError(true)
  //     setErrorAnim(true)
  //   }

  //   if (email && email.value.indexOf("@") > 0) {
  //     onValidated({
  //       EMAIL: email.value,
  //     })
  //     console.log("tapped")
  //   }
  // }
  const [email, setEmail] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    addToMailchimp(email).then(data => {
      alert(data.result)
    })
    // .catch((error: Error) => {
    //   // Errors in here are client side
    //   // Mailchimp always returns a 200
    // })
  }

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value)
    console.log(email)
  }

  return (
    <>
      <FormCont>
        <form
          onSubmit={handleSubmit}
          // className={
          //   status === "error" ? "error-icon" : error ? "error-icon" : null
          // }
          id="form"
        >
          <input
            // className={
            //   status === "error"
            //     ? [errorAnim ? "error-anim" : "form-error"]
            //     : error
            //     ? [errorAnim ? "error-anim form-error" : "form-error"]
            //     : null
            // }
            type="text"
            id="email"
            placeholder="Your Email Address"
            onChange={handleEmailChange}
          />
          <Button
            // className={status === "success" ? "sent" : null}
            // onClick={submit}
            type="submit"
            id="submit"
          ></Button>
        </form>
      </FormCont>
    </>
  )
}

export default Form
