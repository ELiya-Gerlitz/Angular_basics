import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/services/color.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


// Random Color Generator *************************

public style = {backgroundColor : ""} //this is bound to the footer.html

  public constructor(private colorGenerator : ColorService){}

  public ngOnInit(): void {
    this.style.backgroundColor = this.colorGenerator.getColor()
  }


  // get Month in Hebrew ************************

  public now = new Date()
  public year = this.now.getFullYear()
  public month = this.now.getMonth()

  public HebrewMonth = [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יויל",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר"
  ]

}
