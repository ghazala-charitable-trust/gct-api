import { IUserModel } from "../../model/user"


function sanitizeUserResponse(user: IUserModel) {
  const userObj = user.toObject()
  delete userObj.password
  return userObj
}

export async function getUserData(user: IUserModel) {

  const sanitizedUser = sanitizeUserResponse(user)

  return {
    ...sanitizedUser
  }
}
