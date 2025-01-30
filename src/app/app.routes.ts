import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
    {path: "product", component: ProductComponent},
    {path : "employee", component : EmployeeComponent}
];
