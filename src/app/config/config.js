const env = {
  appwriteBase: import.meta.env.VITE_APPWRITE_ENDPOINT,
  appwriteProject: import.meta.env.VITE_PROJECT_ID,
  appwriteAdminId: import.meta.env.VITE_DATABASE_ADMIN_ID,
  appwriteStudentCollection: import.meta.env
    .VITE_DATABASE_ADMIN_STUDENT_COLLECTION_ID,
  appwriteStudentBucket: import.meta.env.VITE_STUDENT_PROFILE_BUCKET,
};
export default env;
