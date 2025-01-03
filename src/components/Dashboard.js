import { connect } from "react-redux";
import Dashboard from "./Uhf";
import Ble from "./Ble";
import Images from "./Images";
import Employees from "./Employees";

const MainDashboard = (props) => {
  return (
    <div className="row">
      <div className="col-12">
            <Dashboard />
      </div>
      <div className="row add-margin">
        <div className="col-6">
              <Images />
        </div>
        <div className="col-6">
              <Employees />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ uhf, ble, images,employees,capacity }) => {
  return {
    uhf,
    ble,
    images,
    employees,
    capacity
  };
};

export default connect(mapStateToProps)(MainDashboard);
