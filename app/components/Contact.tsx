import React, { useState, useEffect } from "react";
import Section from "./Section";
import { useForm, ValidationError } from "@formspree/react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Contact = ({ language }: { language: string }) => {
  const [state, handleSubmit] = useForm("mpzebrzj");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setIsSubmitted(true);
      const form = document.getElementById("contact-form") as HTMLFormElement;
      if (form) {
        form.reset();
      }
    }
  }, [state.succeeded]);

  return (
    <Section>
      <section
        id="contact"
        className="text-primary px-2 sm:px-10 md:px-16 xl:px-56 py-5 md:pt-20 section"
      >
        <h2 className="text-2xl tracking-wider font-semibold pb-3 text-center md:text-left">
          {language === "english" ? "Contact" : "お問い合せ"}
        </h2>
        <div className="flex flex-col items-center">
          <p>
            {language === "english"
              ? "Feel free to contact me. I will get back to you!"
              : "ご質問等ございましたら、お気軽にご連絡ください。"}
          </p>

          {/* 名前 */}
          <form
            id="contact-form"
            className="grid gap-3 w-full my-5 px-5 md:px-10 xl:px-36"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label htmlFor="name">
                {language === "english" ? "Name*" : "名前*"}
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="border border-primary bg-white p-2 rounded-md focus:outline-none"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            {/* メールアドレス */}
            <div className="flex flex-col">
              <label htmlFor="email">
                {language === "english" ? "Email*" : "メールアドレス*"}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="border border-primary bg-white p-2 rounded-md focus:outline-none"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            {/* message */}
            <div className="flex flex-col">
              <label htmlFor="message">
                {language === "english" ? "Message" : "メッセージ"}
              </label>
              <textarea
                id="message"
                name="message"
                className="border border-primary bg-white p-2 rounded-md focus:outline-none"
              />
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

            <div className="text-center">
              <button
                className="py-2 px-8 bg-secondary text-white rounded-md mt-5 cursor-pointer hover:bg-secondary-light"
                type="submit"
                disabled={state.submitting}
              >
                {language === "english" ? "Submit" : "送信"}
              </button>
            </div>
          </form>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mnmbt96"
              target="_blank"
              className="hover:scale-105"
            >
              <AiOutlineGithub size={36} />
            </a>
            <a
              href="https://www.linkedin.com/in/manami-batai-168593247/"
              target="_blank"
              className="hover:scale-105"
            >
              <AiFillLinkedin size={36} />
            </a>

            <a
              href="https://www.instagram.com/mnmbt96/"
              target="_blank"
              className="hover:scale-105"
            >
              <AiOutlineInstagram size={36} />
            </a>

            <a
              href="https://www.facebook.com/manami.batai"
              target="_blank"
              className="hover:scale-105"
            >
              <AiFillFacebook size={36} />
            </a>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default Contact;
