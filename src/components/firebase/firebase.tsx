/**
 * This code uses following libraries: 
 * react, @mui/material, @mui/styles, and firebase.
 */
import React, { useState } from "react"
import Box from "@mui/material/Box"
import { initializeApp } from "firebase/app"
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth"
import {
  collection,
  doc,
  getFirestore,
  getDocs,
  setDoc,
  where,
  query,
  Timestamp
} from "firebase/firestore"
import { CustomAlert } from "components/custom-alert/custom-alert"

const firebaseConfig = {
  apiKey: "AIzaSyBlXEEOsD-k0Ir_Q-t6zCLL-5s6E2dciW0",
  authDomain: "math-tutor-54819.firebaseapp.com",
  projectId: "math-tutor-54819",
  storageBucket: "math-tutor-54819.appspot.com",
  messagingSenderId: "31801223337",
  appId: "1:31801223337:web:ad5ad6a950bd852ae9e1b8",
  measurementId: "G-D4151Z6D6Q"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

export interface IRelationFirebase {
  id: string,
  type: string,
  name: string,
  matrix: number[][],
  timestamp: Timestamp
} 

export interface IPointsFirebase {
  id: string,
  type: string,
  name: string,
  points: number[][],
  timestamp: Timestamp
} 

const googleProvider = new GoogleAuthProvider()

enum Status {
  idle = "IDLE",
  errorRegister = "ERROR_REGISTER",
  errorLogIn = "ERROR_LOG_IN",
  successReset = "SUCCESS_RESET",
  errorReset = "ERROR_RESET"
}

/**
 * A hook for managing the status and messages for authentication.
 */
export function useAuthenticationManager() {
  const [status, setStatus] = useState(Status.idle)
  const [message, setMessage] = useState("")
  const [processing, setProcessing] = useState(false)

  const resetManager = () => {
    setStatus(Status.idle)
    setMessage("")
  }

  /**
   * The authentication part of the code was written with the help of the article 
   * https://blog.logrocket.com/user-authentication-firebase-react-apps/,
   * author: Yusuff Faruq, published: 10.01.2022, accessed: 07.03.2022.
   */

  /**
   * A function for handling registering new user with email and password.
   * @param name - The name of the user
   * @param email - The email of the user
   * @param password - The password of the user
   * 
  */
  const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
    setProcessing(true)
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const { user } = res
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      })
  
      await sendEmailVerification(user)
    } catch (error) {
      console.error(error)
      if (error instanceof Error) {
        setStatus(Status.errorRegister)
        setMessage(error.message)
      }
    }
    setProcessing(false)
  }

  /**
   * A function for handling logging in with email and password.
   * @param name - The name of the user
   * @param email - The email of the user
   */
  const logInWithEmailAndPassword = async (email: string, password: string) => {
    setProcessing(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.error(error)
      if (error instanceof Error) {
        setStatus(Status.errorLogIn)
        setMessage(error.message)
      }
    }
    setProcessing(false)
  }

  /**
   * A function for handling password reset.
   * @param email - The email of the user
   */
  const sendPasswordReset = async (email: string) => {
    setProcessing(true)
    try {
      await sendPasswordResetEmail(auth, email)
      setStatus(Status.successReset)
    } catch (error) {
      console.error(error)
      if (error instanceof Error) {
        setStatus(Status.errorReset)
        setMessage(error.message)
      }
    }
    setProcessing(false)
  }

  /**
   * A function for handling logging in with Google.
   */
  const logInWithGoogle  = async () => {
    setProcessing(true)
    try {
      const { user } = await signInWithPopup(auth, googleProvider)
      const req = query(collection(db, "users"), where("uid", "==", user.uid))
      const docs = await getDocs(req)
      if (docs.docs.length === 0) {
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        })
      }
    } catch (error) {
      console.error(error)
      if (error instanceof Error) {
        setStatus(Status.errorLogIn)
        setMessage(error.message)
      }
    }
    setProcessing(false)
  }

  /**
   * A function for handling user log out.
   */
  const logout = () => {
    setProcessing(true)
    signOut(auth)
    setProcessing(false)
  }

  return { 
    status, 
    message,
    processing,
    resetManager,
    registerWithEmailAndPassword, 
    logInWithEmailAndPassword,
    sendPasswordReset,
    logInWithGoogle,
    logout
  }
}

interface IAuthenticationAlert {
  status: Status,             // The status of the authentication
  message: string,            // The message of the alert
  resetManager: () => void    // The function for resetting the authentication manager
}

/**
 * A component displaying the alerts when user tries authenticate.
 */
export function AuthenticationAlert(props: IAuthenticationAlert) {
  const { status, message, resetManager} = props
  const openErrorRegister = status === Status.errorRegister
  const openErrorLogIn = status === Status.errorLogIn
  const openSuccessReset = status === Status.successReset
  const openErrorReset = status === Status.errorReset

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    resetManager()
  }

  return (
   <Box>
      <CustomAlert 
        open={openErrorRegister}
        handleClose={handleClose}
        severity="error"
        text={`There was an error with the registration. ${message}`}
      />
      <CustomAlert 
        open={openErrorLogIn}
        handleClose={handleClose}
        severity="error"
        text={`There was an error with logging in. ${message}`}
      />
      <CustomAlert 
        open={openSuccessReset}
        handleClose={handleClose}
        severity="success"
        text="The password reset link has been sent!"
      />
      <CustomAlert 
        open={openErrorReset}
        handleClose={handleClose}
        severity="error"
        text={`There was an error with resetting the password. ${message}`}
      />
   </Box>
 )
}
