import {UserUnauthorizedError} from "./Errors/user-unauthorized-error";
import {WrongDbColumnError} from "./Errors/wrong-db-column-error";

export class Wrong {
    public userAuthenticated: boolean;
    private MasterTableColumns: string[] = [
        'Foo'
    ]

    public async userIsNotAuthenticated(): Promise<void|UserUnauthorizedError|Error> {
        if (this.userAuthenticated === false) {
            throw new UserUnauthorizedError()
        }

        throw new Error("whoops")
    }

    public async selectDBColumn(name: string): Promise<void|WrongDbColumnError> {
       if (!this.MasterTableColumns.includes(name)) {
            throw new WrongDbColumnError(name, 'master')
       }
    }
}

const wrong = new Wrong();

wrong.userAuthenticated = true

// wrong.userIsNotAuthenticated().catch(e => {
//     if (e instanceof UserUnauthorizedError) {
//         console.log("redirect")
//     } else {
//         console.error("Something went wrong, log error somewhere else")
//         console.error(e);
//         return
//     }
// })

wrong.selectDBColumn("Bar").catch(e => {
    console.error(e)
    return
})