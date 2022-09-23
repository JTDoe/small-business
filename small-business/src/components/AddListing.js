import React, { useReducer } from "react";

const intialFormState = {
  id: "",
  Name: "",
  Description: "",
  Hours: "",
  Address: "",
};

const formReducer = (state, action) => {
  return {
    ...state,
    [action.input]: action.value,
  };
};

const Add = (props) => {
  const [formState, dispatch] = useReducer(formReducer, intialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const action = {
      input: name,
      value: value,
    };
    dispatch(action);
  };

  const handleListing = (e) => {
    e.preventDefault();
    const payload = { ...formState };
    payload.id = props.listings.length + 1;
    props.addListing(payload);
  };

  return (
    <>
      <div className="add-container">
        <div className="form">
          <input
            type="text"
            name="business"
            placeholder="Name"
            onChange={handleChange}
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />

          <input
            type="text"
            name="open"
            placeholder="Operating hours"
            onChange={handleChange}
          />

          <button className="add-button" onClick={handleListing}>
            Save
          </button>
        </div>

        <div className="add-map"></div>
      </div>
    </>
  );
};

export default Add;
