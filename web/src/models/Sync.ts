import axios, { AxiosResponse } from "axios";

const DB_URL = 'http://localhost:3000';

export class Sync {
    fetch(): void {
        axios.get(`${DB_URL}/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            }
        );
    }

    save(): void {
        const id = this.get('id');
        if (!id) {
            axios.post(`${DB_URL}/users/`, this.data)
        } else {
            axios.put(`${DB_URL}/users/${id}`, this.data)
        }
    
    }
}