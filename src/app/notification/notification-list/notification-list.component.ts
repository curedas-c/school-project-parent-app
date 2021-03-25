import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent implements OnInit {

  eventList: any[] = [
    {
      date: 'Mar. 07-04-2021',
      title: 'Rappel des modalités de Paiement',
      subtitle: 'Frais de scolarité pour le mois d\'Avril.',
      description: `Le Service des ressources financières, vous rappelle que la date limite de paiement pour le 3ème versement de vos droits de scolarité est fixée au Vendredi 07 Avril`,
      coverImage: '',
      statusColor: 'danger'
    },
    {
      date: 'Lun. 10-05-2021',
      title: 'Sortie Pédagogique',
      subtitle: 'Découvrir la ville historique de Grand-Bassam.',
      description: `Nous venons par la présente vous informer qu'une sortie détente est organisée par l'établissement le Samedi 27 Juin.`,
      coverImage: 'assets/images/event_1.jpg',
      statusColor: 'warning'
    },
    {
      date: 'Mar. 07-04-2021',
      title: 'Rappel des modalités de Paiement',
      subtitle: 'Frais de scolarité pour le mois d\'Avril.',
      description: `Le Service des ressources financières, vous rappelle que la date limite de paiement pour le 3ème versement de vos droits de scolarité est fixée au Vendredi 07 Avril`,
      coverImage: '',
      statusColor: 'danger'
    },
    {
      date: 'Mar. 07-04-2021',
      title: 'Rappel des modalités de Paiement',
      subtitle: 'Frais de scolarité pour le mois d\'Avril.',
      description: `Le Service des ressources financières, vous rappelle que la date limite de paiement pour le 3ème versement de vos droits de scolarité est fixée au Vendredi 07 Avril`,
      coverImage: '',
      statusColor: 'danger'
    }
  ];
  constructor() { }

  ngOnInit() {}

}
