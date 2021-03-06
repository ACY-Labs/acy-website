import arrow from "../assets/svgs/main/arrow.svg";
import style from "../css/animation.css";
import { HorizontalLogo } from "../atoms";
import { useState } from "react";

const openInNewTab = url => {
	const newWindow = window.open(url, "_blank", "noopener,noreferrer");
	if (newWindow) newWindow.opener = null;
};

const TabLink = ({ title, content, link = "/", src, src_hover, logoText }) => {
	let [active, setActive] = useState(false);
	return (
		<div
			onClick={() => {
				openInNewTab(link);
			}}
			onMouseEnter={() => {
				setActive(true);
			}}
			onMouseLeave={() => {
				setActive(false);
			}}
			style={{ zIndex: 0 }}
			className="moveTopRightOnHover text-gray-100 rounded-md cursor-pointer relative grayscale filter hover:grayscale-0"
		>
			<div
				className="bg-orange opacity-10 absolute w-full h-full rounded-md"
				style={{ zIndex: -1 }}
			></div>
			<div className="relative p-3" style={{ zIndex: 30 }}>
				
				<div className="flex flex-col items-center relative">
					<h2>{title}</h2>
					<div className="hover:brightness-50">
						<HorizontalLogo
							src={src}
							src_hover={src_hover}
							logoText={logoText}
							active={active}
						></HorizontalLogo>
					</div>
					<div className="px-5 lg:px-10">
						<p>{content}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TabLink;
