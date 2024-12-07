// File Location: lib/appwrite/index.ts
import { Client, Account, Databases, Storage } from "appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";

const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, account, databases, storage };
