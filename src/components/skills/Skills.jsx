import React from "react";
import Skill from "./Skill";
import Section from "../Section";
import JsIcon from "../../assets/images/JavaScript.png";
import ReactIcon from "../../assets/images/React.png";
import NodeIcon from "../../assets/images/nodejs.png";
import HtmlCssIcon from "../../assets/images/HtmlCss.png";
import "../../style/skills.css";
import "../../style/style.css";

const Skills = ({ language }) => {
  const skills = [
    {
      image: ReactIcon,
      language: "React",
      japaneseDescription:
        "React(TypeScript)でのフロントエンド開発の経験があり、Reduxを使用した状態管理、ReactRouterを使用したルーティングの実装、APIとの連携やデータの非同期取得等ができます。直近では企業のボランティアに参加し、ユーザー情報の登録やログイン機能の実装、WebSocketを利用したリアルタイムデータの送受信ができる機能等を実装しました。",
      englishDescription:
        "I have experience in front-end development with React (TypeScript) and can handle state management using Redux, implement routing using ReactRouter, and work with APIs for asynchronous data retrieval. Most recently, I participated in a volunteer project at a company where I implemented user registration, login functionality, and real-time data transmission using WebSocket, among other features.",
    },
    {
      image: NodeIcon,
      language: "Node.js",
      japaneseDescription:
        "Node.js、Express、MongoDBを使用したサーバーサイドの開発の経験があります。Expressを使用してルーティングを管理し、ミドルウェアをカスタマイズしたり、CRUDオペレーション等の基本的な動作をデータベースやフロントエンドと連携させることができます。",
      englishDescription:
        "I have experience in server-side development using Node.js, Express, and MongoDB. I manage routing with Express, customize middleware, and can integrate basic operations like CRUD (Create, Read, Update, Delete) between the database and the front-end.",
    },
    {
      image: JsIcon,
      language: "JavaScript",
      japaneseDescription:
        "Reactを利用する頻度が多いですが、JavaScriptの70時間にも及ぶマスターコースを受講したことで、基礎が身につき自信を持ってReactやNode.js等のライブラリを扱うことができています。基本的な言語の仕組みから、DOM、OOP、非同期処理等について実践的に学びました。",
      englishDescription:
        "I use React frequently, but after completing a comprehensive 70-hour JavaScript Master Course, I have gained a strong foundation and confidence in handling libraries like React and Node.js. I learned practical aspects of the language, starting from fundamental concepts, including DOM manipulation, Object-Oriented Programming (OOP), and asynchronous processing.",
    },
    {
      image: HtmlCssIcon,
      language: "HTML/CSS",
      japaneseDescription:
        "HTML、CSS(SCSS)を使ったLPやSPA制作の経験があります。Bootstrapを活用することで、素早くモバイルフレンドリーなデザインを実現することができます。また、Reactを使用してフロントエンドを構築する際にMuiやTailwindCSSを活用した経験もあります。",
      englishDescription:
        "I have experience in creating Landing Pages (LP) and Single Page Applications (SPA) using HTML and CSS (SCSS). I can quickly achieve mobile-friendly designs by utilizing Bootstrap. Additionally, I have experience using Mui and TailwindCSS when building front-end applications with React.",
    },
  ];

  return (
    <Section>
      <section id="skills" className="container">
        <h2 className="section-title">
          {language === "english" ? "Skills" : "スキル"}
        </h2>
        <div className="skills-container">
          {skills.map((skill) => (
            <Skill skill={skill} language={language} key={skill.language} />
          ))}
        </div>
      </section>
    </Section>
  );
};

export default Skills;
