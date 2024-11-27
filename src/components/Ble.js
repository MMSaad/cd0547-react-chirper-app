import { connect } from "react-redux";

const Ble = (props) => {
  return (
    <div className="row">
      <h1 className="center"> بوابة الدخول - BLE</h1>
      <div className="tweet-info">
        <div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h1 className="header">عمليات المسح</h1>
                  <h6 className="counter">{props.ble?.scaned}</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h1 className="header">الاشخاص</h1>
                  <h6 className="counter">{props.ble?.totalToday}</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h1 className="header">تم المسح مرتين</h1>
                  <h6 className="counter">{props.ble?.twoTimesToday}</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h1 className="header">تم المسح ثلاث مرات</h1>
                  <h6 className="counter">{props.ble?.threeTimesToday}</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h1 className="header">تم المسح اكثر من ثلاث مرات</h1>
                  <h6 className="counter">
                    {props.ble?.moreThanThreeTimesToday}
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

const mapStateToProps = ({ ble, users,tweets }) => {
  console.log(ble, users, tweets);
  return {
    ble,
  };
};

export default connect(mapStateToProps)(Ble);
