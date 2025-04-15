import { Client, Storage, ID } from "appwrite";
import env from "../config/config";

export class storageObject {
  clinet = new Client();
  storage;
  storageId = env.appwriteStudentBucket;

  constructor() {
    this.clinet.setEndpoint(env.appwriteBase).setProject(env.appwriteProject);
    this.storage = new Storage(this.clinet);
  }
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Student Images Store >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  async uploadFile(fileElm, name) {
    try {
      return await this.storage.createFile(
        this.storageId, // bucketId
        ID.unique(), // fileId
        fileElm.files[0] // file
        // ["read("any")"] // permissions (optional)
      );
    } catch (error) {
      console.log("Appwrite Storage Service :: uploadFile :: error", error);
    }
  }
  async getFile(file_id) {
    try {
      return await this.storage.getFile(
        this.storageId, // bucketId
        file_id // fileId
      );
    } catch (error) {
      console.log("Appwrite Storage Service :: getFile :: error", error);
    }
  }
  async deleteFile(file_id) {
    try {
      return await this.storage.deleteFile(
        this.storageId, // bucketId
        file_id // fileId
      );
    } catch (error) {
      console.log("Appwrite Storage Service :: deleteFile :: error", error);
    }
  }
  async downloadFile(file_id) {
    try {
      return await this.storage.getFileDownload(
        this.storageId, // bucketId
        file_id // fileId
      );
    } catch (error) {
      console.log("Appwrite Storage Service :: downloadFile :: error", error);
    }
  }
  async getFilePreview(file_id, props) {
    try {
      return await this.storage.getFilePreview(
        this.storageId, // bucketId
        file_id, // fileId
        ...props
      );
    } catch (error) {
      console.log("Appwrite Storage Service :: getFilePreview :: error", error);
    }
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
