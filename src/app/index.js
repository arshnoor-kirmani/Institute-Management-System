import database from "./appwrite/Database/Database";
import STORAGE from "./appwrite/Storage/Storage";
import userAuth from "./appwrite/Account/Account";
import { setPendingStudent } from "./reduxStore/slices/pendingReducer";
export { database, setPendingStudent, STORAGE, userAuth };
