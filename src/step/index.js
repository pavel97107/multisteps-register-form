import React from "react";
import Step from "./element";
import "./styles.css";

export default ({ data }) => {
  return (
    <div className="steps">
      <div className="steps__picture">
        <Step
          active={data[0].isActive}
          icon={`fas ${data[0].isCompleted ? "fa-check" : "fa-user"}`}
          completed={data[0].isCompleted}
        />
        <Step
          active={data[1].isActive}
          icon={`fas ${data[1].isCompleted ? "fa-check" : "fa-user-lock"}`}
          completed={data[1].isCompleted}
        />
        <Step
          active={data[2].isActive}
          icon={`fas ${data[2].isCompleted ? "fa-check" : "fa-user-tag"}`}
          completed={data[2].isCompleted}
        />
        <Step
          active={data[3].isActive}
          icon={`fas ${data[3].isCompleted ? "fa-check" : "fa-user-check"}`}
          completed={data[3].isCompleted}
        />
      </div>
      <div className="steps__title">
        <div>{data[0].title}</div>
        <div>{data[1].title}</div>
        <div>{data[2].title}</div>
        <div>{data[3].title}</div>
      </div>
    </div>
  );
};
