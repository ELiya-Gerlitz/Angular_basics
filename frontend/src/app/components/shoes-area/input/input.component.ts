import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  public textThatIsWritten = ""

  public clickingFunction(e :any):void{
    console.log(e.target.value)
    console.log(e.target.innerText)
    console.log(e.target)
    console.log(e)

  }

  public colorThatUserInserted = ""

}
