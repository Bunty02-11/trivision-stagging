import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";

const product = {
	title: "Hot Brand Perfume For Men",
	previews: [
		{
			previewUrl: "https://cdn.easyfrontend.com/pictures/products/perfume1.png",
			thumbUrl: "https://cdn.easyfrontend.com/pictures/products/perfume1.png",
		},
		{
			previewUrl: "https://cdn.easyfrontend.com/pictures/products/perfume2.png",
			thumbUrl: "https://cdn.easyfrontend.com/pictures/products/perfume2.png",
		},
		{
			previewUrl: "https://cdn.easyfrontend.com/pictures/products/perfume1.png",
			thumbUrl: "https://cdn.easyfrontend.com/pictures/products/perfume1.png",
		},
		{
			previewUrl: "https://cdn.easyfrontend.com/pictures/products/perfume3.png",
			thumbUrl: "https://cdn.easyfrontend.com/pictures/products/perfume3.png",
		},
	],
	rating: 4.8,
	rateCount: 419,
	price: 324.34,
	colorVariants: [
		{ label: "Multi", value: "Multi", title: "Multi" },
		{ label: "Red", value: "Red", title: "Red" },
		{ label: "Green", value: "Green", title: "Green" },
		{ label: "Blue", value: "Blue", title: "Blue" },
		{ label: "Black", value: "Black", title: "Black" },
	],
	sizeVariants: [
		{
			label: "18L",
			value: "18L",
			content: "Perfect fora a reasonable amount of snacks",
		},
		{
			label: "20L",
			value: "20L",
			content: "Perfect fora a reasonable amount of snacks",
		},
	],
};

const ProductPreviews = ({ previews }) => {
	const [index, setIndex] = useState(0);

	return (
		<Fragment>
			<div className="absolute rounded-lg bg-blue-50 dark:bg-slate-800 bottom-12 w-[5000px] h-[5000px] right-[40%]" />

			<div className="relative">
				<div className="text-center mb-4 md:p-6">
					<img
						src={previews[index].previewUrl}
						alt=""
						className="max-w-full h-auto max-h-[500px]"
					/>
				</div>

				<ul className="flex">
					{previews.slice(1, 4).map((preview, i) => (
						<a href="#!" key={i}>
							<li
								className="w-24 h-24 inline-flex justify-center items-center bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-blue-600 dark:border-opacity-20 rounded-lg mr-2.5 p-2"
								onClick={() => setIndex(i)}
							>
								<img
									src={preview.thumbUrl}
									alt=""
									className="max-w-full h-auto"
								/>
							</li>
						</a>
					))}
				</ul>
			</div>
		</Fragment>
	);
};

ProductPreviews.propTypes = {
	previews: PropTypes.array.isRequired,
};

const QtyField = ({ name, value, onChange }) => {
	const qtyControl = (qty) =>
		onChange({
			target: {
				name,
				type: "radio",
				value: qty < 1 ? 1 : qty,
			},
		});

	return (
		<div className="h-11 border dark:border-slate-700 rounded-full flex w-36 relative mt-4 overflow-hidden">
			<button
				className="w-full pb-1 inline-flex justify-center items-center text-2xl font-medium border-r dark:border-slate-700 text-blue-600 hover:bg-blue-600 hover:bg-opacity-20"
				type="button"
				onClick={() => qtyControl(parseInt(value) - 1)}
			>
				-
			</button>
			<input
				className="text-lg font-bold px-4 pl-5 py-1 inline-flex justify-center max-w-[60px] text-center bg-transparent focus:outline-none"
				type="number"
				placeholder=""
				value={value}
				onChange={(e) => qtyControl(e.target.value)}
			/>
			<button
				className="w-full pb-1 inline-flex justify-center items-center text-2xl font-medium border-l dark:border-slate-700 text-blue-600 hover:bg-blue-600 hover:bg-opacity-10"
				type="button"
				onClick={() => qtyControl(parseInt(value) + 1)}
			>
				+
			</button>
		</div>
	);
};

QtyField.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.any,
};

const ColorVariant = () => {
	const [selectedColor, setSelectedColor] = useState("Multi");

	const handleColorChange = (value) => {
		setSelectedColor(value);
	};

	return (
		<>
			<div className="mb-6">
				<h5 className="font-medium mb-2">
					Color:{" "}
					<span className="opacity-50">
						{selectedColor &&
							product.colorVariants.find(
								(color) => color.value === selectedColor
							)?.value}
					</span>
				</h5>
				<div className="flex flex-wrap gap-2 mb-2">
					{product.colorVariants.map((item, i) => (
						<Fragment key={i}>
							<input
								type="radio"
								className="absolute hidden"
								autoComplete="off"
								checked={selectedColor === item.value}
								onChange={() => handleColorChange(item.value)}
							/>
							<label
								className={`bg-gray-100 dark:bg-slate-800 py-1 px-4 rounded-full border ${
									selectedColor === item.value
										? "border-blue-600 dark:border-blue-600"
										: "border-blue-50 dark:border-blue-600 dark:border-opacity-20"
								} text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 mt-1`}
								onClick={() => handleColorChange(item.value)}
							>
								{item.label}
							</label>
						</Fragment>
					))}
				</div>
			</div>
		</>
	);
};

const SizeVariant = () => {
	const [selectedSize, setSelectedSize] = useState("18L");

	const handleSizeChange = (value) => {
		setSelectedSize(value);
	};

	return (
		<div className="mb-6">
			<h5 className="text-sm font-medium mb-2">
				Size:{" "}
				<span className="opacity-50">
					{selectedSize &&
						product.sizeVariants.find((size) => size.label === selectedSize)
							?.label}
				</span>
			</h5>
			<div className="flex gap-2 mb-2">
				{product.sizeVariants.map((size, index) => (
					<Fragment key={size.label}>
						<input
							type="radio"
							className="sr-only"
							autoComplete="off"
							checked={selectedSize === size.value}
							onChange={() => handleSizeChange(size.value)}
						/>
						<label
							className={`bg-gray-100 dark:bg-slate-800 cursor-pointer rounded-md flex flex-col overflow-hidden text-start border-2 border-white dark:border-[#0b1727]  ${
								selectedSize === size.label &&
								"outline outline-1 outline-blue-600 dark:outline-blue-600"
							} hover:outline-blue-600 px-6 py-4`}
							onClick={() => handleSizeChange(size.value)}
						>
							<b className="mb-2">{size.label}</b>
							<span className="opacity-75 mb-2">{size.content}</span>
						</label>
					</Fragment>
				))}
			</div>
		</div>
	);
};

const Epoverview15 = () => {
	const [formData, setFormData] = useState({
		color: "Multi",
		size: "XL",
		qty: 1,
	});

	const setField = (e) => {
		const { name, value, type, checked } = e.target;

		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	return (
		<section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-2 gap-6">
					<div className="col-span-2 md:col-span-1 relative">
						<ProductPreviews previews={product.previews} />
					</div>
					<div className="col-span-2 md:col-span-1">
						<div className="mb-6 lg:mb-12">
							<h1 className="text-2xl leading-none md:text-4xl font-medium mb-4">
								{product.title}
							</h1>
							<p className="opacity-70 mb-6">
								{product.rating.toFixed(1)} out of ({product.rateCount}){" "}
								<a href="#!" className="text-blue-600 font-medium ml-1">
									Reviews
								</a>
							</p>
							<h3 className="text-2xl text-blue-600 font-medium">
								{" "}
								{product.price.toLocaleString("en-US", {
									style: "currency",
									currency: "USD",
								})}
							</h3>
						</div>

						<form action="#!">
							<div className="mb-6">
								<ColorVariant />
							</div>
							<div className="mb-6">
								<SizeVariant />
							</div>
							<div className="mb-6">
								<h5 className="font-medium mb-2">QTY</h5>
								<QtyField onChange={setField} name="qty" value={formData.qty} />
							</div>

							<div className="flex items-center my-7">
								<button className="bg-blue-600 text-white text-sm rounded uppercase hover:bg-opacity-90 px-6 py-2.5 mr-2">
									Add To Cart
								</button>
								<button className="bg-blue-600 text-white rounded text-xl hover:bg-opacity-90 py-1.5 px-3 mr-2">
									<FontAwesomeIcon icon={faHeart} />
								</button>
								<button className="hover:bg-blue-600 rounded hover:bg-opacity-10 text-blue-600 px-3 py-2">
									<FontAwesomeIcon icon={faShareAlt} className="me-2 fs-5" />{" "}
									Share
								</button>
							</div>

							<p className="opacity-70 lg:mr-56 xl:mr-80">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
								nec consequat lorem. Maecenas elementum at diam consequat
								bibendum.
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Epoverview15;