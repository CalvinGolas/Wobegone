import "./AddressSurvey.css";

function AddressSurvey() {
  return (
    //   Email
    <div className="AddressSurvey">
      <input type="email" id="email" name="email" />
      // Street // Unit // City // State // Zip Code
      <button>Submit</button>
    </div>
  );
}

// Validation

export default AddressSurvey;
