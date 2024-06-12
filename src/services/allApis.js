import { commonApi } from "./commonApi"
import base_url from "./server_url"

//register

export const userRegister=async(data)=>{
    return await commonApi("POST",`${base_url}/register`,data,"")
}

//login

export const userLogin=async(data)=>{
   return await commonApi("POST",`${base_url}/login`,data,"")
}

//all-workouts

export const allWorkouts=async(header,search)=>{
    return await commonApi("GET",`${base_url}/allworkouts?search=${search}`,"",header)
}

//alldiet

export const allDiets=async(header)=>{
    return await commonApi("GET",`${base_url}/alldiets`,"",header)
}

//update-profile

export const updateProfile=async(header,data)=>{
    return await commonApi("PUT",`${base_url}/profile-update`,data,header)
}