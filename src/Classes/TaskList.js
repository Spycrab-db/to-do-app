import {v4 as uuid} from 'uuid';

export default class{
    constructor(title = "", taskArr = [], isShown = true){
        this.id = uuid();
        this.title = title;
        this.taskArr = taskArr;
        this.isShown = this.isShown;
    }
}