import { connect } from "react-redux";

const Images = (props) => {
  return (
    <div className="row">
      <h1 className="main-header"> التتبع الحي</h1>
      <div className="">
        <div>
          <div className="row">
            {props.images.map((image) => (
              <div key={image?.time} className="col-3 slim">
                <div className="card ">
                  <div className="card-body slim">
                    <img
                      className="pilgrim-image"
                      src={image?.tag + ".jpg"}
                      onerror="this.src='persons.svg'; this.onerror=null;"
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
                            "/flags/" +
                            image?.countryCode.toLowerCase() +
                            ".svg"
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
                          <div className="col-3 entry-count">
                            {image?.counts}
                          </div>
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
    </div>
  );
};

const mapStateToProps = ({ images, ble }) => {
  console.log(images, ble);
  return {
    images,
  };
};

export default connect(mapStateToProps)(Images);
