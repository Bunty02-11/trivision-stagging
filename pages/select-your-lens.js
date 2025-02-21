import Image from "next/image";
import FrameComponent1 from "../components/frame-component1";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


const SelectYourLens = () => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check for token in local storage
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleNavigation = () => {
        router.push('/login'); // Replace with your actual route
    };

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
                    <div className="relative leading-[150%] font-medium text-black">Lens Type</div>
                    <div className="w-[401px] relative border-black border-t-[1px] border-solid box-border h-px" />
                    <div className="relative leading-[150%] font-medium">Lens</div>
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
                            <div className="self-stretch relative leading-[140%] font-medium">Lens Type</div>
                            <div className="flex-1 flex flex-row items-center justify-start gap-6 text-sm">
                                <div className="w-[250px] h-[396px] bg-whitesmoke-200 flex flex-col items-start justify-start gap-4">
                                    <Image className="self-stretch relative max-w-full overflow-hidden h-[150px] shrink-0 object-cover" width={250} height={150} alt="" src="/5.png" />
                                    <div className="self-stretch flex flex-col items-start justify-start gap-3">
                                        <div className="self-stretch flex flex-col items-center justify-center py-0 px-2 gap-2">
                                            <div className="self-stretch relative leading-[150%] font-medium">Single Vision Lenses</div>
                                            <div className="self-stretch relative text-xs leading-[150%]">Recommended for prescriptions only</div>
                                        </div>
                                        <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                                            <div className="flex-1 relative leading-[150%] font-medium flex items-center h-[21px]">From AED 610.00</div>
                                        </div>
                                        <div className="self-stretch relative text-xs leading-[180%]">
                                            <ul className="m-0 font-inherit text-inherit pl-4">
                                                <li className="mb-0">Targeted Vision Correction —near, intermediate, or distance</li>
                                                <li className="mb-0">Crystal-Clear Clarity</li>
                                                <li>All-Day Comfort</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="self-stretch bg-black overflow-hidden flex flex-row items-center justify-center py-2 px-10 text-center text-xs text-white">
                                        <div className="relative leading-[150%] font-medium">SELECT</div>
                                    </div>
                                </div>
                                <div className="w-[250px] h-[396px] bg-whitesmoke-200 flex flex-col items-start justify-start gap-4">
                                    <Image className="self-stretch relative max-w-full overflow-hidden h-[150px] shrink-0 object-cover" width={250} height={150} alt="" src="/6.png" />
                                    <div className="self-stretch flex flex-col items-start justify-start gap-3">
                                        <div className="self-stretch flex flex-col items-center justify-center py-0 px-2 gap-2">
                                            <div className="self-stretch relative leading-[150%] font-medium">Computer Lenses</div>
                                            <div className="self-stretch relative text-xs leading-[150%]">No prescriptions required</div>
                                        </div>
                                        <div className="self-stretch flex flex-row items-center justify-center py-0 px-2">
                                            <div className="flex-1 relative leading-[150%] font-medium flex items-center h-[21px]">From AED 750.00</div>
                                        </div>
                                        <div className="self-stretch relative text-xs leading-[180%]">
                                            <ul className="m-2 font-inherit text-inherit pl-4">
                                                <li className="mb-1">Blue Light Filtering</li>
                                                <li className="mb-1">Enhanced Visual Comfort</li>
                                                <li>Relaxed vision while using digital devices</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="self-stretch bg-black overflow-hidden flex flex-row items-center justify-center py-2 px-10 text-center text-xs text-white">
                                        <div className="relative leading-[150%] font-medium">SELECT</div>
                                    </div>
                                </div>
                                <div className="w-[250px] h-[396px] bg-whitesmoke-200 flex flex-col items-start justify-start gap-4">
                                    <Image className="self-stretch relative max-w-full overflow-hidden h-[150px] shrink-0 object-cover" width={250} height={150} alt="" src="/7.png" />
                                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-3">
                                        <div className="self-stretch flex flex-col items-center justify-center py-0 px-2 gap-2">
                                            <div className="self-stretch relative leading-[150%] font-medium">Frame Only</div>
                                            <div className="self-stretch relative text-xs leading-[150%]">No prescriptions required</div>
                                        </div>
                                        <div className="w-[250px] hidden flex-row items-center justify-center py-0 px-2 box-border">
                                            <div className="flex-1 relative leading-[150%] font-medium flex items-center h-[21px]">From AED 610.00</div>
                                        </div>
                                        <div className="self-stretch relative text-xs leading-[180%]">
                                            <ul className="m-0 font-inherit text-inherit pl-4">
                                                <li className="mb-0">Modern and trendy frames</li>
                                                <li className="mb-0">Constructed from high-quality materials</li>
                                                <li>Available in various shapes and colors</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="self-stretch bg-black overflow-hidden flex flex-row items-center justify-center py-2 px-10 text-center text-xs text-white">
                                        <div className="relative leading-[150%] font-medium">SELECT</div>
                                    </div>
                                </div>
                            </div>
                            {!isLoggedIn && (
                                <div className="rounded-lg bg-black overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-10 text-center text-base text-white">
                                    <div className="relative leading-[150%]">
                                        <span className="font-medium">
                                            <span className="[text-decoration:underline] cursor-pointer" onClick={handleNavigation}
                                            >Sign in here</span> to access your saved eyeglasses prescriptions.
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectYourLens;