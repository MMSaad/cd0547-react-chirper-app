import { connect } from "react-redux";
import tweets from "../reducers/tweets";
import Uhf from "./Tweet";

const Dashboard = (props) => {
  return (
    <div className="container">
      <h1 className="center">UHF</h1>
      <div className="tweet-info">
        <div className="tweet">
          <div className="row">
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h1>Scanned</h1>
                  <h6>{props.uhf?.scaned}</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h1>Today Unique</h1>
                  <h6>{props.uhf?.totalToday}</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h1>Two times</h1>
                  <h6>{props.uhf?.twoTimesToday}</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h1>Three Times</h1>
                  <h6>{props.uhf?.threeTimesToday}</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h1>More than Three times</h1>
                  <h6>{props.uhf?.moreThanThreeTimesToday}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ uhf,users }) => {
  console.log(uhf,users);
  return {
    uhf
  };
};

export default connect(mapStateToProps)(Dashboard);
