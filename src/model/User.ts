export default class User {
  public id: string | null;
  public email: string;
  private password: string;

  constructor(email: string, password: string, id: string | null = null) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  public getId() {
    return this.id;
  }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.password;
  }
}
