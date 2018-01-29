
export class Task {
 tname: string;
 owner: string;
 due: string;
 dueDt: string;
 dueToday: boolean;
 tile: string;
 completed: boolean;
 constructor() {
   this.tname = '';
   this.owner = '';
   this.tile = '';
   this.due = '';
   this.dueDt = '';
   this.dueToday = false;
   this.completed = false;
 }
 construcor(tname: string, owner: string, tile: string, due: string, dueDt: string, dueToday: boolean) {
    this.tname = tname;
    this.owner = owner;
    this.tile = tile;
    this.due = due;
    this.dueDt = dueDt;
    this.dueToday = dueToday;
 }
}
