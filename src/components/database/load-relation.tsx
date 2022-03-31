/**
 * This code uses following libraries: 
 * react and react-firebase-hooks.
 */
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { LoadRelationDexie } from "components/dexie/load-relation-dexie"
import { LoadRelationFirebase} from "components/firebase/load-relation-firebase"
import { auth } from "components/firebase/firebase"

interface ILoadRelation {
  type: string, // The type of relation to be loaded
}

/**
 * A component handling the loading of a relation from Firebase 
 * if the user is logged in, otherwise load from IndexedDB,
 * with the possibility to delete saved relations.
 */
export function LoadRelation(props: ILoadRelation) {
  const { type } = props
  const [user] = useAuthState(auth)

  if(user) {
    return <LoadRelationFirebase type={type} />
  } 
  
  return <LoadRelationDexie type={type} />
}
