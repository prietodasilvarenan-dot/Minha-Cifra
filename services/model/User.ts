export default class User {
    public email: string;
    private password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    public getEmail() {
        return this.email;
    }

    public getPassword() {
        return this.password;
    }
}
