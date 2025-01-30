import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tolist',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './tolist.component.html',
  styleUrl: './tolist.component.css'
})
export class TolistComponent {
itemindex !: number;
isedittodo:boolean=false;
  fooditems : {id:number,food_name:string,food_quantity:number}[]=[
    {id:1,food_name:"apple",food_quantity:345}
  ]

  todoform = new FormGroup ({
    food_name : new FormControl(),
    food_quantity : new FormControl()
  })

  todoSubmit(){
    // todo edit section start
    if(this.isedittodo==true){
     console.log("I am edit mode")
      const foodVal = this.todoform.value;
      const input = {
        id : this.fooditems.length+1,
        food_name : foodVal.food_name,
        food_quantity : foodVal.food_quantity
      };
      this.fooditems[this.itemindex] = input;
    }
    // todo edit section end

    // todo submit section start
    else{
      console.log("I am submit mode")
      const foodVal = this.todoform.value;
      const input = {
        id : this.fooditems.length+1,
        food_name : foodVal.food_name,
        food_quantity : foodVal.food_quantity
      };
      this.fooditems.push(input);
      
      console.log("foodVal",foodVal);
      this.todoform.reset();
    }
    // todo submit section end

  }

  resetForm(){
    this.todoform.reset();
  }

  delete(id:number){
    this.fooditems =this.fooditems.filter(food =>food.id!==id);//food means variable u need to write anything

  }

  editFood(vv:any,foodindex:any){
   this.itemindex=foodindex;
   this.isedittodo=true;
    const inp = {
      //id : this.vv.length+1,
      food_name : vv.food_name,
      food_quantity : vv.food_quantity
    };
    this.todoform.setValue(inp);
    console.log(vv,foodindex)
  }





}
