export default class Transaction {

    private _tid: string;
    private _amount: number;
    private _details: string;
    private _aid: string;

    constructor(tid?: string, amount?: number, details?: string, aid?: string) {

        this._tid = tid || "-1";
        this._amount = amount || 0;
        this._aid = aid || "-1";
        this._details = details || ""
    }

    public setTID(tid: string): void {
        this._tid = tid;
    }
    public getTID(): string {
        return this._tid;
    }

    public setAmount(amount: number): void {
        this._amount = amount;
    }
    public getAmount(): number {
        return this._amount;
    }

    public setDetails(details: string): void {
        this._details = details;
    }
    public getDetails(): string {
        return this._details;
    }

    public setAID(aid: string): void {
        this._aid = aid;
    }
    public getAID(): string {
        return this._aid;
    }
}