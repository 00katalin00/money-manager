export default class CustomException {

    private error: number;

    constructor(error: number) {
        this.error = error;
    }

    public get(): number {
        return this.error;
    }
    public set(error: number): void {
        this.error = error;
    }
}