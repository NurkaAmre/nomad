export type ValidationResultType = {
  isValid: boolean;
  msg?: string;
};

// validate if number is greater than 0
export const isGreaterThanZero = (value: number, fieldName?: string, msg?: string): ValidationResultType => {
  if (value === null) return {isValid: false, msg: msg || `${fieldName? fieldName: 'Value'} is required`};

  if (typeof value === 'number') {
    if (value <= 0) {
      return {isValid: false, msg: msg || `${fieldName? fieldName: 'Value'} must be greater than 0`};
    }
  }

  return {isValid: true};
}

// validate if number is in range
export const isInRange = (value: number, min: number, max: number, fieldName?: string, msg?: string): ValidationResultType => {
  if (value === null) return {isValid: false, msg: msg || `${fieldName? fieldName: 'Value'} is required`};

  if (typeof value === 'number') {
    if (value < min || value > max) {
      return {isValid: false, msg: msg || `${fieldName? fieldName: 'Value'} must be between ${min} and ${max}`};
    }
  }

  return {isValid: true};
}


// validate is required
export const isRequired = (value: string, fieldName?: string, msg?: string): ValidationResultType => {
  if (value === null) return {isValid: false, msg: msg || `${fieldName? fieldName: 'Value'} is required`};

  if (typeof value === 'string') {
    if (value.trim().length === 0) {
      return {isValid: false, msg: msg || `${fieldName? fieldName: 'Value'} is required`};
    }
  }

  return {isValid: true};
}

// validate length
export const isLength = (value: string | number | null, min: number, max: number, fieldName?: string, msg?: string): ValidationResultType => {
  if (value === null) return {isValid: false, msg: msg || `${fieldName? fieldName: 'Value'} is required`};

    const valueLength = typeof value === 'string' ? value.trim().length : 0;

    if (typeof value === 'string') {
      if (valueLength < min || valueLength > max) {
        return {isValid: false, msg: msg || `${fieldName? fieldName: 'Value'} must be between ${min} and ${max} characters long`};
      }
    }

    if (typeof value === 'number') {
      if (value < min || value > max) {
        return {isValid: false, msg: msg || `${fieldName? fieldName: 'Value'} must be between ${min} and ${max}`};
      }
    }

    return {isValid: true};

}

// validate email
export const isEmail = (value: string, fieldName?: string, msg?: string): ValidationResultType => {
  if (value === null) return {isValid: false, msg: msg || `${fieldName? fieldName: 'Value'} is required`};

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!pattern.test(value)) {
    return {isValid: false, msg: msg || `${fieldName? fieldName: 'Value'} must be a valid email address`};
  }

  return {isValid: true};
}

// validate phone number
export const isPhoneNumber = (value: string, fieldName?: string, msg?: string): ValidationResultType => {
  if (value === null) return {isValid: false, msg: msg || `${fieldName? fieldName: 'Value'} is required`};

  // allow +and max 15 digits
  const pattern = /^\+?\d{10,15}$/;

  if (!pattern.test(value)) {
    return {isValid: false, msg: msg || `${fieldName? fieldName: 'Value'} must be a valid phone number`};
  }

  return {isValid: true};
}

// validate date string is greater than today
export const isValidDate = (value: string, fieldName?: string, msg?: string): ValidationResultType => {
  if (value === null) return {isValid: false, msg: msg || `${fieldName? fieldName: 'Value'} is required`};

  const today = new Date();
  const valueDate = new Date(value);

  if (valueDate < today) {
    return {isValid: false, msg: msg || `${fieldName? fieldName: 'Value'} must be greater than today`};
  }

  return {isValid: true};
}


// validate with isMatch
export const isMatch = (value: string, matchValue: string, fieldName?: string, msg?: string): ValidationResultType => {
  if (value === null) return {isValid: false, msg: msg || `${fieldName? fieldName: 'Value'} is required`};

  if (value !== matchValue) {
    return {isValid: false, msg: msg || `${fieldName? fieldName: 'Value'} must match ${matchValue}`};
  }

  return {isValid: true};
}


const validator = {
  isLength,
  isEmail,
  isRequired,
  isGreaterThanZero,
  isValidDate,
  isMatch,
  isPhoneNumber,
  isInRange
}

export default validator;