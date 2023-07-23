import {v4 as uuid} from 'uuid';

export default class{
    constructor(title = ""){
        this.id = uuid();
        this.title = title;
    }
}