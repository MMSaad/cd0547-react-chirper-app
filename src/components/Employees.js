import { connect } from "react-redux";

const Employees = (props) => {
  return (
    <div className="row add-margin">
      <div className="madar-card-header">
        <h2>الموظفين</h2>
      </div>
      <div className="madar-card-body">
        <div className="row">
          <div className="col-3 slim-bar">
            <div className="card">
              <div className="card-body  small-card-body">
                <div className="row scan-icon-bar">
                  <div className="col-12">
                    <h1 className="header">عمليات المسح</h1>
                  </div>
                  <div className="col-12">
                    <h6 className="counter">{props.uhf?.employeesScanned}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 slim-bar">
            <div className="card">
              <div className="card-body  small-card-body">
                <div className="row employees-icon-bar">
                  <h1 className="header">الموظفين</h1>
                  <div className="col-12">
                    <h6 className="counter">
                      {props.uhf?.employeesTotalToday}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 slim-bar">
            <div className="card">
              <div className="card-body  small-card-body">
                <div className="row two-icon-bar">
                  <h1 className="header">تم المسح مرتين</h1>
                  <div className="col-12">
                    <h6 className="counter">
                      {props.uhf?.employeesTwoTimesToday}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 slim-bar">
            <div className="card">
              <div className="card-body  small-card-body">
                <div className="row more-icon-bar">
                  <h1 className="header">  اكثر من ثلاث </h1>

                  <div className="col-12">
                    <h6 className="counter">
                      {props.uhf?.employeesMoreThanThreeTimesToday}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {props.employees.map((image) => (
            <div key={image?.date} className="col-6 slim-bar slim">
              <div className="card ">
                <div className="card-body slim small-card-body">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="pilgrim-nationality"
                        src={
                          "/flags/" + image?.countryCode.toLowerCase() + ".svg"
                        }
                        alt={image?.countryName}
                      />
                    </div>
                    <div className="col-6">
                      <img
                        className="pilgrim-image"
                        src={image?.tag + ".jpg"}
                        // onError="this.src='persons.svg'; this.onerror=null;"
                        alt={image?.name}
                      />
                    </div>
                    <div className="col-3">
                      <img
                        className="pilgrim-company"
                        src={image?.companyCode + ".png"}
                        alt={image?.companyName}
                      />
                    </div>
                  </div>

                  <h6 className="pilgrim-name">{image?.name}</h6>

                  <h6 className="color-header">
                    {image?.groupName} - {image?.packageName}
                  </h6>
                  <div className="row">
                    <div className="count">
                      <div className="row count-holder">
                        <div className="col-2">
                          <img
                            className="entry-icon"
                            src="entry.png"
                            alt="entry"
                          />
                        </div>
                        <div className="col-7 entry-date">
                          <strong> وقت الدخول</strong>
                          <br />
                          {image?.lastEntry}
                        </div>
                        <div className="col-3 entry-count">{image?.counts}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ employees, uhf }) => {
  return {
    employees,
    uhf,
  };
};

export default connect(mapStateToProps)(Employees);
