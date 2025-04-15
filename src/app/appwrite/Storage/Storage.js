import { Client, Storage, ID } from "appwrite";
import env from "../../config/config";

export class storageObject {
  clinet = new Client();
  storage;
  storageId = env.appwriteStudentBucket;

  constructor() {
    this.clinet.setEndpoint(env.appwriteBase).setProject(env.appwriteProject);
    this.storage = new Storage(this.clinet);
  }
  async getFileView(file_id) {
    try {
      return await this.storage.getFileView(
        this.storageId, // bucketId
        file_id // fileId
      );
    } catch (error) {
      console.log("Appwrite Storage Service :: getFileView :: error", error);
    }
  }
}
const STORAGE = new storageObject();
export default STORAGE;
