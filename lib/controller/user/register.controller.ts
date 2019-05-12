import UserModel from "../../model/user"
import checkUserExists from "../helper/user/check-user"

import Logger from "../../utils/logger"
const logger = Logger.getLogger(__filename)

export function getAvatarUrl(name: string) {
  return `https://api.adorable.io/avatars/${encodeURI(name)}.png`
}

export default async function registerUser(
  name: string,
  username: string,
  email: string,
  password: string,
  session: Express.Session | null
) {
  await checkUserExists(email, username)

  const user = await UserModel.create({
    name,
    username,
    email,
    password,
    // add default avatar
    image: getAvatarUrl(name)
  })

  return user
}
