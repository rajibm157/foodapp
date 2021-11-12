import { RegExp } from '_constants';

//For check valid email
export function isEmail(email) {
  return email.match(RegExp.email);
}

//For check valid phone number
export function isPhoneNo(number) {
  return number.match(RegExp.mobile);
}

//For check valid password
export function isPassword(password) {
  return password.match(RegExp.password);
}
