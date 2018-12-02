import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox.js";

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("it has a text area and button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("has text area that users can type in", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" }
  });
});
