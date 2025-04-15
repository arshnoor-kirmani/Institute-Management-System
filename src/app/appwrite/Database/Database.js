import { Client, Databases, ID, Query } from "appwrite";
import env from "../../config/config";

export class Database {
  client = new Client();
  database;
  databaseId = env.appwriteAdminId;
  studentId = env.appwriteStudentCollection;
  constructor() {
    this.client.setEndpoint(env.appwriteBase).setProject(env.appwriteProject);
    this.database = new Databases(this.client);
  }
  async StudentLists(queries) {
    try {
      return await this.database.listDocuments(
        this.databaseId,
        this.studentId,
        queries // queries (optional)
      );
    } catch (error) {
      console.error(
        "AppWrite Database Service :: StudentLists :: error",
        error
      );
      throw error;
    }
  }
}

const database = new Database();
export default database;
