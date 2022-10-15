import React, { useEffect, useState } from "react";
import Hero from "../components/detailPage/hero/Hero";
import { useParams } from "react-router-dom";

function DetailPage() {
  const params = useParams();
  const [information, setInformation] = useState<any>({});
  useEffect(() => {
    fetch("https://api.extrazone.com/promotions?Id=" + params.id, {
      headers: {
        "X-Country-Id": "TR",
        "X-Language-Id": "TR",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setInformation(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div id="detailPageContainer">
      <button id="backButton">
        <img id="" src="/icons/backButton.png" alt="back button"></img>
      </button>
      <Hero information={information}></Hero>
      <div
        id="description"
        dangerouslySetInnerHTML={{ __html: information.Description }}
      />

      <button id="navbar">Hemen Katıl</button>
    </div>
  );
}

export default DetailPage;
