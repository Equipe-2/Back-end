import { IFranchisee } from "./franchisee-user.entity";

export interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
  franchisse?: IFranchisee
}
