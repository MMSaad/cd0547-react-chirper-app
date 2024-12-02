import { connect } from "react-redux";

const Dashboard = (props) => {
  return (
    <div className="row">
      <h1 className="main-header"> بوابة الدخول - UHF</h1>
      <div className="tweet-info">
        <div>
          <div className="row">
            <div className="col-6 slim-bar">
              <div className="card">
                <div className="card-body">
                  <div className="row icon-bar">
                    <div className="col-12">
                      <h1 className="header">عمليات المسح</h1>
                    </div>
                    <div className="col-12">
                      <h6 className="counter">{props.uhf?.scaned}</h6>
                      <span>حاج / حجاج</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 slim-bar">
              <div className="card">
                <div className="card-body">
                  <div className="row icon-bar">
                    <h1 className="header">الاشخاص</h1>
                    <div className="col-12">
                      <h6 className="counter">{props.uhf?.totalToday}</h6>
                      <span>حاج / حجاج</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 slim-bar">
              <div className="card">
                <div className="card-body">
                  <div className="row icon-bar">
                    <h1 className="header">تم المسح مرتين</h1>
                    <div className="col-12">
                      <h6 className="counter">{props.uhf?.twoTimesToday}</h6>
                      <span>حاج / حجاج</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 slim-bar">
              <div className="card">
                <div className="card-body">
                  <div className="row icon-bar">
                    <h1 className="header">تم المسح اكثر من ثلاث </h1>

                    <div className="col-12">
                      <h6 className="counter">
                        {props.uhf?.moreThanThreeTimesToday}
                      </h6>
                      <span>حاج / حجاج</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ uhf, users }) => {
  console.log(uhf, users);
  return {
    uhf,
  };
};

export default connect(mapStateToProps)(Dashboard);
