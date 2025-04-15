import { Client, Account, ID } from "appwrite";
import env from "../config/config";

export class Authentication {
  clinet = new Client();
  account;
  constructor() {
    this.clinet.setEndpoint(env.appwriteBase).setProject(env.appwriteProject);
    this.account = new Account(this.clinet);
  }
  async createAccount(userName, email, passowrd) {
    try {
      const result = await this.account.create(
        ID.unique(),
        email,
        passowrd,
        userName
      );
      console.log(result);
      return result;
    } catch (error) {
      console.log(
        "Appwrite Authoentication Service :: createAccount :: error",
        error
      );
    }
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
  async getUser() {
    try {
      const result = await this.account.get();
      console.log({ id: result.$id, ...result });
      return result;
    } catch (error) {
      console.log(
        "Appwrite Authoentication Service :: getUser :: error",
        error
      );
    }
  }
  async updateEmail(email, password) {
    try {
      const result = await this.account.updateEmail(email, password);
      console.log(result);
      return result;
    } catch (error) {
      console.log(
        "Appwrite Authoentication Service :: updateEmail :: error",
        error
      );
    }
  }
  async updateName(name) {
    try {
      const result = await this.account.updateName(name);
      console.log(result);
      return result;
    } catch (error) {
      console.log(
        "Appwrite Authoentication Service :: updateName :: error",
        error
      );
    }
  }
  async updatePassword(oldpassword, newpassowrd) {
    try {
      const result = await this.account.updatePassword(
        newpassowrd,
        oldpassword
      );
      console.log(result);
      return result;
    } catch (error) {
      console.log(
        "Appwrite Authoentication Service :: updatePassword :: error",
        error
      );
    }
  }
  async deleteSession(sessionId) {
    try {
      const result = await this.account.deleteSession(sessionId);
      console.log(result);
      return result;
    } catch (error) {
      console.log(
        "Appwrite Authoentication Service :: deleteSession :: error",
        error
      );
    }
  }
  async deleteAllSession() {
    try {
      const result = await this.account.deleteSessions();
      return true;
    } catch (error) {
      console.log(
        "Appwrite Authoentication Service :: deleteSession :: error",
        error
      );
      return false;
    }
  }
}
const userAuth = new Authentication();
export default userAuth;
