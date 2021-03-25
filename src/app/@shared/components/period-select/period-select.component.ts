import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-period-select',
  templateUrl: './period-select.component.html',
  styleUrls: ['./period-select.component.scss'],
})
export class PeriodSelectComponent implements OnInit {

  YearPeriod: any[] = [
    '1er Trimestre',
    '2nd Trimestre',
    '3ème Trimestre'
  ];
  currentPeriod = '1er Trimestre';
  constructor() { }

  ngOnInit() {}

}
