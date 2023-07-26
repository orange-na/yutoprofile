import { Header } from "@/components/header";
import { ScrollContext } from "@/pages/_app";
import { useContext, useEffect } from "react";


export default function About() {
    const scrollFadeIn  = useContext(ScrollContext);

    useEffect(() => {
      scrollFadeIn();
    }, []);

    return (
      <>
        <Header />
        <div className="transition-all delay-700 duration-500 h-screen w-full overflow-hidden container px-16 m-auto">
            <div className="flex flex-col h-[100vh] items-center justify-center js-show-on-scroll">
                <div className="flex items-center justify-center flex-col gap-8 container">
                    <div className="flex items-center justify-between mb-6 w-full">
                        <h1 className="text-[55px] font-thin tracking-[8px]">YUTO NAMBA</h1>
                        <p className="text-3xl font-thin border-l-2 border-gray-400 px-10 py-3 tracking-[3px]">Web Developer</p>
                    </div>
                    <p className="tracking-wider text-[20px] font-thin">
                        Welcome to my web portfolio! I am passionate about all things tech and on a mission to become a skilled Web Developer. While I may not have professional experience in the field just yet, I am driven by a thirst for knowledge and a genuine love for coding.
                    </p>
                    <p className="tracking-wider text-[20px] font-thin">
                        As I embark on this journey towards becoming a professional Web Developer, I am eager to collaborate with like-minded individuals and contribute to innovative projects. I firmly believe that every day is an opportunity to learn and improve, and I am committed to pushing my boundaries and expanding my knowledge.
                    </p>
                    <p className="tracking-wider text-[20px] font-thin">
                        Thank you for visiting my web portfolio! I am thrilled to share my passion for web development with you and excited about what the future holds. Let's connect and explore the endless possibilities of the digital world together.
                    </p>
                </div>
            </div>

            <div className="fixed w-screen h-screen top-0 left-0 -z-20">
                <div className="bg-gray-400 blur-3xl w-80 h-80 rounded-full absolute -z-10 animate-pulse">
                </div>
                <div className="bg-gray-400 blur-3xl w-60 h-60 rounded-full absolute top-[450px] left-[1100px] -z-10 animate-pulse2">
                </div>
                <div className="bg-gray-400 blur-3xl w-40 h-40 rounded-full absolute top-[300px] left-[400px] -z-10 animate-pulse2">
                </div>
                <div className="bg-gray-400 blur-2xl w-24 h-24 rounded-full absolute top-[700px] left-[600px] -z-10 animate-pulse3">
                </div>
                <div className="bg-gray-400 blur-3xl w-48 h-48 rounded-full absolute top-[100px] left-[1500px] -z-10 animate-pulse2">
                </div>
                <div className="bg-gray-400 blur-3xl w-48 h-48 rounded-full absolute top-[500px] left-[0px] -z-10 animate-pulse">
                </div>
                <div className="bg-gray-400 blur-3xl w-48 h-48 rounded-full absolute top-[900px] left-[200px] -z-10 animate-pulse">
                </div>
                <div className="bg-gray-400 blur-3xl w-48 h-48 rounded-full absolute top-[150px] left-[800px] -z-10 animate-pulse">
                </div>
            </div>
        </div>
      </>
    )
  }
  