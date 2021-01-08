import React from "react";

import FlightManagementForm from "../FlightManagementForm";
import MainSettingsForm from "../FlightMainSettingsForm";

import "./styles.css";

// Custom hook to mimic formik behaviour. Push this to hooks folder ASAP.
function useForm(initialValues) {
  const [values, setValues] = React.useState(initialValues);

  function onChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return {
    values,
    onChange,
  };
}

export default function EditFlightForm({ onSubmit, data }) {
  const handler = useForm(
    data || {
      refundable: "refundable",
      flightType: "business",
      direction: "one-way",
      status: "enabled",
      totalHours: "",
      deposite: "",
      vatTax: "",

      route: [
        {
          id: 0,
          type: "Departure",
          airport: "",
          airline: "",
          flightNo: 0,
          date: "",
          time: "",
          checkout: "",
        },
        {
          id: 1,
          type: "Arrival",
          airport: "",
          airline: "",
          flightNo: 0,
          date: "",
          time: "",
          checkout: "",
        },
      ],

      adultsPrice: "",
      infantPrice: "",
      childPrice: "",

      description: "",
    }
  );

  return (
    <div
      id="edit-flight-form-wrapper"
      className="container-fluid edit-flight-form "
    >
      <form onSubmit={onSubmit} id="edit-flight-form">
        <div className="d-flex justify-content-between">
          <FlightManagementForm handler={handler} />
          <MainSettingsForm handler={handler} />
        </div>
        <div className="col-8">
          <button
            onClick={() => onSubmit(handler.values)}
            type="button"
            className="btn btn-primary w-100 edit-submit-button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
