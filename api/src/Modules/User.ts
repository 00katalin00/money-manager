export default class User {

    private _uid: string;
    private _name: string;
    private _email: string;
    private _password: string;

    constructor(uid?: string, name?: string, email?: string, password?: string) {

        this._uid = uid || "-1";
        this._name = name || "NO_NAME";
        this._email = email || "NO_EMAIL";
        this._password = password || "NO_PASSWORD";

    }


    public setUID(uid: string): void {
        this._uid = uid;
    }
    public getUID(): string {
        return this._uid;
    }

    public setName(name: string) {
        this._name = name;
    }
    public getName(): string {
        return this._name;
    }

    public setEmail(email: string) {
        this._email = email;
    }
    public getEmail(): string {
        return this._email;
    }

    public setPassword(password: string) {
        this._password = password;
    }
    public getPassword(): string {
        return this._password;
    }
}