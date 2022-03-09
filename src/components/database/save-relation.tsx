import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { SaveRelationDexie } from "components/dexie/save-relation-dexie"
import { SaveRelationFirebase} from "components/firebase/save-relation-firebase"
import { auth } from "components/firebase/firebase"

interface ISaveRelation {
  type: string, // The type of relation to be saved
}

/**
 * A component handling the saving of a relation to Firebase
 * if the user is logged in, otherwise save to IndexDB.
 */
export function SaveRelation(props: ISaveRelation) {
  const { type } = props
  const [user] = useAuthState(auth)

  if(user) {
    return <SaveRelationFirebase type={type} />
  } 
  
  return <SaveRelationDexie type={type} />
}
