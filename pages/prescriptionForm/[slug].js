import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from "axios";

const SelectYourLens = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [product, setProduct] = useState(null);
    const [additionalInfo, setAdditionalInfo] = useState([]);
    const [prescription, setPrescription] = useState({
        rightEye: { sphere: "", cylinder: "", axis: "" },
        leftEye: { sphere: "", cylinder: "", axis: "" },
        pd: ""
    });

    useEffect(() => {
        const fetchData = async (slug, token) => {
            try {
                const response = await axios.get(
                    `http://localhost:5055/api/selectlens/by-product-slug/${slug}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`, // Send token in headers
                            "Content-Type": "application/json",
                        },
                    }
                );
                console.log("Product data fetched:", response);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product data:", error.response?.data?.message || error.message);
            }
        };

        const token = localStorage.getItem('token'); // Get token from localStorage

        if (!token) {
            console.error("Unauthorized: No token found!");
            return; // Stop execution if no token
        }

        if (slug) {
            console.log("Fetching data for slug:", slug); // Log the slug
            fetchData(slug, token);
        }
    }, [slug]);

    const exportValues = Array.from({ length: 41 }, (_, i) => (i - 20) * 0.5);
    const angleValues = Array.from({ length: 181 }, (_, i) => i);

    const handlePrescriptionChange = (e) => {
        const { name, value } = e.target;
        if (name === "pd") {
            setPrescription((prev) => ({
                ...prev,
                pd: value,
            }));
        } else {
            const [key, eye] = name.split(".");
            setPrescription((prev) => ({
                ...prev,
                [eye]: {
                    ...prev[eye],
                    [key]: value,
                },
            }));
        }
    };

    const addSelectLens = async (lensType) => {
        try {
            const token = localStorage.getItem("token"); // Get token from localStorage

            if (!token) {
                alert("Unauthorized: No token found.");
                return;
            }

            const id = product._id;
            const lensPrice = lensType === "Single Vision Lenses" ? 610
                : lensType === "Computer Lenses" ? 750
                    : 0;

            // Creating lens data
            const lensData = {
                lensType,
                price: lensPrice,
            };

            // Update additional info
            const updatedAdditionalInfo = [...additionalInfo, lensData];
            setAdditionalInfo(updatedAdditionalInfo);

            // Calculate new total
            const newTotal = product.product_id.retail_price + lensPrice;

            // Prepare data payload
            const data = {
                product_id: product.product_id._id,
                product_slug: product.product_id.slug,
                additional_info: updatedAdditionalInfo,
                user_info: { user_id: localStorage.getItem("userId") },
                subTotal: product.product_id.retail_price,
                prescription: [
                    {
                        eye: "Right Eye",
                        sphere: prescription.rightEye.sphere,
                        cylinder: prescription.rightEye.cylinder,
                        axis: prescription.rightEye.axis,
                    },
                    {
                        eye: "Left Eye",
                        sphere: prescription.leftEye.sphere,
                        cylinder: prescription.leftEye.cylinder,
                        axis: prescription.leftEye.axis,
                    },
                    {
                        pd: prescription.pd,
                    },
                ],
                total: newTotal, // Updated total
                lens_info: "2",
            };

            // Send update request to backend
            const response = await axios.put(
                `http://localhost:5055/api/selectlens/${id}`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Send token in headers
                        "Content-Type": "application/json",
                    },
                }
            );

            // Determine redirection path
            const slug = product.product_id.slug;
            router.push({
                pathname: `/review/${slug}`,
                query: { slug }
            })

            console.log("Updated Total:", newTotal);
        } catch (error) {
            console.error("Error:", error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="w-full relative flex flex-col items-start justify-start text-left text-base text-black font-p5-12">
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
                            {product && (
                                <>
                                    <Image className="self-stretch relative max-w-full overflow-hidden h-[382px] shrink-0 object-contain" width={450} height={350} alt="" src={product.product_id.product_images[3]} />
                                    <div className="self-stretch flex flex-col items-start justify-center gap-2">
                                        <div className="self-stretch flex flex-row items-start justify-start gap-2">
                                            <div className="flex-1 relative leading-[150%] font-semibold">Model</div>
                                            <div className="relative leading-[150%] font-semibold">AED {product.product_id.retail_price}</div>
                                        </div>
                                        <div className="relative text-sm leading-[150%] font-medium">{product.product_id.product_name_short}</div>
                                    </div>
                                    <div className="self-stretch border-gray-400 border-t-[1px] border-solid flex flex-col items-start justify-center pt-4 px-0 pb-0 gap-2">
                                        <div className="self-stretch flex flex-row items-start justify-start gap-2">
                                            <div className="flex-1 relative leading-[150%] font-semibold">Total</div>
                                            <div className="relative leading-[150%] font-semibold">AED {product.total}</div>
                                        </div>
                                        <div className="self-stretch flex flex-row items-start justify-start gap-2.5 text-sm">
                                            <div className="flex-1 relative leading-[150%] font-medium">Include VAT</div>
                                            <div className="relative leading-[150%] font-medium text-right">AED {product.total * 0.05}</div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="self-stretch overflow-y-auto flex flex-col items-center justify-start gap-6 text-xl">
                            <div className="self-stretch relative leading-[140%] font-medium">Enter your prescription?</div>
                            <div className="flex-1 flex flex-row items-center justify-start gap-6 text-sm">
                                <div>
                                    <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-500">
                                        <div></div>
                                        <div className="font-semibold text-black">Sphere (SPH)</div>
                                        <div className="font-semibold text-black">Cylinder (CYL)</div>
                                        <div className="font-semibold text-black">Axis</div>
                                        <div className="font-semibold text-black">OD (Right eye)</div>
                                        <select
                                            className="border p-2 w-full"
                                            name="sphere.rightEye"
                                            onChange={handlePrescriptionChange}
                                        >
                                            <option value="">Select</option>
                                            {exportValues.map((value) => (
                                                <option key={value} value={value}>
                                                    {value}
                                                </option>
                                            ))}
                                        </select>
                                        <select
                                            className="border p-2 w-full"
                                            name="cylinder.rightEye"
                                            onChange={handlePrescriptionChange}
                                        >
                                            <option value="">Select</option>
                                            {exportValues.map((value) => (
                                                <option key={value} value={value}>
                                                    {value}
                                                </option>
                                            ))}
                                        </select>
                                        <select
                                            className="border p-2 w-full"
                                            name="axis.rightEye"
                                            onChange={handlePrescriptionChange}
                                        >
                                            <option value="">Select</option>
                                            {angleValues.map((angle) => (
                                                <option key={angle} value={angle}>
                                                    {angle}°
                                                </option>
                                            ))}
                                        </select>
                                        <div className="font-semibold text-black">OS (Left eye)</div>
                                        <select
                                            className="border p-2 w-full"
                                            name="sphere.leftEye"
                                            onChange={handlePrescriptionChange}
                                        >
                                            <option value="">Select</option>
                                            {exportValues.map((value) => (
                                                <option key={value} value={value}>
                                                    {value}
                                                </option>
                                            ))}
                                        </select>
                                        <select
                                            className="border p-2 w-full"
                                            name="cylinder.leftEye"
                                            onChange={handlePrescriptionChange}
                                        >
                                            <option value="">Select</option>
                                            {exportValues.map((value) => (
                                                <option key={value} value={value}>
                                                    {value}
                                                </option>
                                            ))}
                                        </select>
                                        <select
                                            className="border p-2 w-full"
                                            name="axis.leftEye"
                                            onChange={handlePrescriptionChange}
                                        >
                                            <option value="">Select</option>
                                            {angleValues.map((angle) => (
                                                <option key={angle} value={angle}>
                                                    {angle}°
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-semibold">PD (Pupillary distance)</label>
                                        <div className="flex items-center gap-4 mt-2">
                                            <select
                                                className="border p-2 w-[300px]"
                                                name="pd"
                                                onChange={handlePrescriptionChange}
                                            >
                                                <option value="">Select</option>
                                                {Array.from({ length: 100 }, (_, i) => i + 1).map((value) => (
                                                    <option key={value} value={value}>
                                                        {value} mm
                                                    </option>
                                                ))}
                                            </select>
                                            <label className="flex items-center gap-2">
                                                <input type="checkbox" className="w-4 h-4" />
                                                I have 2 PD numbers
                                            </label>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center gap-2 text-sm text-black-600">
                                        <input type="checkbox" className="w-4 h-4 mt-1" />
                                        <p>
                                            By clicking this box, I confirm that the prescription values entered above are taken from a valid (not expired) prescription issued to me, signed by a licensed optometrist or ophthalmologist.
                                        </p>
                                    </div>

                                    <button
                                        className="mt-6 bg-black text-white px-6 py-2 md w-250px"
                                        onClick={() => addSelectLens("Single Vision Lenses")}
                                    >
                                        CONTINUE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectYourLens;