export interface IClient {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  registrationDate: Date;
  ipAddress: string;
  status: string[];
  clientImage?: ClientImage[];
}


interface ClientImage {
  id: number;
  filename: string;
  originalName: string;
  mime: string;
  size: number;
}
