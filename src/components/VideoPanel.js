import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";
import placeholder from "../assets/default.png";
import "./styles.css";

export const VideoPanel = ({ setIframeLoaded }) => {
	let [webGLStatus, setWebGLStatus] = useState(true);

	useEffect(() => {
		let supportedXtensionList = document
			.createElement("canvas")
			.getContext("experimental-webgl")
			.getSupportedExtensions();

		let mustHaves = ["OES_texture_float_linear"];
		for (let mustHave of mustHaves) {
			if (supportedXtensionList.indexOf(mustHave) === -1) {
				setWebGLStatus(false);
				break;
			}
		}
	}, []);
	return (
		<div className="rounded-xl" style={{ borderRadius: "5px" }}>
			{webGLStatus ? (
				<div className="video-animation-container">
					<iframe
						onLoad={() => {
							setIframeLoaded(true);
						}}
						style={{
							// maxHeight: isMobile ? "700px" : "1000px",
							// width: "595px",
							// position: "relative",
							// height: "386px",
							// top: "-55px",
							borderRadius: "5px",
						}}
						className="rounded-xl video-animation-container"
						src="https://api.acy.finance/app.html"
						title="ACY"
						frameBorder="0"
					></iframe>
				</div>
			) : null}
		</div>
	);
};

export default VideoPanel;
