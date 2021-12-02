
import "./RoadMap.css"

import DetailCard from "./DetailCard";
import { Popover, Button } from 'antd';




const RoadMap = () => {


    return(
    <div class="roadmap">
    <div class="roadmap-bg"></div>
    <h1 class="roadmap-title">Roadmap</h1>
    <ol class="roadmap-timeline js-roadmap-timeline">
        <li class="roadmap-timeframe js-roadmap-timeframe">
        <DetailCard text = {"123123123123"}></DetailCard>

          <div class="roadmap-date" >December,2021</div>
          <svg class="roadmap-swirly" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" viewBox="-2 0 54 80"><path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path><path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path></svg>
          <ul class="roadmap-events">
          <li class="roadmap-event"><div class="roadmap-vline"></div>Testnet Launch</li>
          </ul>
        </li>
        <li class="roadmap-timeframe js-roadmap-timeframe">
          <div class="roadmap-date">January to March, 2022</div>
          <svg class="roadmap-swirly" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" viewBox="-2 0 54 80"><path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path><path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path></svg>
          <ul class="roadmap-events">
            <li class="roadmap-event"><div class="roadmap-vline"></div>Mainnet Launch</li>
            {/* <li class="roadmap-event"><div class="roadmap-vline"></div>GUI wallet with integrated miner for Windows</li> */}
          </ul>
        </li>
  
        <li class="roadmap-timeframe js-roadmap-timeframe">
          <div class="roadmap-date">April to June, 2022</div>
          <svg class="roadmap-swirly" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" viewBox="-2 0 54 80"><path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path><path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path></svg>
          <ul class="roadmap-events">
         
            <li class="roadmap-event"><div class="roadmap-vline"></div>ACYDAO Launch</li>
            {/* <li class="roadmap-event"><div class="roadmap-vline"></div>Community built a block explorer based on original developers code</li>
            <li class="roadmap-event"><div class="roadmap-vline"></div>Original developer gives the ownership of the project to the community</li>
            <li class="roadmap-event"><div class="roadmap-vline"></div>Xdag.org is fully operational</li>
            <li class="roadmap-event"><div class="roadmap-vline"></div>The original code is being cleaned</li> */}
          </ul>
        </li>
  
        <li class="roadmap-timeframe js-roadmap-timeframe">
          <div class="roadmap-date">July to September, 2022</div>
          <svg class="roadmap-swirly" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" viewBox="-2 0 54 80"><path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path><path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path></svg>
          <ul class="roadmap-events">
          <li class="roadmap-event"><div class="roadmap-vline"></div>API/SDK for ecosystems</li>

          </ul>
        </li>
  
        <li class="roadmap-timeframe js-roadmap-timeframe">
          <div class="roadmap-date">Future plans</div>
          {/* <svg class="roadmap-swirly" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" viewBox="-2 0 54 80"><path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path><path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path></svg> */}
          <ul class="roadmap-events">
            
            {/* <li class="roadmap-event"><div class="roadmap-vline"></div>Social media and marketing</li>
            <li class="roadmap-event"><div class="roadmap-vline"></div>Escrow services</li> */}
          </ul> 
        </li>
  
    </ol>
  </div>
  )
}

export default RoadMap;