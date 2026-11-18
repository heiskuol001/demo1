
import { assets } from "../assets/asset";

const HeroSection = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${assets.aesthetic6})`,
                backgroundPosition: "center 75%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backgroundBlendMode: "overlay",
            }}
            className="relative h-[90vh] w-full flex flex-col items-center bg-gray-100 px-4 bg-no-repeat bg-center overflow-hidden"
        >
            <div className="w-full md:w-1/2 mt-22 md:mt-20 flex flex-col items-center justify-center space-y-6 border border-gray-50 rounded-lg">
                <h1 className="text-lg sm:text-lg md:text-2xl font-bold text-white text-center bg-white/30 backdrop-blur-xl p-4 md:p-6 rounded-lg shadow-md">
                    LET'S CREATE SOMETHING AMAZING TOGETHER
                    <p className="text-sm md:text-sm text-gray-300 mt-2">
                        We will be able to help you with your project and make it a success. Let's work together and make something great!
                    </p>
                </h1>
            </div>

            <div className="absolute bottom-0 left-0 right-0 py-4  text-center flex justify-center space-x-4 md:space-x-10">
                <div className="w-15 h-10 bg-white rounded"></div>
                <div className="w-15 h-10 bg-white rounded"></div>
                <div className="w-15 h-10 bg-white rounded"></div>
            </div>
        </section>
    );
};

export default HeroSection;
