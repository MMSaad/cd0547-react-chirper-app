import { connect } from "react-redux";
import NewTweet from "./NewTweet";
import Tweet from "./Tweet";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const TweetPage = (props) => {
  return (
    <div>
      {props.id && <Tweet id={props.id} />}
      <NewTweet id={props.id} />
      <ul>
        {props.replies.map((reply) => (
          <Tweet id={reply} key={reply} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ dispatch, tweets }, props) => {
  const { id } = props.router.params;
  return {
    dispatch,
    id: id,
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort(
          (a, b) => tweets[b].timestamp - tweets[a].timestamp
        ),
  };
};
export default withRouter(connect(mapStateToProps)(TweetPage));
