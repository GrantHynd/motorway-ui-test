import React from "react";
import { FormAction, FormActionType, FormState } from "../models/form";

export const initFormValues: FormState = {
  name: { value: "", error: undefined, touched: false },
  email: { value: "", error: undefined, touched: false },
  birthDate: { value: "", error: undefined, touched: false },
  colour: { value: "#fef100", error: undefined, touched: false },
  salary: { value: 0, error: undefined, touched: false },
};

function isValidEmail(email: string) {
  const validEmail = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return validEmail.test(email);
}

export default function formReducer(state: FormState, action: FormAction) {
  switch (action.type) {
    case FormActionType.UPDATE:
      return { ...state, ...action.payload };
    case FormActionType.VALIDATE:
      if (!state.name.value && state.name.touched) {
        state.name.error = "Not valid name";
      }
      if (!isValidEmail(state.email.value) && state.email.touched) {
        state.email.error = "Not valid email";
      }
      if (!state.birthDate.value && state.birthDate.touched) {
        state.birthDate.error = "Not valid birth date";
      }
      if (!state.colour.value && state.colour.touched) {
        state.colour.error = "Not valid colour";
      }
      if (state.salary.value.toString() === "0" && state.salary.touched) {
        state.salary.error = "Salary must be greater than 0";
      }
      console.log("State after validation");
      console.log(state);
      return { ...state };
    default:
      throw new Error();
  }
}
