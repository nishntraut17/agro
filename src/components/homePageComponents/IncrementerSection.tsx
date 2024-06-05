import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const IncrementerSection = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let productsText = "Products";
    let farmersText = "Farmers";
    let dealersText = "Dealers";
    let manufacturingUnitsText = "Manufacturing unit";

    if (language === "Hindi") {
        productsText = "उत्पाद";
        farmersText = "किसान";
        dealersText = "डीलर";
        manufacturingUnitsText = "निर्माण इकाइयाँ";
    } else if (language === "Marathi") {
        productsText = "उत्पादने";
        farmersText = "शेतकरी";
        dealersText = "विक्रेते";
        manufacturingUnitsText = "निर्माण युनिट";
    }

    return (
        <section className="varela-round-regular flex flex-row gap-20 h-[800px] lg:h-[0px] justify-center relative">
            <div className="absolute top-[30px] lg:top-[-75px] bg-lime-200 flex flex-col lg:flex-row rounded">
                <div className="z-10 p-12 flex flex-row gap-2">
                    <div className="rounded-full h-20 w-20 z-20 bg-white p-2 shadow-lg border-2">
                        <img src='/brandProduct-removebg-preview.png' alt="farmer" className="rounded-full h-full w-full" />
                    </div>
                    <div className="pt-4">
                        <CountUp
                            start={0}
                            end={75}
                            delay={0}
                            enableScrollSpy={true}
                            scrollSpyDelay={500}
                        >
                            {({ countUpRef }) => (
                                <div className="text-green-800 font-bold">
                                    <span ref={countUpRef} />+
                                </div>
                            )}
                        </CountUp>
                        <span className="font-bold text-gray-800">
                            {productsText}
                        </span>
                    </div>
                </div>
                <div className="z-10 p-12 flex flex-row gap-2">
                    <div className="rounded-full h-20 w-20 z-20 bg-white p-2 shadow-lg border-2">
                        <img src='/bull-removebg-preview.png' alt="farmer" width={100} height={100} className="rounded-full h-full w-full" />
                    </div>
                    <div className="pt-4">
                        <CountUp
                            start={0}
                            end={10000}
                            delay={0}
                            enableScrollSpy={true}
                            scrollSpyDelay={500}
                        >
                            {({ countUpRef }) => (
                                <div className="text-green-800 font-bold">
                                    <span ref={countUpRef} />+
                                </div>
                            )}
                        </CountUp>
                        <span className="font-bold text-gray-800">
                            {farmersText}
                        </span>
                    </div>
                </div>
                <div className="z-10 p-12 flex flex-row gap-2">
                    <div className="rounded-full h-20 w-20 z-20 bg-white p-2 shadow-lg border-2">
                        <img src='/farmhouse-removebg-preview.png' alt="farmer" width={50} height={50} className="rounded-full h-full w-full" />
                    </div>
                    <div className="pt-4">
                        <CountUp
                            start={0}
                            end={500}
                            delay={0}
                            enableScrollSpy={true}
                            scrollSpyDelay={500}
                        >
                            {({ countUpRef }) => (
                                <div className="text-green-800 font-bold">
                                    <span ref={countUpRef} />+
                                </div>
                            )}
                        </CountUp>
                        <span className="font-bold text-gray-800">
                            {dealersText}
                        </span>
                    </div>
                </div>
                <div className="z-10 p-12 flex flex-row gap-2">
                    <div className="rounded-full h-20 w-20 z-20 bg-white p-2 shadow-lg border-2">
                        <img src='/tractor-removebg-preview.png' alt="factory" width={100} height={100} className="rounded-full h-full w-full" />
                    </div>
                    <div className="pt-4">
                        <CountUp
                            start={0}
                            end={1}
                            delay={0}
                            enableScrollSpy={true}
                            scrollSpyDelay={500}
                        >
                            {({ countUpRef }) => (
                                <div className="text-green-800 font-bold">
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                        <span className="font-bold text-gray-800">
                            {manufacturingUnitsText}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IncrementerSection;