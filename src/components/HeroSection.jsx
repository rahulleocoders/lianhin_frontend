import Image from "next/image"
import ShowDemo from "./ShowDemo"
const HeroSection = () => {

    let SmallCard = () => (<div className=" p-2 rounded-xl bg-white aspect-video md:aspect-auto md:h-40">
        <div className="flex items-center justify-center rounded-md border-2 h-full overflow-hidden">
            <Image src='https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt="demo" className=" w-full mx-auto h-full object-cover " width={100} height={100} />
        </div>
    </div>)
    return (
        <section className="h-[90vh] md:h-[calc(100vh-80px)] flex relative">
            <div className=" absolute top-0 left-0 w-full h-full md:max-w-xl bg-white bg-opacity-20  md:bg-opacity-75 p-2 z-10">
                {/* <div className=" flex-1 bg-white bg-opacity-50 flex items-center justify-center "> */}
                <div className=" w-full h-full flex items-center justify-center border border-white rounded-md">
                    <div className="flex flex-col max-w-md  gap-6 px-2 md:px-0">
                        <h1 className=" font-bold text-primary-color text-5xl text-center">Lian Hin <br/> Online Visualiser</h1>
                        <p className="text-black text-lg">Our online visualizer lets you experiment with our brands&apos; wide range of surfaces and models in a virtual environment.</p>
                        <p className="text-black text-lg">Choose your desired space and model and visualize your choice!</p>
                        {/* <SmallCard /> */}
                        <div className="hidden md:block my-7"></div>
                        <ShowDemo />
                    </div>

                </div>
            </div>
            <div className="flex-[2] placeholder-indigo-300">
                <video className=" w-full h-full object-cover md:object-fill" loop muted autoPlay>
                    <source src="https://lianhin1.netlify.app/video/ModernKitchen.mp4" type="video/mp4" />
                    {/* <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" /> */}
                    {/* <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type='video /ogg' /> */}
                </video>
            </div>

        </section>
    )
}

export default HeroSection