import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewTweet = ({ dispatch, id }) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };


  return (
    <div className="new-tweet">
      <h2 className="center">New Tweet</h2>


    </div>
  );
};

export default connect()(NewTweet);
