export class valiator {
  public static isRequired(v: string | any | any[]): boolean {
    if (v instanceof Array) {
      return v != null && v != undefined && v.length > 0;
    }
    return v != '' && v != null && v != undefined;
  }
  
  public static isEqualsPattern(v: string, pattern: RegExp): boolean {
    if (v == null || v == undefined || v == '') return true;
    return pattern.test(v);
  }
  
  public static validate(v: string | any, validatorOptions: RValidator.ValidatorOptions): string {
    const res: any = '';
  
    if (validatorOptions.required && ! this.isRequired(v)) {
      return validatorOptions.errorsMessage?.required || 'Complete this field.';
    }
  
    if (validatorOptions.pattern && ! this.isEqualsPattern(v, validatorOptions.pattern)) {
      return validatorOptions.errorsMessage?.pattern || 'This field has incorrect format.';
    }
  
    return res || null;
  }
}


