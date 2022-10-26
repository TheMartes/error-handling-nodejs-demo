export class WrongDbColumnError extends Error {
    constructor(column, table) {
        super();

        this.name = "DB Column does not exists."
        this.message = `Column ${column} on ${table} table does not exists.`
    }
}