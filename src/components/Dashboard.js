import { connect } from "react-redux";
import  Dashboard   from "./Uhf";

const MainDashboard = (props) => {
  return (
    <div className="row">
      <div className="col-4">
        <Dashboard />
      </div>
    </div>
  );
};

const mapStateToProps = ({ uhf, ble,images }) => {
  console.log(uhf);
  return {
    uhf,ble,images
  };
};

export default connect(mapStateToProps)(MainDashboard);
