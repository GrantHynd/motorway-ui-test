export type FieldState<T> = {
  value: T;
  error: string | undefined;
  touched: boolean;
};

export type FormState = {
  name: FieldState<string>;
  email: FieldState<string>;
  birthDate: FieldState<string>;
  colour: FieldState<string>;
  salary: FieldState<number>;
};

export enum FormActionType {
  UPDATE = "UPDATE",
  VALIDATE = "VALIDATE",
}

export type FormAction = {
  type: FormActionType;
  payload?: Partial<FormState>;
};
