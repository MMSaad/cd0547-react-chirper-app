import { connect } from "react-redux";

const Uhf = (props) => {


  return (
    <div className="tweet-info">
      <div className="tweet">
        <div class="row">
          <div class="col-3">
            <div class="card">
              <div class="card-body">
                <h1>Scanned</h1>
                <h6>@Model.Scaned</h6>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card">
              <div class="card-body">
                <h1>Today Unique</h1>
                <h6>@Model.TotalToday</h6>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card">
              <div class="card-body">
                <h1>Two times</h1>
                <h6>@Model.TwoTimesToday</h6>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card">
              <div class="card-body">
                <h1>Three Times</h1>
                <h6>@Model.ThreeTimesToday</h6>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card">
              <div class="card-body">
                <h1>More than Three times</h1>
                <h6>@Model.MoreThanThreeTimesToday</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ uhf }) => {
  return {
    uhf
  };
};

export default connect(mapStateToProps)(Uhf);
