import User from './User';
export default class Account {

    private _aid: string;
    private _name: string;
    private _uid: string;

    constructor(aid?: string, name?: string, uid?: string) {

        this._aid = aid || "-1";
        this._name = name || "NO_NAME";
        this._uid = uid || "-1";

    }

    public setAID(aid: string): void {
        this._aid = aid;
    }
    public getAID(): string {
        return this._aid;
    }

    public setName(name: string): void {
        this._name = name;
    }
    public getName(): string {
        return this._name;
    }

    public setUID(uid: string): void {
        this._uid = uid;
    }
    public getUID(): string {
        return this._uid;
    }
}