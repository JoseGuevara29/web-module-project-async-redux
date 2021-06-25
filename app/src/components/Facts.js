import React, { useEffect } from "react";
import { fetchFact } from "../actions/factsActions";
import { connect } from "react-redux";

const Facts = (props) => {
  if (props.loading) {
    return (
      <>
        <p>Fetching Facts</p>
      </>
    );
  }

  props.fact.forEach((element) => {
    console.log(element.text);
  });

  return (
    <>
      <h1>Cat Facts App</h1>
      <p>
        {props.fact.map((element) => {
          return <p>{element.text}</p>;
        })}
      </p>
      <button onClick={() => props.fetchFact()}>Get Cat Facts</button>
    </>
  );
};

//connect the componet to the redux store

const mapStateToProps = (state) => {
  return {
    fact: state.fact,
    loading: state.loading,
  };
};

const mapDispatchToProps = { fetchFact };

export default connect(mapStateToProps, mapDispatchToProps)(Facts);
