export enum AuthType {
  Login = "login",
  Register = "register",
}

export enum StepEnterEmailResult {
  Registration = "registration",
  SignIn = "sign-in",
}

export enum StepEnterSignUpPasswordResultCode {
  // FIXME: add guard error code
  EmailCodeRequired = "",
}

export enum StepFinishSignUpResult {
  Success = "success",
}
