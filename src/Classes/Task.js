import {v4 as uuid} from 'uuid';

export default class{
    constructor(title, completed = false, parentLists = []){
        this.id = uuid();
        this.completed = completed;
        this.parentLists = parentLists;
    }
}