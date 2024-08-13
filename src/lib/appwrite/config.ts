import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const client = new Client();

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
};

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

export { ID } from "appwrite";
