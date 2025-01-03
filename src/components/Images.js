import { connect } from "react-redux";

const Images = (props) => {
  return (
    <div className="row ">
      <div className="madar-card-header">
        <h2>الحجاج</h2>
      </div>
      <div className="madar-card-body">
        <div className="row">
          <div className="col-3 slim-bar">
            <div className="card">
              <div className="card-body small-card-body">
                <div className="row scan-icon-bar">
                  <div className="col-12">
                    <h1 className="header">عمليات المسح</h1>
                  </div>
                  <div className="col-12">
                    <h6 className="counter">{props.uhf?.pilgrimsScanned}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3 slim-bar">
            <div className="card">
              <div className="card-body  small-card-body">
                <div className="row pilgrims-icon-bar">
                  <h1 className="header">الحجاج</h1>
                  <div className="col-12">
                    <h6 className="counter">{props.uhf?.pilgrimsTotalToday}</h6>
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
                      {props.uhf?.pilgrimsTwoTimesToday}
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
                  <h1 className="header">تم المسح اكثر من ثلاث </h1>

                  <div className="col-12">
                    <h6 className="counter">
                      {props.uhf?.pilgrimsMoreThanThreeTimesToday}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {props.images.map((image) => (
            <div key={image?.date} className="col-6 slim-bar slim">
              <div className="card pilgrim-card">
                <div className="card-body slim small-card-body">
                  <img
                    className="pilgrim-image"
                    src={image?.tag + ".jpg"}
                    // onError="this.src='persons.svg'; this.onerror=null;"
                    alt={image?.name}
                  />
                  <h6 className="pilgrim-name">{image?.name}</h6>

                  <h6 className="color-header">
                    {image?.groupName} - {image?.packageName} -{" "}
                    {image?.countryName}
                  </h6>
                  <div className="row">
                    <div className="col-6 left-align">
                      <img
                        className="pilgrim-nationality"
                        src={
                          "/flags/" + image?.countryCode.toLowerCase() + ".svg"
                        }
                        alt={image?.countryName}
                      />
                    </div>
                    <div className="col-6 right-align">
                      <img
                        className="pilgrim-company"
                        src={image?.companyCode + ".png"}
                        alt={image?.companyName}
                      />
                    </div>

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

const mapStateToProps = ({ images, uhf, capacity }) => {
  return {
    images,
    uhf,
    capacity
  };
};

export default connect(mapStateToProps)(Images);
