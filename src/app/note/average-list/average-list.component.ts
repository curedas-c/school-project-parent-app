import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-average-list',
  templateUrl: './average-list.component.html',
  styleUrls: ['./average-list.component.scss'],
})
export class AverageListComponent implements OnInit {

  averageList: {subjectName: string, average: number, statusColor: string}[] = [
    {
      subjectName: 'Français',
      average: 13,
      statusColor: 'primary'
    },
    {
      subjectName: 'Anglais',
      average: 7,
      statusColor: 'danger'
    },
    {
      subjectName: 'Histoire-Géographie',
      average: 11,
      statusColor: 'warning'
    },
    {
      subjectName: 'Mathématiques',
      average: 6,
      statusColor: 'danger'
    },
    {
      subjectName: 'Physique-Chimie',
      average: 12,
      statusColor: 'primary'
    },
    {
      subjectName: 'SVT',
      average: 17,
      statusColor: 'success'
    },
  ];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {}

  showDetails(average: any) {
    this.router.navigate(['./details', { averageId: average }], { relativeTo: this.route});
  }
}
