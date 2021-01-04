import Account from '../Modules/Account';

export default interface IProfile {
        name: string,
        email: string,
        accounts: [{ aid: string, name: string}?]
}