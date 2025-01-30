import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TolistComponent } from './tolist/tolist.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './common/header/header.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,
    RegisterComponent,
    TolistComponent,
    EmployeeComponent,
    ProductComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';
  name1: any;
  users: { id: number; name: string; email: string }[] = [];



  nameinput(name:any) {
    this.name1 = name;
    const newUser = { id: this.users.length + 1, name: name, email: 'ne' };
    this.users.push(newUser);
   
    console.log('name', name,this.users);

    //console.log(name.target.vale);//when use event in HTML

  }


  removeUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
