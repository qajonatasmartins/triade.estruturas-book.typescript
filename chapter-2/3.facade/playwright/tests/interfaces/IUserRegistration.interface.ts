export type AccessType = 'client' | 'admin';

export interface IUserRegistration {
  name: string;
  email: string;
  password: string;
  accessType: AccessType;
}
