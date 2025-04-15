import userAuth from "./appwrite/Authentication";
import DATABASE from "./appwrite/database";
import STORAGE from "./appwrite/Storage";
import env from "./config/config";
import dashboardSlice from "./featchers/dashboardSlice";
import { addTotalInfo, addUnpaidStudentData } from "./featchers/dashboardSlice";
export {
  userAuth,
  DATABASE,
  STORAGE,
  env,
  addTotalInfo,
  addUnpaidStudentData,
  dashboardSlice,
};
