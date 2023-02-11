export class Account {
  id: string;
  email: string;
  password: string;
  createdAt: Date;

  constructor(attrs: {
    id: string;
    email: string;
    password: string;
    createdAt?: Date;
  }) {
    this.id = attrs.id;
    this.email = attrs.email;
    this.password = attrs.password;
    this.createdAt = attrs.createdAt ?? new Date();
  }
}
