"use client";
import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Logo from "../../public/favicon.ico";
import Image from "next/image";

interface HeaderProps {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const navigations = [
    { english: "About me", japanese: "自己紹介", path: "#about" },
    { english: "Skills", japanese: "スキル", path: "#skills" },
    { english: "Projects", japanese: "プロジェクト", path: "#projects" },
    { english: "Contact", japanese: "お問い合わせ", path: "#contact" },
  ];
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeElement = document.querySelector("#home");
      if (homeElement) {
        const stickyPosition =
          homeElement.getBoundingClientRect().bottom + window.scrollY;

        if (window.scrollY >= stickyPosition) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    language === "english" ? setLanguage("japanese") : setLanguage("english");
  };

  return (
    <nav className={`z-40 absolute ${isSticky ? "sticky" : ""}`}>
      <div className="w-screen flex items-center justify-between py-5 px-5 md:px-10">
        <a href="/" className="cursor-pointer hover:scale-105">
          <Image
            src={Logo}
            alt="Logo"
            height={32}
            priority={false}
            className="animated"
          />
        </a>

        <button className="md:hidden" onClick={() => setIsNavOpen(true)}>
          {!isNavOpen && <IoMdMenu size={24} />}
        </button>

        {/* パソコン用 */}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-row items-center gap-8">
            {navigations.map((nav) => (
              <li key={nav.english} className="animated underline-animation">
                <a
                  href={nav.path}
                  className="text-primary-light hover:text-primary"
                >
                  {language === "english" ? nav.english : nav.japanese}
                </a>
              </li>
            ))}
            <li
              className="flex items-center gap-1 text-primary-light hover:text-primary cursor-pointer animated"
              onClick={toggleLanguage}
            >
              <span> {language === "english" ? "日本語" : "English"}</span>
              <Image
                src={`https://flagcdn.com/${
                  language === "english" ? "jp" : "ca"
                }.svg`}
                alt={language === "english" ? "Japan" : "Canada"}
                className="w-[30px] border"
              />
            </li>
          </ul>
        </div>
      </div>

      {/* スマホ用 */}
      {isNavOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsNavOpen(false)}
          ></div>
          <div
            className={`h-screen fixed top-0 right-0 md:hidden w-2/3 bg-gray-100 z-50 animate-slideIn`}
          >
            <div className="flex justify-between p-5">
              <div className="font-semibold">
                {language === "english" ? "Menu" : "メニュー"}
              </div>
              <IoMdClose size={24} onClick={() => setIsNavOpen(false)} />
            </div>

            <ul className="flex flex-col justify-center">
              {navigations.map((nav, index) => (
                <li
                  key={nav.english}
                  className={`w-full py-4 px-7 text-gray-500 hover:text-gray-900 text-sm animate-fadeIn`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a href={nav.path}>
                    {language === "english" ? nav.english : nav.japanese}
                  </a>
                </li>
              ))}
              <li
                className="flex items-center gap-1 w-full py-4 px-7 text-sm text-gray-500 hover:text-gray-900 cursor-pointer"
                onClick={() =>
                  setLanguage(language === "english" ? "japanese" : "english")
                }
              >
                <span> {language === "english" ? "日本語" : "English"}</span>
                <Image
                  src={`https://flagcdn.com/${
                    language === "english" ? "jp" : "ca"
                  }.svg`}
                  alt={language === "english" ? "Japan" : "Canada"}
                  className="w-[30px] border"
                />
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
