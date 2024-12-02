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
import Qr2 from "./Qr2";
import Qr3 from "./Qr3";
const App = (props) => {
  useEffect(() => {
    setInterval(() => {
      loadData();
    }, 2000);
  }, []);

  var loadData = () => {
    try {
      fetch("/api/data").then((response) => {
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
      <div>
        <div className="row white-bar">
          <div>
            <img src="newlogo.png" alt="logo" className="new-logo" />
          </div>
        </div>
        <div className="container">
          {/* <Nav /> */}

          {props.loading === true ? null : (
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/full" exact element={<MainDashboard />} />
              <Route path="/ble" element={<Ble />} />
              <Route path="/images" element={<Images />} />
              <Route path="/qr" element={<Qr />} />
              <Route path="/qr2" element={<Qr2 />} />
              <Route path="/qr3" element={<Qr3 />} />
              <Route path="/tweet/:id" element={<TweetPage />} />
            </Routes>
          )}
        </div>
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
