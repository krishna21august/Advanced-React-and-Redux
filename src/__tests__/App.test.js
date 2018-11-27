import React from "react";
import App from "components/App";
import { shallow } from "enzyme";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

/*I f some operation is repetitive for each test case we use beforeEach
which gets called before every test case */
let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a coment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment List", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
