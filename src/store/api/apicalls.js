import { signInWithEmailAndPassword } from "firebase/auth"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../config"

export const Signup = async(data) =>{
    try{
        console.log(data)
        return createUserWithEmailAndPassword(auth, data.mail,data.password)
    }
    catch(error){
        throw error
    }


}

export const login = async(data) =>{
    try{
        return signInWithEmailAndPassword(auth, data.mail, data.password)
    }
    catch(error){
        throw error
    }
}