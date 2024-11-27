import { connect } from "react-redux";
import handleInitialData from "../actions/shared";
import { useEffect, Fragment } from "react";
import Dashboard from "./Uhf";
import LoadingBar from "react-redux-loading-bar";
import NewTweet from "./NewTweet";
import { Routes, Route } from "react-router-dom";
import TweetPage from "./TweetPage";
import MainDashboard from "./Dashboard";
import Nav from "./Nav";
import Ble from "./Ble";
import Images from "./Images";
import Qr from "./Qr";
const App = (props) => {
  useEffect(() => {
    setInterval(() => {
      loadData();
    }, 5000);
  }, []);

  var loadData = () => {
    try {
      fetch("https://localhost:7285/home/api").then((response) => {
        //console.log(response);
        response.json().then((result) => {
          //console.log(result);
          props.dispatch(handleInitialData(result));
        });
      });
      } catch (e) {
      console.log(e);
    }
  };
  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <img src="newlogo.png" alt="logo" className="new-logo" />
        {/* <Nav /> */}
        {props.loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/full" exact element={<MainDashboard />} />
            <Route path="/ble" element={<Ble />} />
            <Route path="/images" element={<Images />} />
            <Route path="/qr" element={<Qr />} />
            <Route path="/tweet/:id" element={<TweetPage />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({}) => {
  return {
    loading: false,
  };
};

export default connect(mapStateToProps)(App);
