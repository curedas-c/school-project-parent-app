import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  studentsNameList = [{ title: 'Profile' }, { title: 'Log out' }];
  constructor() { }

  ngOnInit() {
  }

}
