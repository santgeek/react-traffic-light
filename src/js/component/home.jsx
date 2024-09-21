import React, { useState } from "react";

const Home = () => {

	const [color, setColor] = useState("green");
	const [lights, setLight] = useState(["green", "yellow", "red"]);
	const [activeIndex, setActiveIndex] = useState(null);

	let handleClick = (light, index) => {
		setColor(light)
		setActiveIndex(index)
	}

	return (
		<div>
			<div className="container bg-dark" style={{ width: "2em", height: "5em" }}></div>
			<div className="container d-flex flex-column align-items-center bg-dark rounded-4 pb-4 pt-3" style={{ width: "14em" }}>
				{lights.map((light, index) => (
					<div
						key={index}
						onClick={() => handleClick(light, index)}
						className="my-2"
						style={{
							backgroundColor: light,
							width: "10em",
							height: "10em",
							border: activeIndex === index ? `4px solid ${light}` : "none",
							boxShadow: activeIndex === index ? `0 0 20px ${light}` : "none",
							borderRadius: '50%'
						}}
					>
					</div>
				))}
			</div>
		</div>
	)
};

export default Home;
