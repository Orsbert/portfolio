import { action, makeAutoObservable } from 'mobx'
import { createContext } from 'react'

class myStore{
  constructor(){
    makeAutoObservable(this, {
      setUser: action,
    })
  }

  user = {}
  usersOnline = {}
  profiles = {}
  
  setUser = (data) => {
    this.user = {
      ...this.user,
      ...data,
    }
  }  
}

const UserContext = createContext(new myStore)

export default UserContext
