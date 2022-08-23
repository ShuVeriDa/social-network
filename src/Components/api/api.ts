import axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: `https://social-network.samuraijs.com/api/1.0/`,
   headers: {
      "API-KEY": "c094e303-b7d4-4052-8343-1a5391056e3d"
   }
})

export const usersAPI = {
   getUsers(currentPage: number = 1, pageSize: number = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data
         })
   },
   follow(userId: number) {
      return instance.post(`follow/${userId}`)
   },
   unfollow(userId: number) {
      return instance.delete(`follow/${userId}`,)
   },
   getProfile(userId: number) {
      return profileAPI.getProfile(userId)
   },
}

export const profileAPI = {
   getProfile(userId: number) {
      return instance.get(`profile/${userId}`)
   },
   getStatus(userId: number) {
      return instance.get(`profile/status/${userId}`)
   },
   updateStatus(status: string) {
      return instance.put(`profile/status`, {status: status})
   },
   savePhoto(photoFile: string) {
      const formData = new FormData()
      formData.append('image', photoFile)
      return instance.put(`profile/photo/`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
   }

}

export const authAPI = {
   me() {
      return instance.get(`auth/me`)
   },
   login(email: string, password: string, rememberMe: boolean = false) {
      return instance.post(`auth/login`, {email, password, rememberMe})
   },
   logout() {
      return instance.delete(`auth/login`)
   }
}