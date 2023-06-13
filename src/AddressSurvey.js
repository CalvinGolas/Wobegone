import "./AddressSurvey.css";

function AddressSurvey() {
  return (
    //   Email
    <div className="Address-survey">
      <input type="email" id="email" name="email" />
      {/*// Street // Unit // City // State // Zip Code*/}
      <br />
      <button>Submit</button>
    </div>
  );
}

// Validation

export default AddressSurvey;
