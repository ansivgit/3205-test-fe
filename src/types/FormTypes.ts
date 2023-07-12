export interface FormState extends Record<string, string> {
  email: string,
  number: string;
}

export interface ErrorsState extends Record<string, boolean> {
  emailError: boolean,
  numberError: boolean;
}
