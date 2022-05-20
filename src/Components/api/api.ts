import axios from "axios";
import {FC} from "react";

type getUsersType = {
   currentPage: number
   pageSize: number
}

const instance = axios.create({
   withCredentials: true,
   baseURL: `https://social-network.samuraijs.com/api/1.0/`,
   headers: {
      "API-KEY" : "c094e303-b7d4-4052-8343-1a5391056e3d"
   }
})

export const usersAPI = {
   getUsers(currentPage: number = 1, pageSize: number = 10){
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data
         })
   },
   follow(userId: number) {
      return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
   },
   unfollow(userId: number) {
      return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,)
   }
}



export const getUsers2 = (currentPage: number = 1, pageSize: number = 10) => {
   return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
      .then(response => {
         return response.data
      })
}
