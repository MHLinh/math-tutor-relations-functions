/**
 * This code uses following libraries: 
 * react and react-firebase-hooks.
 */
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { SavePointsDexie } from "components/dexie/save-points-dexie"
import { SavePointsFirebase } from "components/firebase/save-points-firebase"
import { auth } from "components/firebase/firebase"

interface ISavePoints {
  type: string, // The type of points to be saved
}

/**
 * A component handling the saving of a points to Firebase
 * if the user is logged in, otherwise save to IndexDB.
 */
export function SavePoints(props: ISavePoints) {
  const { type } = props
  const [user] = useAuthState(auth)

  if(user) {
    return <SavePointsFirebase type={type} />
  } 
  
  return <SavePointsDexie type={type} />
}
