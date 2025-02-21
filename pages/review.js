import Image from "next/image";



const SelectYourLens = () => {
    return (
        <div className="w-full relative flex flex-col items-center justify-center text-left text-base text-black font-p3-16">
            <div className="self-stretch relative bg-whitesmoke border-gray-200 border-b-[1px] border-solid box-border h-20 overflow-hidden shrink-0">
                <div className="absolute top-[18px] left-[1316px] flex flex-row items-center justify-center">
                    {/* <Image className="w-11 relative h-11 overflow-hidden shrink-0" width={44} height={44} alt="" src="basil:cross-outline.svg" /> */}
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
            <div className="self-stretch bg-gray-100 overflow-hidden flex flex-col items-center justify-center pt-10 px-[60px] pb-[60px] gap-6 text-center text-xs text-gray-300">
                <div className="self-stretch flex flex-row items-center justify-center gap-4">
                    <div className="relative leading-[150%] font-medium ">Lens Type</div>
                    <div className="w-[401px] relative border-black border-t-[1px] border-solid box-border h-px" />
                    <div className="relative leading-[150%] font-medium">Lens</div>
                    <div className="w-[401px] relative border-black border-t-[1px] border-solid box-border h-px" />
                    <div className="relative leading-[150%] font-medium text-black">Review</div>
                </div>
                <div className="w-[1280px] flex flex-col items-center justify-center text-left text-base text-black">
                    <div className="self-stretch flex flex-row items-start justify-start gap-10">
                        <div className="self-stretch w-[482px] flex flex-row items-start justify-start">
                            <Image className="w-[482px] relative h-[382px] object-cover" width={482} height={382} alt="" src="/1.png" />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-end gap-6">
                            <div className="self-stretch flex flex-col items-start justify-start gap-4">
                                <div className="self-stretch flex flex-col items-start justify-center gap-2">
                                    <div className="self-stretch flex flex-row items-start justify-start gap-2">
                                        <div className="flex-1 relative leading-[150%] font-semibold">Model</div>
                                        <div className="relative leading-[150%] font-semibold">AED 775.00</div>
                                    </div>
                                    <div className="relative text-sm leading-[150%] font-medium">Ray-Ban New Wayfarer RB2132 901 52</div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-center gap-2">
                                    <div className="self-stretch relative leading-[150%] font-semibold">Lens Type</div>
                                    <div className="self-stretch relative text-sm leading-[150%] font-medium">Single Vision Type</div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-center gap-2">
                                    <div className="self-stretch relative leading-[150%] font-semibold">Prescription</div>
                                    <div className="self-stretch relative text-sm leading-[150%] font-medium">Entered Manually</div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-center gap-2">
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
                            <div className="w-[379px] bg-black h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2 px-10 box-border text-center text-white">
                                <div className="relative leading-[150%] font-medium">ADD TO BAG</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SelectYourLens;