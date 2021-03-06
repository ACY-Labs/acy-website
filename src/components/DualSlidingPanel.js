import "./style.css";
import "./DualSlidingPanel.css";
import { Exchange, Liquidity, JumpButton } from ".";
import { useState } from "react";

const DualSlidingPanel = ({
	panelOneLeftActive,
	setPanelOneLeftActive,
	panelOneRightActive,
	setPanelOneRightActive,
}) => {
	let [iframeLoaded, setIframeLoaded] = useState(false);

	return (
		<div class="panel-container-1">
			<section class="panels">
				<article class="panels__side panels__side--left">
					<div class="panels__side panels__side--inner-left">
						{/* <p>"Changes and progress very rarely are gifts from above. They come out of struggles from below."</p> */}
						<Exchange></Exchange>
						{/* <JumpButton></JumpButton> */}
					</div>
					<div
						class="panels__side panels__side--inner flex flex-col items-center"
						id="clickleft"
						onClick={() => setPanelOneLeftActive(!panelOneLeftActive)}
					>
						<h1 class="panels__headline">CRYPTO TRADERS</h1>
						<p>Enable traders to get the optimal output</p>
						{/* <div className="arrow-container">
							<svg class="arrow arrow--left arrow-1" viewBox="0 0 24 24">
								<path d="M0 0h24v24h-24z" fill="none" />
								<path d="M20 11h-12.17l5.59-5.59-1.42-1.41-8 8 8 8 1.41-1.41-5.58-5.59h12.17v-2z" />
							</svg>
						</div> */}
					</div>
				</article>
				<article class="panels__side panels__side--right">
					<div
						class="panels__side panels__side--inner flex-col"
						id="clickright"
						onClick={() => setPanelOneRightActive(!panelOneRightActive)}
					>
						<h1 class="panels__headline">LIQUIDITY MINERS</h1>
						<p>Enable miners to earn more transaction fees</p>

						{/* <div className="arrow-container">
							<svg class="arrow arrow--right arrow-1" viewBox="0 0 24 24">
								<path d="M0 0h24v24h-24z" fill="none" />
								<path d="M12 4l-1.41 1.41 5.58 5.59h-12.17v2h12.17l-5.58 5.59 1.41 1.41 8-8z" />
							</svg>
						</div> */}
					</div>
					<div class="panels__side panels__side--inner-right">
						{/* <p>"The biggest benefit of Apollo was the inspiration it gave to a growing generation to get into science and aerospace."</p> */}
						<Liquidity setIframeLoaded={setIframeLoaded}></Liquidity>{" "}
					</div>
				</article>
			</section>
		</div>
	);
};

export default DualSlidingPanel;
