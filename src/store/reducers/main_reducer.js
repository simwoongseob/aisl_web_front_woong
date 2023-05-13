import { GET_MAIN, LOGIN, JOIN } from "../types";

export default function (state = {}, action) {
  switch (action.type) {
    case GET_MAIN:
      return {
        ...state,
        main: action.payload || false,
      };
    case JOIN:
      return {
        ...state,
        join: action.payload || false,
      };
    case LOGIN:
      return {
        ...state,
        login: action.payload || false,
      };
  }
}
