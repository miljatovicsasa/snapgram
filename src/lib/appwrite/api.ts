import { INewUser } from "@/types";
import { account, ID } from "./config";

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    return newAccount;
  } catch (error) {
    console.log(error);
    return error;
  }
}
