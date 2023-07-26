import { Header } from "@/components/header";


export default function About() {
    return (
      <>
        <Header />
        <div className="transition-all delay-700 duration-500 absolute h-screen w-full overflow-hidden">
            <div className="flex flex-col h-[100vh] items-center justify-center gap-5">
                <div className="flex items-center justify-center flex-col gap-10 container">
                    {/* <img src="/img/profile.jpeg" alt="" className="rounded-full object-cover w-[300px] h-[300px]"/> */}
                    <div className="flex items-center justify-between mb-12 w-full">
                        <h1 className="text-7xl font-thin tracking-[10px]">YUTO NAMBA</h1>
                        <p className="text-4xl font-thin border-l-2 border-gray-400 px-10 py-5 tracking-[5px]">Web Developer</p>
                    </div>
                    <p className="tracking-wider text-[27px] font-thin">
                        Welcome to my web portfolio! I am passionate about all things tech and on a mission to become a skilled Web Developer. While I may not have professional experience in the field just yet, I am driven by a thirst for knowledge and a genuine love for coding.
                    </p>
                    <p className="tracking-wider text-[27px] font-thin">
                        As I embark on this journey towards becoming a professional Web Developer, I am eager to collaborate with like-minded individuals and contribute to innovative projects. I firmly believe that every day is an opportunity to learn and improve, and I am committed to pushing my boundaries and expanding my knowledge.
                    </p>
                    <p className="tracking-wider text-[27px] font-thin">
                        Thank you for visiting my web portfolio! I am thrilled to share my passion for web development with you and excited about what the future holds. Let's connect and explore the endless possibilities of the digital world together.
                    </p>
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
        </div>
      </>
    )
  }
  