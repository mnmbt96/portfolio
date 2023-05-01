import React from "react";
import "../../style/about.css";

const AboutContentsJapanese = () => {
  return (
    <div className="about-contents">
      <p>
        こんにちは。ポートフォリオサイトをご覧いただきありがとうございます。
      </p>
      <p>
        ソフトウェア開発者の<strong>馬袋真奈美</strong>
        と申します。バンクーバのカレッジでWebアプリケーション開発の勉強をしています。
      </p>
      <p>
        <a
          className="udemy-link"
          href="https://www.udemy.com/course/the-complete-javascript-course/"
        >
          JavaScriptのマスターコース
        </a>
        を受講し、Reactなどのフレームワークを使用したフロントエンド開発に力を入れています。
      </p>
      <p>
        常に新しい技術やツールを学び、最新の開発手法を取り入れたいという思いで一生懸命勉強しています。柔軟で協力的なチームプレイヤーとして、プロジェクトの成功に貢献していきたいです。
      </p>
    </div>
  );
};

export default AboutContentsJapanese;
