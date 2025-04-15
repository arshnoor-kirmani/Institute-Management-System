import { Client, Databases, ID, Query } from "appwrite";
import env from "../config/config";

export class databaseObject {
  clinet = new Client();
  databaseId = env.appwriteAdminId;
  studentId = env.appwriteStudentCollection;
  database;
  constructor() {
    this.clinet.setEndpoint(env.appwriteBase).setProject(env.appwriteProject);
    this.database = new Databases(this.clinet);
  }
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< (Create,Update,Delet,Get) Students >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  async studentList(queries) {
    try {
      const result = await this.database.listDocuments(
        this.databaseId,
        this.studentId,
        [Query.greaterThan("pending_fees", 0)] // queries (optional)
      );

      return result;
    } catch (error) {
      console.log("Appwrite Database Service :: studentList :: error", error);
    }
  }
  async newStudent(data) {
    try {
      return await this.database.createDocument(
        this.databaseId,
        this.studentId,
        ID.unique(),
        { ...data }
        // ["read("any")"] // permissions (optional)
      );
      return false;
    } catch (error) {
      console.log("Appwrite Database Service :: newStudent :: error", error);
    }
  }
  async getStudent(student_id, queries = []) {
    try {
      return await this.database.getDocument(
        this.databaseId, // databaseId
        this.studentId, // collectionId
        student_id, // documentId
        [...queries] // queries (optional)
      );
      return false;
    } catch (error) {
      console.log("Appwrite Database Service :: getStudent :: error", error);
    }
  }
  async updateStudent(student_id, data) {
    try {
      return await this.database.updateDocument(
        this.databaseId, // databaseId
        this.studentId, // collectionId
        student_id, // documentId
        { ...data } // data (optional)
        // ["read("any")"] // permissions (optional)
      );
    } catch (error) {
      console.log("Appwrite Database Service :: updateStudent :: error", error);
    }
  }
  async deleteStudent(student_id) {
    try {
      return await this.database.deleteDocument(
        this.databaseId, // databaseId
        this.studentId, // collectionId
        student_id // documentId
      );
    } catch (error) {
      console.log("Appwrite Database Service :: deleteStudent :: error", error);
    }
  }
}
const DATABASE = new databaseObject();
export default DATABASE;
