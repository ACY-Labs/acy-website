








const SpaceLoader = ()=> {
    <div className = "spacehead">
    <div className = "spaceloader">
    <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
     <path id="rocketPath" d="M300,80c121.5,0,220,98.5,220,220S421.5,520,300,520,80,421.5,80,300,178.5,80,300,80" fill="none" stroke="#e7dece" stroke-miterlimit="10"/>
    <filter id="glow" x="-100%" y="-100%" width="250%" height="250%">
      <feGaussianBlur stdDeviation="15" result="coloredBlur" />
      <feOffset dx="0" dy="0" result="offsetblur"></feOffset>
      <feFlood id="glowAlpha" flood-color="#41C2F4" flood-opacity="0.71"></feFlood>
      <feComposite in2="offsetblur" operator="in"></feComposite>
      <feMerge>
        <feMergeNode/>          
        <feMergeNode in="SourceGraphic"></feMergeNode>
      </feMerge>
    </filter>   
     <circle class="dot" cx="0" cy="0" r="4" fill="red"/>
       <radialGradient id="dotGrad" cx="0" cy="0" r="33" gradientUnits="userSpaceOnUse">
      <stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:1"/>
      <stop  offset="0.3" style="stop-color:#0867C7;stop-opacity:0.6"/>
      <stop  offset="0.8" style="stop-color:#081029;stop-opacity:0"/>
  </radialGradient>
     </defs>
   <g class="container"  />
   <g>
     <circle class="ringBg" cx="0" cy="0" r="4" stroke="#64A8AF" stroke-width="60" fill="none" opacity="0.085"/>
     <circle class="ring" filter="url(#glow)" cx="0" cy="0" r="4" stroke="#38DFF1" stroke-width="13" stroke-linecap="round" fill="#26247D" fill-opacity="0.15"  opacity=".31"/>
    </g>
        <g id="rocket">
          <g>
            <path d="M20.91,13.4v9.83H63.08V16q-9.82-5.84-22.88-5.64A75.41,75.41,0,0,0,20.91,13.4" fill="#e7dece"/>
            <path d="M63.08,30.49V23.23H20.91v9.84A75.81,75.81,0,0,0,40.2,36.13Q53.25,36.32,63.08,30.49Z" fill="#fff7f0"/>
            <circle cx="52.41" cy="23.17" r="4.15" fill="#a5c6e7"/>
          </g>
          <path d="M40.2,36.13a75.81,75.81,0,0,1-19.29-3.06q-5.22,9.41-5.84,13.39Q27,46.1,40.2,36.13" fill="#2a47c4"/>
          <path d="M20.91,13.4A75.41,75.41,0,0,1,40.2,10.33Q27,.37,15.07,0,15.7,4,20.91,13.4Z" fill="#2a47c4"/>
          <path d="M15.57,19.29v9l5.34,1.55V16.48l-5.34,1.66Z" fill="#51576b"/>
          <path d="M71.43,23.92a1.82,1.82,0,0,0,.13-.68,2.09,2.09,0,0,0-.11-.63,3.14,3.14,0,0,0-.56-1q-2.33-3-7.81-5.6V30.49q5.48-2.58,7.81-5.59a3.7,3.7,0,0,0,.54-1" fill="#2a47c4"/>
          <g id="rocketFlame">
            <path d="M15.57,21.8c-3.68-.21-5.93.26-6.77,1.42.84,1.15,3.09,1.62,6.77,1.41Z" fill="#edbd52"/>
            <path d="M15.57,21.8V19.29Q7.14,16.35,0,23.14,7.14,30,15.57,27.08V24.63c-3.68.21-5.93-.26-6.77-1.41C9.64,22.06,11.89,21.59,15.57,21.8Z" fill="#d64231"/>
          </g>
          <path d="M42.85,23.17c-9.58-3.18-28.49-1-28.32.06C14.48,24.4,33.29,26.85,42.85,23.17Z" fill="#2a47c4"/>
        </g>     
     <circle id="dot" fill="url(#dotGrad)" cx="300" cy="120" r="33"/>  
  </svg>
  </div>
  </div>
}



export default SpaceLoader;