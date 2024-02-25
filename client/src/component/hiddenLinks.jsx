import { useEffect } from "react"
import { useSelector } from "react-redux"

export const ShowOnLogin = ({children}) => {
    const {isLoggedIn, userInfo} = useSelector((state) => state.auth)
   
    if(isLoggedIn){
        return children
    }
    return null
}


export const ShowCustomer = ({children}) => {
    const {isLoggedIn, userInfo} = useSelector((state) => state.auth)
   
    if(isLoggedIn && userInfo.role === "customer"){
        return children
    }
    return null
}

export const ShowAdmin = ({children}) => {
    const {isLoggedIn, userInfo} = useSelector((state) => state.auth)
   
    if(isLoggedIn && userInfo.role === "admin"){
        return children
    }
    return null
}


export const ShowOnLogout = ({children}) => {
    const {isLoggedIn} = useSelector((state) => state.auth)

    if(!isLoggedIn){
        return children
    }
    return null
}