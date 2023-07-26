import { Header } from "@/components/header";


export default function Contact() {
    return (
      <>
      <Header />
      <div className="flex flex-col items-center justify-center pt-40 absolute h-screen w-full overflow-hidden">
        <div className="container m-auto">
            <h1 className="text-7xl font-thin tracking-[10px] text-center mb-5">Contact</h1>
            <form action="">
                <p className="text-3xl font-thin tracking-[2px] mb-3">NAME</p>
                <input type="text" name="name" id="" className="w-full py-8 px-5 border-gray-300 border mb-10 rounded-md"/>
                <p className="text-3xl font-thin tracking-[2px] mb-3">MAIL ADDRESS</p>
                <input type="text" name="name" id="" className="w-full py-8 px-5 border-gray-300 border mb-10 rounded-md"/>
                <p className="text-3xl font-thin tracking-[2px] mb-3">MESSAGE</p>
                <textarea name="message" id="" cols="30" rows="5" className="w-full py-8 px-5 border-gray-300 border mb-10 rounded-md"></textarea>
                <div className="w-full flex justify-center">
                    <button className="bg-gray-600 text-white py-5 px-40 rounded-md text-[23px] hover:bg-gray-500 duration-200">Send</button>
                </div>
            </form>
        </div>

         
        <div className="bg-gray-400 blur-3xl w-80 h-80 rounded-full absolute -z-10 animate-pulse">
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
      </>
    )
  }
  