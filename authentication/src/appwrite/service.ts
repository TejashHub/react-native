import { ID, Account, Client } from "appwrite";
import Toast from "react-native-toast-message";
import Constants from "expo-constants";

const { APPWRITE_ENDPOINT, APPWRITE_PROJECTID } = Constants.manifest.extra;

const client = new Client();
const appwrite_endPoint: string = APPWRITE_ENDPOINT;
const appwrite_projectId: string = APPWRITE_PROJECTID;

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
  account: Account;

  constructor() {
    client.setEndpoint(appwrite_endPoint).setProject(appwrite_projectId);
    this.account = new Account(client);
  }

  // Create a new user account in Appwrite
  async createAccount({ email, password, name }: CreateUserAccount) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      console.log("User account created successfully", userAccount);

      // Automatically login the user after account creation
      return await this.loginAccount({ email, password });
    } catch (error: any) {
      console.error(
        `Appwrite Service :: createAccount() Error: ${error?.message}`
      );
      Toast.show({
        type: "error",
        text1: "Account creation failed",
        text2: error?.message || "Please try again.",
      });
      throw error;
    }
  }

  // Login a user account in Appwrite
  async loginAccount({ email, password }: LoginUserAccount) {
    try {
      const userLogin = await this.account.createEmailPasswordSession(
        email,
        password
      );
      console.log("User logged in successfully", userLogin);

      Toast.show({
        type: "success",
        text1: "Login successful",
      });

      return userLogin;
    } catch (error: any) {
      console.error(
        `Appwrite Service :: loginAccount() Error: ${error?.message}`
      );
      Toast.show({
        type: "error",
        text1: "Login failed",
        text2: error?.message || "Please check your credentials.",
      });
      throw error;
    }
  }

  // Get current user details in Appwrite
  async getCurrentUser() {
    try {
      const currentUser = await this.account.get();
      console.log("Current user retrieved successfully", currentUser);

      return currentUser;
    } catch (error: any) {
      console.error(
        `Appwrite Service :: getCurrentUser() Error: ${error?.message}`
      );
      Toast.show({
        type: "error",
        text1: "Failed to retrieve user",
        text2:
          error?.message || "An error occurred while fetching user details.",
      });
      throw error;
    }
  }

  // Logout the current user in Appwrite
  async logout() {
    try {
      await this.account.deleteSessions();
      console.log("User logged out successfully");

      Toast.show({
        type: "success",
        text1: "Logout successful",
      });
    } catch (error: any) {
      console.error(`Appwrite Service :: logout() Error: ${error?.message}`);
      Toast.show({
        type: "error",
        text1: "Logout failed",
        text2: error?.message || "An error occurred while logging out.",
      });
      throw error;
    }
  }
}

export default AppwriteService;
