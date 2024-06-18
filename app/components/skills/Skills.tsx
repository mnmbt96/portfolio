import React from "react";
import SkillCard from "./SkillCard";
import Section from "../Section";
import ReactIcon from "../../../public/images/React.png";
import NodeIcon from "../../../public/images/nodejs.png";
import JsIcon from "../../../public/images/JavaScript.png";
import NextIcon from "../../../public/images/nextjs.png";
import { Skill } from "@/app/types/types";

const Skills = ({ language }: { language: string }) => {
  const skills: Skill[] = [
    {
      image: ReactIcon,
      techStack: "React",
      japaneseDescription:
        "React(TypeScript)を使用したフロントエンド開発の経験があり、Reduxを使用したグローバルな状態管理、ReactRouterを使用したルーティングの実装、APIと連携してデータを取得・更新する非同期処理、等一通りの開発ができます。再利用可能で拡張性の高いコンポーネントやカスタムフックを設計・開発し、コードの一貫性とメンテナンス性を向上させられるよう心がけています。",
      englishDescription:
        "I have experience in frontend development using React (TypeScript), including global state management with Redux, implementing routing with ReactRouter, and asynchronous processing for fetching and updating data in conjunction with APIs. I am capable of designing and developing reusable and highly extensible components and custom hooks.",
    },
    {
      image: NextIcon,
      techStack: "Next.js",
      japaneseDescription:
        "Single Page Application（SPA）やServer Side Rendering（SSR）を実装し、ページ読み込み速度やユーザーエクスペリエンス（UX）を意識した開発ができます。TypeScriptを併用することで、型安全なコードを書き、コードの保守性と信頼性を向上させています。また、Tailwind CSSを使用して効率的にスタイリングを行い、モダンなデザインを実装することが得意です。",
      englishDescription:
        "I have experience in implementing Single Page Applications (SPA) and Server Side Rendering (SSR), focusing on improving page load speed and user experience (UX). By utilizing TypeScript, I write type-safe code, enhancing the maintainability and reliability of the codebase. Additionally, I use Tailwind CSS to efficiently style applications, excelling at implementing modern designs.",
    },
    {
      image: NodeIcon,
      techStack: "Node.js",
      japaneseDescription:
        "Node.js、Express、MongoDBを使用したサーバーサイドの開発の経験があります。Expressを使用してルーティングを管理し、ミドルウェアをカスタマイズしたり、CRUDオペレーション等の基本的な動作をデータベースやフロントエンドと連携させることができます。",
      englishDescription:
        "I have experience in server-side development using Node.js, Express, and MongoDB. I manage routing with Express, customize middleware, and can integrate basic operations like CRUD (Create, Read, Update, Delete) between the database and the front-end.",
    },
    {
      image: JsIcon,
      techStack: "JavaScript",
      japaneseDescription:
        "フロントエンド開発では、ReactやNext.jsを利用する頻度が多いですが、JavaScriptの70時間にも及ぶマスターコースを受講したことで、基礎が身につき自信を持ってReactやNext.js、Node.js等のライブラリを扱うことができています。基本的な言語の仕組みから、DOM、OOP、非同期処理等について実践的に学びました。",
      englishDescription:
        "I use React and Next.js frequently, but after completing a comprehensive 70-hour JavaScript Master Course, I have gained a strong foundation and confidence in handling libraries like React, Next.js and Node.js. I learned practical aspects of the techStack, starting from fundamental concepts, including DOM manipulation, Object-Oriented Programming (OOP), and asynchronous processing.",
    },
  ];

  return (
    <Section>
      <section
        id="skills"
        className="px-2 sm:px-10 md:px-16 xl:px-56 py-5 md:pt-20 section"
      >
        <h2 className="text-2xl tracking-wider font-semibold pb-3 text-center md:text-left">
          {language === "english" ? "Skills" : "スキル"}
        </h2>
        <div className="grid md:grid-cols-2 gap-2 md:gap-4">
          {skills.map((skill) => (
            <SkillCard
              skill={skill}
              language={language}
              key={skill.techStack}
            />
          ))}
        </div>
      </section>
    </Section>
  );
};

export default Skills;
