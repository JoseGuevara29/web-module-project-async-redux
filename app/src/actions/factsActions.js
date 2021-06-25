import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

export const fetchFact = () => (dispatch) => {
  //start a fetch (dispatch FETCHING_START)

  dispatch({ type: FETCHING_START });
  axios
    .get("https://cat-fact.herokuapp.com/facts")
    .then((res) => {
      console.log("API cat facts data: ", res.data);
      dispatch({ type: FETCHING_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCHING_FAILURE, payload: err });
    });
};
