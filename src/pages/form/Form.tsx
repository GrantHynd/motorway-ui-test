import React, { useReducer } from "react";
import FormField from "./components/FormField";
import formReducer, { initFormValues } from "./components/formReducer";
import { FormAction, FormActionType, FormState } from "./models/form";
import "./assets/form.css";

export default function Form() {
  const [formValues, formDispatch] = useReducer<
    (state: FormState, action: FormAction) => FormState
  >(formReducer, initFormValues);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    formDispatch?.({
      type: FormActionType.UPDATE,
      payload: { [e.target.id]: { value: e.target.value } },
    });
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement, Element>) {
    formDispatch?.({
      type: FormActionType.UPDATE,
      payload: { [e.target.id]: { value: e.target.value, touched: true } },
    });
    formDispatch?.({
      type: FormActionType.VALIDATE,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    formDispatch?.({
      type: FormActionType.VALIDATE,
    });
    const fieldWithError = Object.values(formValues).find((field) => {
      return field.error !== undefined || field.touched === false;
    });

    console.log("Field with error");
    console.log(fieldWithError);
    if (!fieldWithError) {
      alert("Submission successful");
    } else {
      alert("Cant submit with errors or without a field being touched");
    }
  }

  return (
    <div className="footer">
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormField
          label="Name"
          name="name"
          type="text"
          value={formValues.name.value}
          error={formValues.name.error}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />

        <FormField
          label="Email"
          name="email"
          type="email"
          value={formValues.email.value}
          error={formValues.email.error}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />

        <FormField
          label="Birth Date"
          name="birthDate"
          type="date"
          value={formValues.birthDate.value}
          error={formValues.birthDate.error}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />

        <FormField
          label="Colour"
          name="colour"
          type="color"
          value={formValues.colour.value}
          error={formValues.colour.error}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />

        <FormField
          label="Salary"
          name="salary"
          type="range"
          value={formValues.salary.value}
          error={formValues.salary.error}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />

        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
