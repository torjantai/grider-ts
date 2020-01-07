import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

const DB_URL = 'http://localhost:3000/users';


export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(DB_URL);
    public attributes: Attributes<UserProps>;

    constructor(attrs: UserProps) {
        this.attributes = new Attributes<UserProps>(attrs);
    }
}