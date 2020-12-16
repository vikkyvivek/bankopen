import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.scss']
})
export class EligibilityCalculatorComponent implements OnInit {

  expense = 5000;
  income = 10000;
  months = 6;
  checked = false;
  emi = "0";
  loanAmount = 0;
  interestRate = 13;
  currentEmi = 0;

  constructor() { }

  ngOnInit() {
    this.handleChange();
  }

  handleChange() {
    this.loanAmount = ((this.income - this.expense - this.currentEmi) * 80) / 100;
    const interest = (this.loanAmount * this.interestRate * (this.months / 12)) / 100;
    this.emi = ((this.loanAmount + interest) / this.months).toFixed(2);
  }

  handleToggleChange() {
    this.currentEmi = 0;
    this.handleChange();
  }

  handleSliderClick(type, value) {
    if (type == 'income') {
      if (this.income + value >= 10000) {
        this.income = this.income + value;
      }
    } else {
      if(this.months + value >= 6) {
        this.months = this.months + value;
      }
    }
    this.handleChange();
  }

}
