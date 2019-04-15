export class Loginuser {
  private firstName:string;
  private lastName:string;
  private email:string;
  private password:string;

  setLoginUser(firstName:string, lastName:string, email:string, password:string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email= email;
    this. password= password;
  }
  getLoginUser(){
    return {"firstName":this.firstName, "lastName": this.lastName, "email": this.email, "password":this.password
    }
  }
}