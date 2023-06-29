declare namespace RValidator {
  interface ValidatorOptions {
    required?: boolean;
    pattern?: RegExp;
    errorsMessage?: ValidateErrorMessage;
  }
  
  interface ValidateErrorMessage {
    required?: string;
    pattern?: string;
  }
}
