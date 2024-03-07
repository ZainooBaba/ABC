import { classroom } from './groupFormer';
import {getCollection, addToCollection, removeCollection} from './firebase';

//TODO 2 upload the data to the server. use the functions from firebase.js and check the firestore console to see
// if the data is uploaded Feel

export function uploadClasroomData(data: classroom ) : boolean {
    //return true if the data is uploaded successfully idealy each classroom would be its own collection
    //or something like that. Experminet around and try to think of a omptimum solution.
    return true;
}
