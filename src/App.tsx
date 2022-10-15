import React from "react";
import "./scss/style.scss";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

function App({ promotionListReducer }: any) {

  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/campaign/:seoName/:id" element={<DetailPage></DetailPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state: any): object => {
  return {
    promotionListReducer: state.promotionListReducer,
  };
};

export default connect(mapStateToProps)(App);
