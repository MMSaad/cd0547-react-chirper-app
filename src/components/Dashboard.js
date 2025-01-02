import { connect } from "react-redux";
import Dashboard from "./Uhf";
import Ble from "./Ble";
import Images from "./Images";
import Employees from "./Employees";

const MainDashboard = (props) => {
  return (
    <div className="row">
      <div className="col-6">
        <Dashboard />
      </div>
      <div className="col-6">
        <Ble />
      </div>
      <div className="row">
        <div className="col-6">
          <h1 className="main-header">  الحجاج</h1>
          <Images />
        </div>
        <div className="col-6">
          <h1 className="main-header">  الموظفين</h1>
          <Employees />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ uhf, ble, images,employees }) => {
  console.log(employees);
  return {
    uhf,
    ble,
    images,
    employees,
  };
};

export default connect(mapStateToProps)(MainDashboard);
