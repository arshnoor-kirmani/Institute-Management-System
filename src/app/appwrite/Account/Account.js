import { Client, Account, ID } from "appwrite";
import env from "../../config/config";

export class Authentication {
  clinet = new Client();
  account;
  constructor() {
    this.clinet.setEndpoint(env.appwriteBase).setProject(env.appwriteProject);
    this.account = new Account(this.clinet);
  }
  async loginUser(email, password) {
    try {
      const result = await this.account.createEmailPasswordSession(
        email,
        password
      );
      console.log({ id: result.$id, ...result });
      return result;
    } catch (error) {
      console.log(
        "Appwrite Authoentication Service :: loginUser :: error",
        error
      );
    }
  }
  async getLoginList() {
    try {
      return await this.account.listSessions();
    } catch (error) {
      console.error(
        "AppWrite Database Service :: getLoginList :: error",
        error
      );
      throw error;
    }
  }
}
const userAuth = new Authentication();
export default userAuth;
