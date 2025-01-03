import { connect } from "react-redux";
import handleInitialData from "../actions/shared";
import { useEffect, Fragment } from "react";
import Dashboard from "./Uhf";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import TweetPage from "./TweetPage";
import MainDashboard from "./Dashboard";
import Ble from "./Ble";
import Images from "./Images";
import Qr from "./Qr";
import Qr2 from "./Qr2";
import Qr3 from "./Qr3";


const App = (props) => {
  useEffect(() => {
    const interval = setInterval(() => {
 loadData();
    }, 1000);

    // Cleanup the interval on unmount or when dependencies change
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once


  const playAudio = () => {
    try {
      const audio = new Audio("./error.mp3");
      audio.play();
    } catch (e) {
      console.log(e);
    }
  };

  var loadData = () => {
    try {
      //https://localhost:7284
      fetch("/api/data").then((response) => {
        //console.log(response);
        console.log("interval with data");
        response.json().then((result) => {
          //console.log(result);
          props.dispatch(handleInitialData(result));
          if (result.uhf.alerts > 0) {
            playAudio();
          }
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Fragment>

      <div>
        <div className="row ">
          <div>
            <div className="row main-row">
              <div className="col-4">
                <img src="newlogo.png" alt="logo" className="new-logo" />
              </div>
              <div className="col-4">
              <h2>مخيم تجريبي</h2>
                </div>
              <div className="col-4">
                  {props.uhf.alerts > 0 && (  
                <div className="alert alert-danger">دخول غير مصرح به</div>
                  )} 
              </div>
            </div>
          </div>
        </div>
        <div className="row main-content">
          {/* <Nav /> */}

          {props.loading === true ? null : (
            <Routes>
              <Route path="/" exact element={<MainDashboard />} />
              <Route path="/full" exact element={<Dashboard />} />
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

const mapStateToProps = ({ uhf }) => {
  return {
    uhf,
    loading: false,
  };
};

export default connect(mapStateToProps)(App);
