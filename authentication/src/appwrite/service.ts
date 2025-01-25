import { ID, Account, Client } from "appwrite";
import Toast from "react-native-toast-message";

// Initialize Appwrite Client
const client = new Client();
const appwrite_endPoint: string = "https://cloud.appwrite.io/v1";
const appwrite_projectId: string = "67948f890033c3bb127b";

type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

class AppwriteService {
  account;

  // Build the constructor in Appwrite
  constructor() {
    client.setEndpoint(appwrite_endPoint).setProject(appwrite_projectId);
    this.account = new Account(client);
  }

  // Create a user account in Appwrite
  async createAccount({ email, password, name }: CreateUserAccount) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        Toast.show({
          type: "success",
          text1: "Account Created",
        });
      } else {
        return userAccount;
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: String(error),
      });
      console.log("Appwrite service :: createAccount() :: " + error);
    }
  }

  // Login a user account in Appwrite
  async loginAccount({ email, password }: LoginUserAccount) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: String(error),
      });
      console.log("Appwrite service :: loginAccount() :: " + error);
    }
  }

  // Get current user details in Appwrite
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      Toast.show({
        type: "error",
        text1: String(error),
      });
      console.log("Appwrite service :: getCurrentAccount() :: " + error);
    }
  }

  // Logout the current user in Appwrite
  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {
      console.log("Appwrite service :: getCurrentAccount() :: " + error);
    }
  }
}

export default AppwriteService;
