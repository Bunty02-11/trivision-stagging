import Image from "next/image";
import FrameComponent1 from "../components/frame-component1";
const Prescription = () => {
    return (
        <div className="w-full relative flex flex-col items-start justify-start text-left text-base text-black font-p5-12">
            {/* <FrameComponent1 /> */}
            <div className="self-stretch relative bg-whitesmoke-100 border-gray-200 border-b-[1px] border-solid box-border h-20 overflow-hidden shrink-0">
                <div className="absolute top-[18px] left-[1316px] flex flex-row items-end justify-center">
                    {/* <Image className="w-11 relative h-11 overflow-hidden shrink-0" width={44} height={44} alt="" src="/basil:cross-outline.svg" /> */}
                </div>
                <div className="absolute top-[calc(50%-_12px)] left-[calc(50%+_107.5px)] flex flex-row items-center justify-start gap-6">
                    <div className="relative leading-[150%] font-semibold">Don’t know your prescription?</div>
                    <div className="flex flex-row items-center justify-center gap-3 text-right">
                        <Image className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0.6]" width={24} height={24} alt="" src="/iconoir_eye-solid.png" />
                        <div className="relative [text-decoration:underline] leading-[150%] font-medium opacity-[0.6]">Book an Eye Test</div>
                    </div>
                </div>
                <Image className="absolute top-[calc(50%-_18px)] left-[calc(50%-_640px)] w-[185.6px] h-9 object-cover" width={186} height={36} alt="" src="/logo@2x.png" />
            </div>
            <div className="self-stretch bg-gray-100 overflow-hidden flex flex-col items-center justify-start pt-10 px-[60px] pb-[60px] gap-6 text-center text-xs text-gray-300">
                <div className="self-stretch flex flex-row items-center justify-center gap-4">
                    <div className="relative leading-[150%] font-medium ">Lens Type</div>
                    <div className="w-[401px] relative border-black border-t-[1px] border-solid box-border h-px" />
                    <div className="relative leading-[150%] font-medium text-black">Lens</div>
                    <div className="w-[401px] relative border-black border-t-[1px] border-solid box-border h-px" />
                    <div className="relative leading-[150%] font-medium">Review</div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center text-left text-base text-black">
                    <div className="self-stretch flex flex-row items-center justify-center gap-10">
                        <div className="flex flex-col items-center justify-center gap-4">
                            <Image className="self-stretch relative max-w-full overflow-hidden h-[382px] shrink-0 object-cover" width={482} height={382} alt="" src="/1.png" />
                            <div className="self-stretch flex flex-col items-start justify-center gap-2">
                                <div className="self-stretch flex flex-row items-start justify-start gap-2">
                                    <div className="flex-1 relative leading-[150%] font-semibold">Model</div>
                                    <div className="relative leading-[150%] font-semibold">AED 775.00</div>
                                </div>
                                <div className="relative text-sm leading-[150%] font-medium">Ray-Ban New Wayfarer RB2132 901 52</div>
                            </div>
                            <div className="self-stretch border-gray-400 border-t-[1px] border-solid flex flex-col items-start justify-center pt-4 px-0 pb-0 gap-2">
                                <div className="self-stretch flex flex-row items-start justify-start gap-2">
                                    <div className="flex-1 relative leading-[150%] font-semibold">Total</div>
                                    <div className="relative leading-[150%] font-semibold">AED 775.00</div>
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-start gap-2.5 text-sm">
                                    <div className="flex-1 relative leading-[150%] font-medium">Include VAT</div>
                                    <div className="relative leading-[150%] font-medium text-right">AED 56.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch overflow-y-auto flex flex-col items-center justify-start gap-6 text-xl">
                            <div className="self-stretch relative leading-[140%] font-medium">Do you have a prescription?</div>
                            <div className="flex-1 flex flex-row items-center justify-start gap-6 text-sm">
                                <div className="space-y-4">
                                    <div className="p-4 bg-gray-500 rounded-lg shadow-sm">
                                        <h3 className="text-lg font-medium">Enter It Manually</h3>
                                        <p className="text-gray-400 text-sm">This is our quickest and most popular method. We will then recommend the most suitable lens type.</p>
                                    </div>
                                    <div className="p-4 bg-gray-500 rounded-lg shadow-sm">
                                        <h3 className="text-lg font-medium">Upload It Now</h3>
                                        <p className="text-gray-400 text-sm">And we’ll take care of the rest. We accept the following file formats: .png, .jpg, .pdf (max 10MB).</p>
                                    </div>
                                    <div className="p-4 bg-gray-500 rounded-lg shadow-sm">
                                        <h3 className="text-lg font-medium">Send It Later</h3>
                                        <p className="text-gray-400 text-sm">We’ll ask for it after your order, either by uploading it or by providing your optician’s contact details.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prescription;