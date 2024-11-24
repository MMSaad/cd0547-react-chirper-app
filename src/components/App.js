import { connect } from "react-redux";
import handleInitialData from "../actions/shared";
import { useEffect, Fragment } from "react";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import NewTweet from "./NewTweet";
import { Routes, Route } from "react-router-dom";
import TweetPage from "./TweetPage";
import Nav from "./Nav";
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
            <Route path="/new" element={<NewTweet />} />
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
