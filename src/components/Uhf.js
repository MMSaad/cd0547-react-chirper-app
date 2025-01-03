import { connect } from "react-redux";

const Dashboard = (props) => {
  return (
    <div className="row main-row">
      <div className="col-4 ">
        <h1 className="main-header ">بوابة دخول أ</h1>
      </div>
      <div className="col-4">
        <h1 className="main-header">
          السعة الحالية
          <span>
            <strong>&nbsp;{props.capacity}</strong>
          </span>
        </h1>
      </div>
      <div className="col-4">
        <h1 className="main-header">
          عمليات دخول غير مصرح بها
          <span>
            <strong>&nbsp;{props.uhf.todayAlerts}</strong>
          </span>
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = ({ uhf,capacity }) => {

  return {
    uhf,
    capacity
  };
};

export default connect(mapStateToProps)(Dashboard);
