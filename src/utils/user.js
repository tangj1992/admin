const UserKey = 'user'

let user = {
  name: ''
}
export function getUser () {
  if (localStorage.getItem(UserKey)) {
    return JSON.parse(localStorage.getItem(UserKey))
  }
  return user
}
export function getUserName () {
  return getUser().name
}

export function setUserName (name) {
  let user = getUser()
  user.name = name
  return localStorage.setItem(UserKey, JSON.stringify(user))
}

export function removeUser () {
  return localStorage.removeItem(UserKey)
}
