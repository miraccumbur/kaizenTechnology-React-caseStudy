import React, { useEffect, useState } from "react";

function Hero({information}:any) {

  return <div id="hero">
    <img id="image" src={information.ImageUrl} alt="image"></img>
    <img id="brandImage" alt="brand image" src={information.BrandIconUrl}></img>
    <p>{information.RemainingText}</p>
    </div>;
}

export default Hero;
