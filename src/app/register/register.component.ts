import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  users: { id:number;first_name: string; last_name: string; email: string; mobile: string }[] = [
    // { id : 1,first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com', mobile: '1234567890' },
    // { id : 2,first_name: 'Jane', last_name: 'Smith', email: 'jane.smith@example.com', mobile: '9876543210' },
    // { id : 3,first_name: 'Alice', last_name: 'Brown', email: 'alice.brown@example.com', mobile: '1122334455' }
  ];
  isedit:boolean=false;
  id!:number;

  registerfrom = new FormGroup ({
    first_name : new FormControl(),
    last_name : new FormControl(),
    email : new FormControl(),
    mobile : new FormControl()
  })

  useSubmit(){
    if(this.isedit){
      const user = this.registerfrom.value;
       const payload = { 
        //: this.users.length+1, 
        id : this.id,
        first_name:user.first_name, 
        last_name : user.last_name, 
        email:user.email,
        mobile :user.mobile
      }
      this.users[this.id]= payload;
      this.registerfrom.reset();
      this.isedit=false;
    }
    else{
      const data = this.registerfrom.value;
      const payload = { 
        id: this.users.length+1, 
        first_name:data.first_name, 
        last_name : data.last_name, 
        email:data.email,
        mobile :data.mobile
      }
      this.users.push(payload);
      this.registerfrom.reset();
      console.log("User Data ", data);
    }
  
  }

  restForm(){
    this.registerfrom.reset();
  }

  deleteuser(id:number){
    this.users = this.users.filter(user => user.id !== id);
    console.log("Delete",this.users);
  }

  edituser(user: any){
    this.isedit = true;
    this.id=user.id;
    const payload = { 
      //: this.users.length+1, 
      first_name:user.first_name, 
      last_name : user.last_name, 
      email:user.email,
      mobile :user.mobile
    }

    this.registerfrom.setValue(payload)
console.log("User id",user);

  }


   

}
