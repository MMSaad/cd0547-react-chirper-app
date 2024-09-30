import { connect } from "react-redux";
import tweets from "../reducers/tweets";
import Tweet from "./Tweet";

const Dashboard = (props) => {
  return (
    <div className="container">
      <h1 className="center">Your timeline</h1>
      {props.tweetIds.map((id) => (
        <Tweet key={id} id={id} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ tweets }) => {
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    ),
  };
};

export default connect(mapStateToProps)(Dashboard);
