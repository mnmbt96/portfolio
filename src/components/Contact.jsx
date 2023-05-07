import React, { useState, useEffect } from "react";
import Section from "./Section";
import { useForm, ValidationError } from "@formspree/react";
import "../../src/style/contact.css";
import "../../src/style/style.css";

const Contact = ({ language }) => {
  const [state, handleSubmit] = useForm("mpzebrzj");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setIsSubmitted(true);
      document.getElementById("contact-form").reset();
    }
  }, [state.succeeded]);

  const content = {
    en: "Feel free to contact me through this form or via email, Instagram, LinkedIn, or Facebook. \nI will get back to you!",
    ja: "ご質問等ございましたら、こちらのフォームまたはEメール、instagram、linkedin、facebookからお気軽にご連絡ください。",
  };

  return (
    <Section>
      <section id="contact" className="container">
        <h2 className="section-title">
          {language === "en" ? "Contact" : "お問い合せ"}
        </h2>
        <div className="contact-container">
          <p>{language === "en" ? content.en : content.ja}</p>
          <form
            id="contact-form"
            className="input-forms"
            onSubmit={handleSubmit}
          >
            <div className="input-area">
              <label htmlFor="name">
                {language === "en" ? "Name*" : "氏名*"}
              </label>
              <input id="name" type="text" name="name" required />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div className="input-area">
              <label htmlFor="email">
                {language === "en" ? "Email*" : "メールアドレス*"}
              </label>
              <input id="email" type="email" name="email" required />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            {/* message */}
            <div className="input-area">
              <label htmlFor="message">
                {language === "en" ? "Message" : "メッセージ"}
              </label>
              <textarea id="message" name="message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {isSubmitted && (
              <p className="submit-message">
                {language === "en"
                  ? "Thank you for your message!"
                  : "ご連絡ありがとうございます！"}
              </p>
            )}

            <button
              className="btn-submit"
              type="submit"
              disabled={state.submitting}
              // onClick={resetForm}
            >
              {language === "en" ? "Submit" : "送信"}
            </button>
          </form>
        </div>
      </section>
    </Section>
  );
};

export default Contact;
