import Link from "next/link";
import { useEffect } from "react";

export function Myself() {

    const scrollFadeIn = () => {
        const callback = function (entries) {
          entries.forEach((entry) => {
            //console.log(entry);
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-slideIn");
            } else {
              entry.target.classList.remove("animate-slideIn");
            }
          });
        };
      
        const observer = new IntersectionObserver(callback);
      
        const targets = document.querySelectorAll(".js-show-on-scroll");
        targets.forEach(function (target) {
          target.classList.add("opacity-0");
          observer.observe(target);
        });
      };

      useEffect(() => {
        scrollFadeIn();
      }, []);

    return (
        <main className="">
            <div className="flex flex-col h-[100vh] items-center justify-center ">
                {/* <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce">Namba Yuto</h1> */}
                <div className="flex flex-col items-center">
                    <div className="flex gap-10">
                        <div className="flex">
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">Y</h1>
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">U</h1>
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">T</h1>
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">O</h1>
                        </div>
                        <div className="flex">
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">N</h1>
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">A</h1>
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">M</h1>
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">B</h1>
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">A</h1>
                        </div>
                    </div>
                    <p className="font-noto font-bold text-2xl tracking-[15px] text-parimary">This is my portfolio site.</p>
                </div>
                <div className="flex flex-col -scale-y-100 items-center text-gray-300">
                    <div className="flex gap-10 italic">
                        <div className="flex">
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">Y</h1>
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">U</h1>
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">T</h1>
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">O</h1>
                        </div>
                        <div className="flex">
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">N</h1>
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">A</h1>
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">M</h1>
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">B</h1>
                            <h1 className="text-7xl animate-appear font-thin tracking-[15px] hover:animate-bounce cursor-pointer">A</h1>
                        </div>
                    </div>
                    <p className="font-noto font-bold text-2xl tracking-[15px] ttext-gray-300 italic">This is my portfolio site.</p>
                </div>
            </div>


            <div className="pb-20 js-show-on-scroll">
                    <div className="container pt-40 mx-auto grid grid-cols-2 gap-x-10 gap-y-[120px]">
                        <div>
                            <div className="relative group overflow-hidden shadow-xl w-full h-[450px]">
                                <img src="/img/yutonamba.png" alt="" className="object-cover h-full w-full"/>
                                <div className="flex items-center justify-center absolute w-full h-full top-0 -left-[100%] group-hover:bg-[#c0c0c064] group-hover:left-0 duration-300">
                                    <div className="bg-white opacity-[88%] w-[80%] h-[80%] flex items-center justify-center">
                                        <p className="">Web Desgin</p>
                                    </div>
                                </div>
                                <Link href='/contact' className="w-full h-full z-10 block absolute top-0 left-0 opacity-0"></Link>
                            </div>
                            <div className="flex flex-col gap-1 p-5">
                                <h2 className="text-3xl ">Web Site Web Site</h2>
                                <p className="text-xl">Web Design</p>
                            </div>
                        </div>
                        <div>
                            <div className="relative group overflow-hidden shadow-xl w-full h-[450px]">
                                <img src="/img/profile.jpeg" alt="" className="object-cover"/>
                                <div className="flex items-center justify-center absolute w-full h-full top-0 -left-[100%] group-hover:bg-[#c0c0c064] group-hover:left-0 duration-300">
                                    <div className="bg-white opacity-[88%] w-[80%] h-[80%] flex items-center justify-center">
                                        <p className="">Web Desgin</p>
                                    </div>
                                </div>
                                <Link href='/contact' className="w-full h-full z-10 block absolute top-0 left-0 opacity-0"></Link>
                            </div>
                            <div className="flex flex-col gap-1 p-5">
                                <h2 className="text-3xl ">Web Site Web Site</h2>
                                <p className="text-xl">Web Design</p>
                            </div>
                        </div>

                    </div>
                </div>


            <div className="fixed w-screen h-screen top-0 left-0 -z-20">
                    <div className="bg-gray-400 blur-3xl w-80 h-80 rounded-full absolute -z-10 animate-pulse">
                    </div>
                    <div className="bg-gray-400 blur-3xl w-60 h-60 rounded-full absolute top-[450px] left-[1000px] -z-10 animate-pulse2">
                    </div>
                    <div className="bg-gray-400 blur-3xl w-40 h-40 rounded-full absolute top-[300px] left-[400px] -z-10 animate-pulse2">
                    </div>
                    <div className="bg-gray-400 blur-2xl w-24 h-24 rounded-full absolute top-[700px] left-[600px] -z-10 animate-pulse3">
                    </div>
                    <div className="bg-gray-400 blur-3xl w-96 h-96 rounded-full absolute top-[700px] left-[1500px] -z-10 animate-pulse3">
                    </div>
                    <div className="bg-gray-400 blur-3xl w-48 h-48 rounded-full absolute top-[100px] left-[1500px] -z-10 animate-pulse2">
                    </div>
                    <div className="bg-gray-400 blur-3xl w-48 h-48 rounded-full absolute top-[500px] left-[0px] -z-10 animate-pulse">
                    </div>
                    <div className="bg-gray-400 blur-3xl w-48 h-48 rounded-full absolute top-[900px] left-[200px] -z-10 animate-pulse">
                    </div>
                </div>
        </main>
    )
  }
  