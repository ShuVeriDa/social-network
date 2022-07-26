import {UserType} from "../redux/userReducer";

export const updateObjectInArray = (items: any, itemId: number, objectPropName: string, newObjProps: {followed: boolean}) => {
  return items.map((u: any) => {
         if (u[objectPropName] === itemId) {
            return {...u, ...newObjProps}
         }
         return u
      }
   )
}