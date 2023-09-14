import React, { useState, useEffect } from "react";
import Section from "./Section";
import { useForm, ValidationError } from "@formspree/react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";
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
    en: "Feel free to contact me.\nI will get back to you!",
    ja: "ご質問等ございましたら、お気軽にご連絡ください。",
  };

  return (
    <Section>
      <section id="contact" className="container">
        <h2 className="section-title">
          {language === "english" ? "Contact" : "お問い合せ"}
        </h2>
        <div className="contact-container">
          <p>{language === "english" ? content.en : content.ja}</p>
          <form
            id="contact-form"
            className="input-forms"
            onSubmit={handleSubmit}
          >
            <div className="input-area">
              <label htmlFor="name">
                {language === "english" ? "Name*" : "氏名*"}
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
                {language === "english" ? "Email*" : "メールアドレス*"}
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
                {language === "english" ? "Message" : "メッセージ"}
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
                {language === "english"
                  ? "Thank you for your message!"
                  : "ご連絡ありがとうございます！"}
              </p>
            )}

            <button
              className="btn-submit"
              type="submit"
              disabled={state.submitting}
            >
              {language === "english" ? "Submit" : "送信"}
            </button>
          </form>
          <div className="contact-icons">
            <a
              href="https://github.com/mnmbt96"
              target="_blank"
              className="icon-animated"
            >
              <AiOutlineGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/manami-batai-168593247/"
              target="_blank"
              className="icon-animated"
            >
              <AiFillLinkedin className="icon" />
            </a>

            <a
              href="https://www.instagram.com/mnmbt96/"
              target="_blank"
              className="icon-animated"
            >
              <AiOutlineInstagram className="icon" />
            </a>

            <a
              href="https://www.facebook.com/manami.batai"
              target="_blank"
              className="icon-animated"
            >
              <AiFillFacebook className="icon" />
            </a>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default Contact;
