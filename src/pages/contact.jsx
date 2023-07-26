import { Header } from "@/components/header";
import { ScrollContext } from "@/pages/_app";
import { useContext, useEffect } from "react";


export default function Contact() {

    const scrollFadeIn  = useContext(ScrollContext);

    useEffect(() => {
      scrollFadeIn();
    }, []);


    return (
      <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen w-full overflow-hidden container px-16 m-auto">
        <div className="container m-auto js-show-on-scroll">
            <h1 className="text-[55px] font-thin tracking-[10px] text-center mb-3 pt-16">Contact</h1>
            <form action="">
                <p className="text-[23px] font-thin tracking-[2px] mb-1">NAME</p>
                <input type="text" name="name" id="" className="w-full py-4 px-5 border-gray-300 border mb-7 rounded-md"/>
                <p className="text-[23px] font-thin tracking-[2px] mb-1">MAIL ADDRESS</p>
                <input type="text" name="name" id="" className="w-full py-4 px-5 border-gray-300 border mb-7 rounded-md"/>
                <p className="text-[23px] font-thin tracking-[2px] mb-1">MESSAGE</p>
                <textarea name="message" id="" cols="30" rows="5" className="w-full py-2 px-5 border-gray-300 border mb-7 rounded-md"></textarea>
                <div className="w-full flex justify-center">
                    <button className="bg-gray-600 text-white py-3 px-32 rounded-md text-[18px] hover:bg-gray-500 duration-200">Send</button>
                </div>
            </form>
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
  