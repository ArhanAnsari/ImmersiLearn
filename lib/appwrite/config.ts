//Appwrite Configuration
export const appwriteConfig = {
    endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
    usersCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION!,
    leaderboardCollectionID: process.env.NEXT_PUBLIC_APPWRITE_LEADERBOARD_COLLECTION!,
    secretKey: process.env.NEXT_APPWRITE_KEY!,
  };