import {
  GET_NOTICE,
  CREATE_NOTICE,
  UPDATE_NOTICE,
  DELETE_NOTICE,
} from "../types";

export default function (state = {}, action) {
  switch (action.type) {
    case GET_NOTICE:
      return {
        ...state,
        notice: action.payload || false,
      };
    case CREATE_NOTICE:
      return {
        ...state,
        create_notice: action.payload || false,
      };
    case UPDATE_NOTICE:
      return {
        ...state,
        update_notice: action.payload || false,
      };
    case DELETE_NOTICE:
      return {
        ...state,
        delete_notice: action.payload || false,
      };
  }
}
