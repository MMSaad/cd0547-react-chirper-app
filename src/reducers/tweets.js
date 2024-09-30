import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from "../actions/tweets";

function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      };
    case TOGGLE_TWEET:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes:
            action.hasLiked === true
              ? state[action.id].likes.filter((uid) => uid !== action.authUser)
              : state[action.id].likes.concat([action.authUser]),
        },
      };
    case ADD_TWEET:
      let replyingTo = {};
      if (action.tweet.replyingTo !== null) {
        replyingTo = {
          [action.tweet.replyingTo]: {
            ...state[action.tweet.replyingTo],
            replies: state[action.tweet.replyingTo].replies.concat([
              action.tweet.id,
            ]),
          },
        };
      }
      return {
        ...state,
        [action.tweet.id]: action.tweet,
        ...replyingTo,
      };
    default:
      return state;
  }
}

export default tweets;
