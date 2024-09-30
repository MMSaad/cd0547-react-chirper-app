import { showLoading, hideLoading } from "react-redux-loading-bar";
import { saveLikeToggle, saveTweet } from "../utils/api";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

export const receiveTweets = (tweets) => {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
};

export const toggleTweet = ({ id, hasLiked, authUser }) => {
  return {
    type: TOGGLE_TWEET,
    id,
    hasLiked,
    authUser,
  };
};

export const handleToggleTweet = (id, hasLiked, authUser) => {
  return (dispatch) => {
    dispatch(toggleTweet({ id, hasLiked, authUser }));
    saveLikeToggle({ id, hasLiked, authUser }).catch((e) => {
      console.warn("Error in handleToggleTweet: ", e);
      dispatch(toggleTweet({ id, hasLiked, authUser }));
      alert("There was an error liking the tweet. Try again.");
    });
  };
};

const addTweet = (tweet) => {
  return {
    type: ADD_TWEET,
    tweet,
  };
};

export const handleAddTweet = (text, replyingTo) => {
  return (dispatch, getState) => {
    dispatch(showLoading());
    let state = getState();
    let author = state.authUser;
    saveTweet({ text, author, replyingTo })
      .then((tweet) => {
        console.warn("New Tweet: ", tweet);
        dispatch(addTweet(tweet));
        dispatch(hideLoading());
      })
      .catch((e) => {
        dispatch(hideLoading());
        console.warn("Error in handleAddTweet: ", e);
        alert("There was an error adding the tweet. Try again.");
      });
  };
};
