import { connect } from "react-redux";
import Dashboard from "./Uhf";
import Ble from "./Ble";
import Images from "./Images";

const MainDashboard = (props) => {
  return (
    <div className="row">
      <div className="col-6">
        <Dashboard />
      </div>
      <div className="col-6">
        <Ble />
      </div>
      <div className="col-12">
        <Images />
      </div>
    </div>
  );
};

const mapStateToProps = ({ uhf, ble, images }) => {
  console.log(uhf);
  return {
    uhf,
    ble,
    images,
  };
};

export default connect(mapStateToProps)(MainDashboard);
