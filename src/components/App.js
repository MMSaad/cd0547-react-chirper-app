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
      console.log("timer");
      fetch("https://localhost:7285/home/api").then((response) => {
        //console.log(response);
        response.json().then((result) => {
          //console.log(result);
          props.dispatch(handleInitialData(result));
        });
      });
      //GET and update store
    }, 5000);
  }, []);
  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Nav />
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
