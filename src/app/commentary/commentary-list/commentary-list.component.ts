import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentary-list',
  templateUrl: './commentary-list.component.html',
  styleUrls: ['./commentary-list.component.scss'],
})
export class CommentaryListComponent implements OnInit {

  commentaryList: any[] = [
    {
      date: 'Lun. 10-10-2020',
      message: 'Votre fils commence à avoir trop de lacunes. Veuillez travailler un peu plus à la maison.',
      statusColor: 'warning',
      sender: {
        name: 'Boni Yayi',
        role: 'Educateur',
      }
    },
    {
      date: 'Jeu. 07-03-2021',
      message: `Pourions nous discuter de votre fils ? Il est à l'origine de beaucoup de bagarres ces temps-ci.`,
      statusColor: 'danger',
      sender: {
        name: 'Jean Bernard',
        role: 'Professeur',
      }
    },
  ];
  constructor() { }

  ngOnInit() {}

}
