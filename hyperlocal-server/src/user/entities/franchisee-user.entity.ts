export interface IFranchiseeUser {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
  franchisee: IFranchisee;
}

export interface IFranchisee {
  userId: string;
  personalEmail: string;
  cnpj: string;
  phoneNumber: string;
  city: string;
  address: string;
}
