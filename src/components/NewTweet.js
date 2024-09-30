import { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";
import { useNavigate } from "react-router-dom";

const NewTweet = ({ dispatch, id }) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleNewTweet = (e) => {
    e.preventDefault();
    let tweet = text;
    setText("");
    dispatch(handleAddTweet(tweet, id));
    if (!id) {
      navigate("/");
    }
  };
  return (
    <div className="new-tweet">
      <h2 className="center">New Tweet</h2>

      <form onSubmit={handleNewTweet} className="new-tweet">
        <textarea
          className="textarea"
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
          maxLength={240}
        />
        <div className="tweet-length">{text.length}/240</div>
        <button className="btn" type="submit" disabled={text === ""}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default connect()(NewTweet);
