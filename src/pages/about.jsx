import { Header } from "@/components/header";
import { ScrollContext } from "@/pages/_app";
import { useContext, useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BookIcon from "@mui/icons-material/Book";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

export default function About() {
  const scrollFadeIn = useContext(ScrollContext);

  useEffect(() => {
    scrollFadeIn();
  }, []);

  return (
    <>
      <Header />
      <div className="h-screen w-full container sm:px-16 m-auto pt-32 sm:pt-0">
        <div className="flex flex-col sm:h-[100vh] items-center justify-center js-show-on-scroll">
          <div className="flex items-center justify-center flex-col gap-7 sm:gap-8 container px-6 pb-20 sm:pb-0 sm:px-0">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 w-full text-center">
              <h1 className="sm:text-[55px] text-[30px] font-thin tracking-[8px] animate-pulse2">
                YUTO NAMBA
              </h1>
              <div className="order-1 mt-3 sm:mt-0 sm:order-none">
                <Link href="https://github.com/orange-na">
                  <GitHubIcon
                    sx={{ fontSize: 40 }}
                    className="text-gray-700 hover:text-gray-500 duration-200"
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/yuto-namba-a414b7284/">
                  <LinkedInIcon
                    sx={{ fontSize: 40 }}
                    className="text-gray-700 hover:text-gray-500 duration-200"
                  />
                </Link>
                <Link href="https://dev.to/orange-na">
                  <BookIcon
                    sx={{ fontSize: 40 }}
                    className="text-gray-700 hover:text-gray-500 duration-200"
                  />
                </Link>
              </div>
              <p className="sm:text-3xl font-thin sm:border-l-2 sm:border-gray-400 px-10 py-3 tracking-[3px]">
                Web Developer
              </p>
            </div>
            <p className="tracking-wider text-[20px] font-thin">
              Welcome to my web portfolio! I am passionate about all things tech
              and on a mission to become a skilled Web Developer. While I may
              not have professional experience in the field just yet, I am
              driven by a thirst for knowledge and a genuine love for coding.
            </p>
            <p className="tracking-wider text-[20px] font-thin">
              As I embark on this journey towards becoming a professional Web
              Developer, I am eager to collaborate with like-minded individuals
              and contribute to innovative projects. I firmly believe that every
              day is an opportunity to learn and improve, and I am committed to
              pushing my boundaries and expanding my knowledge.
            </p>
            <p className="tracking-wider text-[20px] font-thin">
              Thank you for visiting my web portfolio! I am thrilled to share my
              passion for web development with you and excited about what the
              future holds. Let's connect and explore the endless possibilities
              of the digital world together.
            </p>
          </div>
        </div>

        <div className="fixed w-screen h-screen top-0 left-0 -z-20">
          <div className="bg-gray-400 blur-3xl w-80 h-80 rounded-full absolute -z-10 animate-pulse"></div>
          <div className="bg-gray-400 blur-3xl w-60 h-60 rounded-full absolute top-[450px] left-[1100px] -z-10 animate-pulse2"></div>
          <div className="bg-gray-400 blur-3xl w-40 h-40 rounded-full absolute top-[300px] left-[400px] -z-10 animate-pulse2"></div>
          <div className="bg-gray-400 blur-2xl w-24 h-24 rounded-full absolute top-[700px] left-[600px] -z-10 animate-pulse3"></div>
          <div className="bg-gray-400 blur-3xl w-48 h-48 rounded-full absolute top-[100px] left-[1500px] -z-10 animate-pulse2"></div>
          <div className="bg-gray-400 blur-3xl w-48 h-48 rounded-full absolute top-[500px] left-[0px] -z-10 animate-pulse"></div>
          <div className="bg-gray-400 blur-3xl w-48 h-48 rounded-full absolute top-[900px] left-[200px] -z-10 animate-pulse"></div>
          <div className="bg-gray-400 blur-3xl w-48 h-48 rounded-full absolute top-[150px] left-[800px] -z-10 animate-pulse"></div>
          <div className="bg-gray-400 blur-3xl w-24 h-24 rounded-full absolute top-[50px] left-[1300px] -z-10 animate-pulse3"></div>
        </div>
      </div>
    </>
  );
}
