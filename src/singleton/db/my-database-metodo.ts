import { User } from "../interface/user";

const users: User[] = [];

export const MyDatabaseMetod = {
    add(user: User): void {
        users.push(user)
    },

    remove(userName: string): void {
        const index = users.findIndex(user => user.name === userName);
        if (index !== -1) {
            users.splice(index, 1);
        }
    },
    show(): void{
        for(const user of users){
            console.log(user)
        }
    }
}