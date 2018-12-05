import { combineReducers } from "redux";
import CommentsReducer from "reducers/comments";

export default combineReducers({
  comments: CommentsReducer
});
