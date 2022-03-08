import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { LoadPointsDexie } from "components/dexie/load-points-dexie"
import { LoadPointsFirebase } from "components/firebase/load-points-firebase"
import { auth } from "components/firebase/firebase"

interface ILoadPoints {
  type: string, // The type of points to be loaded
}

/**
 * A component handling the loading of a points from Firebase 
 * if the user is logged in, otherwise load from IndexedDB,
 * with the possibility to delete saved points.
 */
export function LoadPoints(props: ILoadPoints) {
  const { type } = props
  const [user] = useAuthState(auth)

  if(user) {
    return <LoadPointsFirebase type={type} />
  } 
  
  return <LoadPointsDexie type={type} />
}
