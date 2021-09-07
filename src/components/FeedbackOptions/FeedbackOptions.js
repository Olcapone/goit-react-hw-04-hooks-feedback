import React from "react";
import shortid from "shortid";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const newArr = Object.keys({ ...options });

  return (
    <ul className={s.list}>
      {newArr.map((option) => (
        <li className={s.item} key={shortid.generate()}>
          <button className={s.button} onClick={onLeaveFeedback}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
