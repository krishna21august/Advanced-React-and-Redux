import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";
import CommentBox from "../components/CommentBox";

it("shows a coment box", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
