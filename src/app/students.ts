export class Students{
  private id:number;
  private fname:string;
  private lname:string;

  setName(fname:string, lname:string){
    this.fname=fname;
    this.lname=lname;

  }
  getName(){
    return this.fname+" "+this.lname;
    
  }

}