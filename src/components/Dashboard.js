import { connect } from "react-redux";
import tweets from "../reducers/tweets";
import Uhf from "./Tweet";

const Dashboard = (props) => {
  return (
    <div className="row">
      <h1 className="center"> بوابة الدخول - UHF</h1>
      <div className="tweet-info">
        <div>
          <div className="row">
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h1>عمليات المسح</h1>
                  <h6 className="counter">{props.uhf?.scaned}</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h1>الاشخاص</h1>
                  <h6 className="counter">{props.uhf?.totalToday}</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h1>تم المسح مرتين</h1>
                  <h6 className="counter">{props.uhf?.twoTimesToday}</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h1>تم المسح ثلاث مرات</h1>
                  <h6 className="counter">{props.uhf?.threeTimesToday}</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h1>تم المسح اكثر من ثلاث مرات</h1>
                  <h6 className="counter">
                    {props.uhf?.moreThanThreeTimesToday}
                  </h6>
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
