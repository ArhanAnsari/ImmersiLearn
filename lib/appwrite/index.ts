// File Location: lib/appwrite/index.ts
import { Client, Account, Databases, Storage } from "appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { cookies } from "next/headers";

const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export const createSessionClient = async () => {
    const client = new Client()
      .setEndpoint(appwriteConfig.endpointUrl)
      .setProject(appwriteConfig.projectId);
  
    const session = (await cookies()).get("appwrite-session");
  
    if (!session || !session.value) throw new Error("No session");
  
    client.setSession(session.value);
  
    return {
      get account() {
        return new Account(client);
      },
      get databases() {
        return new Databases(client);
      },
    };
  };
  
  export const createAdminClient = async () => {
    const client = new Client()
      .setEndpoint(appwriteConfig.endpointUrl)
      .setProject(appwriteConfig.projectId)
      .setKey(appwriteConfig.secretKey);
  
    return {
      get account() {
        return new Account(client);
      },
      get databases() {
        return new Databases(client);
      },
      get storage() {
        return new Storage(client);
      },
    };
  };

export { client, account, databases, storage };
