import { connect } from "react-redux";

const Images = (props) => {
  return (
    <div className="row">
      {/* <h1 className="center"> بوابة الدخول - Images</h1> */}
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
                      alt={image?.name}
                    />
                    <div className="row">
                      <div className="col-6">
                        <img
                          className="pilgrim-nationality"
                          src={
                            "https://madarcdn.gamaksard.com//madar/flags/" +
                            image?.countryCode.toLowerCase() +
                            ".svg"
                          }
                          alt={image?.countryName}
                        />
                      </div>
                      <div className="col-6">
                        <img
                          className="pilgrim-company"
                          src={image?.companyCode + ".png"}
                          alt={image?.companyName}
                        />
                      </div>
                    </div>

                    <h6 className="pilgrim-name">{image?.name}</h6>
                    <h6 className="white-text">{image?.companyName}</h6>
                    <h6 className="white-text">
                      {image?.groupName} - {image?.packageName} -{" "}
                      {image?.countryName}
                    </h6>
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
