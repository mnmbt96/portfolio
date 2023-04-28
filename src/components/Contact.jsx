import React from "react";
import Section from "./Section";
import { Form } from "react-bootstrap";
import "../../src/style/contact.css";
import "../../src/style/style.css";

const Contact = ({ language }) => {
  const content = {
    en: "Contact me through this form or via email, Instagram, LinkedIn, or Facebook. \nI will get back to you!",
    ja: "ご質問等ございましたら、こちらのフォームまたはEメール、instagram、linkedin、facebookからご連絡いただけます。",
  };

  return (
    <Section>
      <section id="contact" className="contact-container container">
        <h2 className="title" style={{ margin: "10rem 0 2rem 0rem" }}>
          {language === "en" ? "Contact" : "お問い合せ"}
        </h2>
        <p>{language === "en" ? content.en : content.ja}</p>
        <Form className="input-forms">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{language === "en" ? "Name" : "氏名"}</Form.Label>
            <Form.Control type="textarea" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              {language === "en" ? "Email" : "メールアドレス"}
            </Form.Label>
            <Form.Control type="email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              {language === "en" ? "Message" : "メッセージ"}
            </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <button className="btn-submit">
          {language === "en" ? "Submit" : "送信"}
        </button>
      </section>
    </Section>
  );
};

export default Contact;
