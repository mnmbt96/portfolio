import { Project } from "@/app/types/types";
import Waccanet from "../../../public/images/projects/waccanet.png";
import ECommerceApp from "../../../public/images/projects/e-commerce-app.png";
import TraveLog from "../../../public/images/projects/travelog.png";
import TodoApp from "../../../public/images/projects/redux-todo-app.png";
import WeatherApp from "../../../public/images/projects/react-weather-app.png";
import UdemyProject from "../../../public/images/projects/udemy-js.png";

import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGoogleauthenticator } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";

export const projects: Project[] = [
  {
    id: "5",
    englishTitle: "WACCA NET",
    japaneseTitle: "わっかネット",
    year: "2023-2024",
    image: Waccanet,
    englishDescription:
      "WACCA NET is an information site for Japanese people living in Canada. The current platform for house hunting in Vancouver is quite outdated, making it time-consuming to find suitable properties. Many students have faced issues with fraudulent or illegal listings by landlords. To solve this problem, we provide a platform where Japanese people can easily and safely find properties that meet their ideal conditions.",
    japaneseDescription:
      "わっかネットは、カナダに住む日本人のための情報サイトです。現在のバンクーバーの家探しのプラットフォームは、かなり古く自分に合う物件を探すのに時間がかかること、詐欺や違法行為を繰り返すオーナーの物件も多く掲載されていることに、多くの留学生が問題を感じていました。その問題を解決すべく、日本人が楽に安全に理想の条件で家探しができるプラットフォームを提供しています。",
    englishAchievements:
      "For the UI, we prioritize ease of use for Japanese students, continuously incorporating feedback from friends and Japanese individuals we meet at meetups. Although I faced challenges with using Docker, posting images, converting and compressing HEIC (iPhone images), and implementing filter functions, I persevered and learned to overcome them. We successfully partnered with two property agencies to enrich our property listings. Additionally, with the support of study abroad agents and influencers, we achieved 10,000 new user visits within three months.",
    japaneseAchievements:
      "UIについては、留学生の使いやすさを最重要視し、友人やミートアップで出会った日本人からいただいたフィードバックを日々反映しています。Dockerの使い方や画像ポスト、HEIC（iPhone画像）の変換圧縮、フィルター機能等につまずくことも多くありましたが、根気よく学びながら解決してきました。物件仲介会社2社と連携し、物件情報を充実させることに成功しました。また、留学エージェントやインフルエンサーの協力で、3ヶ月で新規ユーザー訪問数が10,000人に到達しました。",
    login: false,
    techStach: [
      { name: "Next.js", icon: RiNextjsFill },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "Docker", icon: FaDocker },
      { name: "TailwindCSS", icon: RiTailwindCssFill },
    ],
    url: "https://www.waccanet.com",
  },
  {
    id: "4",
    englishTitle: "TraveLog",
    japaneseTitle: "TraveLog",
    year: "2023",
    image: TraveLog,
    englishDescription:
      "I've developed the blog application using the MERN stack. For user authentication, I implemented not only input-based login but also integrated Google authentication. I faced challenges with asynchronous updates, especially when using the backend, but I successfully resolved this issue by utilizing Redux to update the frontend.",
    japaneseDescription:
      "MERNスタックを使用してブログアプリを作成しました。バックエンドでCRUDオペレーションを一通り実装し、それをフロントエンドに反映させる練習として作成しました。ログイン機能、検索機能、お気に入り機能、コメント機能も実装しており、本格的なサイトとなっています。",
    englishAchievements:
      "During login, I implemented not only input-based authentication but also Google Authentication. I also learned how to manage login status using JWT. Features like favorites and comments needed to be reflected instantly on the screen, which posed challenges with asynchronous processing. I faced issues where updates weren't reflected without refreshing the page, but I resolved this by using Redux to update the frontend.",
    japaneseAchievements:
      "ログイン時には、入力による認証に加えてGoogle Authenticationも導入しました。また、JWTを使用してログイン状態を管理する方法を学びました。お気に入りやコメントなど、画面上で即座に反映される必要がある機能では、非同期処理に苦労しました。リフレッシュしないと更新が反映されない問題にも直面しましたが、Reduxを使ってフロントエンドを更新することで解決することができました。",
    login: true,
    loginUser: [{ user: "Email: test1@test.com", password: "Password: 111" }],
    techStach: [
      { name: "React", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Google Authenticator", icon: SiGoogleauthenticator },
      { name: "Material UI", icon: SiMui },
    ],
    url: "https://mern-crud-app-client.vercel.app/posts",
    github: "https://github.com/mnmbt96/mern-crud-app",
  },
  {
    id: "3",
    englishTitle: "Todo App",
    japaneseTitle: "Todoアプリ",
    year: "2023",
    image: TodoApp,
    englishDescription:
      "I created a Todo app using Redux to master CRUD operations. It allows adding, deleting, and editing Todos, with all state management handled through Redux. Additionally, it can display Todos based on their progress.",
    japaneseDescription:
      "Reduxを使用してCRUDオペレーションを使いこなすために、Todoアプリを作成しました。Todoの追加、削除、編集が可能で、すべての状態管理はReduxによって行われています。さらに、進捗度合いに応じてTodoを表示することもできます。",
    englishAchievements:
      "To organize Todos based on their progress, I used Redux to manage two separate arrays for all Todos and those displayed. Through this development, I deepened my understanding not only of how to use Redux but also of array methods.",
    japaneseAchievements:
      "進捗度合いごとにTodoを整理するために、Reduxを使用してTodoの配列を、すべてのTodo用と表示用に分けて管理しています。今回の開発を通じて、Reduxの使用方法だけでなく、配列のメソッドに対する理解がさらに深まりました。",
    login: false,
    techStach: [
      { name: "React", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
    url: "https://mnmbt96-redux-todo-app.netlify.app",
    github: "https://github.com/mnmbt96/redux-todo-app",
  },
  {
    id: "2",
    englishTitle: "Weather App",
    japaneseTitle: "天気アプリ",
    year: "2023",
    image: WeatherApp,
    englishDescription:
      "I created a weather application using React to practice fetching API data and displaying it on the screen. It retrieves current weather and forecast data from the OpenWeatherAPI. Additionally, I implemented features such as city search, geolocation retrieval, and switching between Celsius and Fahrenheit.",
    japaneseDescription:
      "Reactを使用してAPIデータを取得し、画面に反映させる練習として天気アプリを作成しました。OpenWeatherAPIから現在の天候や予報データを取得しています。また、都市の検索機能や現在地の取得、摂氏と華氏の切り替え機能も実装しました。",
    englishAchievements:
      "I implemented sidebar toggling and responsive design using React state management without relying on CSS frameworks from scratch. Since the sidebar and main components require different amounts of information, I focused on organizing the data received from the API so that each component receives only the necessary information. This practical approach allowed me to learn React usage and data restructuring effectively.",
    japaneseAchievements:
      "サイドバーの開閉やレスポンシブ対応をReactのステート管理で行うために、CSSのフレームワークを使用せずに一から実装しました。サイドバーとメインのコンポーネントでは表示する情報の量が異なるため、APIから受け取った情報を各コンポーネントに必要な部分のみ渡せるように整理することに力を入れました。この開発を通して、Reactの使用方法やデータの構造化について実践的に学ぶことができました。",
    login: false,
    techStach: [
      { name: "React", icon: FaReact },
      { name: "SCSS", icon: FaSass },
    ],
    url: "https://mnmbt96-react-weather-app.netlify.app/",
    github: "https://github.com/mnmbt96/react-weather-app",
  },
  {
    id: "1",
    englishTitle: "E-Commerce",
    japaneseTitle: "イーコマースサイト",
    year: "2022",
    image: ECommerceApp,
    englishDescription:
      "I created an E-Commerce app in JavaScript to deepen my understanding of DOM manipulation and asynchronous processing. The product data is fetched from the Fake Store API. Using JavaScript event listeners, I implemented a series of actions such as adding items to the cart, adjusting quantities within the cart, deleting items, and completing purchases.",
    japaneseDescription:
      "JavaScriptでDOM操作と非同期処理の理解を深めるために、Eコマースアプリを作成しました。商品のデータはFake Store APIからフェッチしています。商品をカートに追加し、カート内で数量を増減したり、商品を削除したり、購入手続きを完了する一連の流れを、JavaScriptのイベントリスナーで実装しました。",
    englishAchievements:
      "As I created my first feature-rich web application, I faced considerable challenges with every aspect of its functionality. To display the contents of the cart, I managed visibility by assigning the class name 'hidden' for toggling display. Managing individual item quantities proved particularly difficult. I spent time devising a method to assign unique classes using item IDs for each product, allowing me to effectively handle quantity management. Implementing the entire process from fetching product data through an API to completing purchases, all while researching and coding independently, significantly deepened my understanding of JavaScript.",
    japaneseAchievements:
      "初めて機能のあるウェブアプリを作成したので、すべての機能でかなり苦戦しました。カートの中身を表示する際には、'hidden' というクラス名を付与して、表示と非表示の管理を行いました。特に苦労したのは、商品の数量を個別に管理する部分でした。商品ごとに商品IDを使用して固有のクラスを付与し、それを利用して数量を管理する方法を考えるのに時間がかかりました。APIで商品データをフェッチするところから購入までの一連の流れを、調べながら自力で実装したことで、JavaScriptの理解が深まりました。",
    login: false,
    techStach: [
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "HTML", icon: FaHtml5 },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
    url: "https://e-commerce-website-taupe.vercel.app/",
    github: "https://github.com/mnmbt96/E-Commerce-Website",
  },
  {
    id: "0",
    englishTitle: "Udemy Projects",
    japaneseTitle: "Udemyプロジェクト",
    year: "2022-2023",
    image: UdemyProject,
    englishDescription:
      "I've completed a JavaScript course on Udemy. I learned essential knowledge about JavaScript, including its basic language mechanics, DOM manipulation, object-oriented programming, and asynchronous processing.",
    japaneseDescription:
      "UdemyでJavaScriptの講座を受講しました。基本的な言語の仕組みから、DOM操作、オブジェクト指向プログラミング、非同期処理などを学び、JavaScriptの使い方を一通り習得することができました。",
    englishAchievements:
      "In this course, under the guidance of the instructor, I had the opportunity to implement various web applications and simple games. I learned how to start projects and write practical code. Taking this course with a thorough understanding has provided me with a solid foundation for working with frameworks like React.",
    japaneseAchievements:
      "この講座では、インストラクターの指導のもとで、さまざまなウェブアプリや簡単なゲームなどの機能を実装する機会もありました。その過程でプロジェクトの始め方や実戦的なコードの書き方についても学ぶことができました。この講座をしっかりと理解しながら受講したことは、Reactなどのフレームワークを扱う上での基礎となっています。",
    login: true,
    loginUser: [
      { user: "user: js", password: "PIN: 111" },
      { user: "user: jd", password: "PIN: 222" },
    ],
    techStach: [
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
    url: "https://www.udemy.com/course/the-complete-javascript-course/",
    github: "https://github.com/jonasschmedtmann/complete-javascript-course",
    projectUrls: [
      {
        name: "Guess My Number",
        url: "https://mnmbt96-guess-my-number.netlify.app/",
      },
      { name: "Pig Game", url: "https://mnmbt96-pig-game.netlify.app/" },
      { name: "Bank App", url: "https://mnmbt96-bank-app.netlify.app/" },
      {
        name: "Bank LP",
        url: "https://mnmbt96-bank-landingpage.netlify.app/",
      },
      {
        name: "Workout App",
        url: "https://mnmbt96-workout.netlify.app/",
      },
      { name: "Recipe App", url: "https://forkify-v2.netlify.app/" },
    ],
  },
];
