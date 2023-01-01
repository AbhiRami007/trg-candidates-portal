import axios from 'axios'
import {AuthModel, UserModel} from './_models'

const API_URL = process.env.REACT_APP_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const LOGIN_URL = `${API_URL}/login`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`
export const VERIFY_OTP = `${API_URL}/verify-otp`
export const RESEND_OTP = `${API_URL}/resend-otp`
export const GET_USER_BY_ID = `${API_URL}/id`
export const GET_USER_IMAGE = `${API_URL}/profile`
export const UPDATE_USER_IMAGE= `${API_URL}/profile`
export const UPDATE_IMAGE_IN_DB= `${API_URL}/update`
export const UPDATE_USER_DATA= `${API_URL}/update`
export const FORGOT_PASSWORD= `${API_URL}/forgot-password`
export const CHECK_PASSWORD= `${API_URL}/check-password`

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    email,
    password,
  })
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken(token: string) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  })
}

export function verifyEmailOtp(otp: number, email: string) {
  return axios.put<UserModel>(VERIFY_OTP, {
    otp: otp,
    email:email
  })
}

export function resendOtp(email: string, newemail:string) {
  return axios.put<UserModel>(RESEND_OTP, {
    email:email,
    newemail:newemail
  })
}

export function getUserDataById(id: string) {
  return axios.get<UserModel>(GET_USER_BY_ID+'/'+id)
}

export function getUserProfile(user: string, image:string ) {
  return axios.get<UserModel>(GET_USER_IMAGE+'/'+user+"/"+image)
}

export function updateUserImage(user: string, image: File ) {
  const data = new FormData()
  data.append('file', image)
  return axios.post<UserModel>(UPDATE_USER_IMAGE+'/'+user,data)
}

export function getUserImage(path: string) {
  return axios.get<UserModel>(UPDATE_USER_IMAGE+'/'+path)
}

export function updateAvatar(id: number, avatar: string) {
  return axios.put<UserModel>(UPDATE_IMAGE_IN_DB+'/'+id,{
    avatar: avatar
  })
}

export function resetPassword(email: string) {
  return axios.post(FORGOT_PASSWORD,{
    email: email
  })
}
export function updateUser(id: any, body: object) {
  return axios.put<UserModel>(UPDATE_USER_DATA+"/"+id,
  {
    ...body
  })
}

export function checkPassword(email: string, password: string) {
  return axios.post<UserModel>(CHECK_PASSWORD,
  {
    email:email,
    password: password
  })
}