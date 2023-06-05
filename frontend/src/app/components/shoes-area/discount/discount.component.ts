import { Component } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent {
  public specialShoes = "Addidas"

public shoes = [
  {id: 1, name: "Puma"},
  {id: 2, name: "Kappa"},
  {id: 3, name: "Nike"},
  {id: 4, name: "Papaya"}
]

  public isWeekend():boolean{
    const now = new Date()
    const day = now.getDay() +1
    return day ===2
  }

}
