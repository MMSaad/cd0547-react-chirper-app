import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import { handleToggleTweet } from "../actions/tweets";
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";

const Tweet = (props) => {
  const navigate = useNavigate();
  const toggleTweet = (e) => {
    props.dispatch(
      handleToggleTweet(props.tweet.id, props.tweet.hasLiked, props.authUser)
    );
  };

  const toParent = (e) => {
    e.preventDefault();
    navigate(`/tweet/${props.tweet.parent.id}`);
  };

  return (
    <div className="tweet-info">
      <div className="tweet">
        <img
          src={props.tweet.avatar}
          alt={`Avatar of ${props.tweet.name}`}
          className="avatar"
        />
        <div className="tweet-info">
          <Link to={`/tweet/${props.tweet.id}`}>
            <span>{props.tweet.name}</span>
            <div>{formatDate(props.tweet.timestamp)}</div>
            {props.tweet.parent && (
              <button className="replying-to" onClick={toParent}>
                Replying to @{props.tweet.parent.author}
              </button>
            )}
            <p>{props.tweet.text}</p>
          </Link>
          <div>
            <div className="tweet-icons">
              <Link to={`/tweet/${props.tweet.id}`}>
                <TiArrowBackOutline className="tweet-icon" />
              </Link>
              {props.tweet.replies > 0 && <span>{props.tweet.replies}</span>}
              {props.tweet.hasLiked === true ? (
                <TiHeartFullOutline
                  className="tweet-icon"
                  color="#e0245e"
                  onClick={toggleTweet}
                />
              ) : (
                <TiHeartOutline className="tweet-icon" onClick={toggleTweet} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authUser, users, tweets }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authUser, parentTweet)
      : null,
  };
};

export default connect(mapStateToProps)(Tweet);
