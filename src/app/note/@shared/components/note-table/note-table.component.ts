import { Component, OnInit } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface Note {
  date: string;
  note: number;
  bareme: string;
  statusColor: string;
}

@Component({
  selector: 'app-note-table',
  templateUrl: './note-table.component.html',
  styleUrls: ['./note-table.component.scss'],
})
export class NoteTableComponent implements OnInit {

  defaultColumns = [ 'date', 'note', 'bareme' ];

  dataSource: NbTreeGridDataSource<any>;

  sortColumn = 'date';
  sortDirection: NbSortDirection = NbSortDirection.ASCENDING;

  private data: TreeNode<Note>[] = [
    {
      data: { date: '20/02/2021', note: 6, bareme: '/20', statusColor: 'danger'},
    },
    {
      data: { date: '21/02/2021', note: 8, bareme: '/20', statusColor: 'danger'},
    },
    ,
    {
      data: { date: '07/01/2021', note: 10, bareme: '/20', statusColor: ''},
    },
    ,
    {
      data: { date: '03/01/2021', note: 11, bareme: '/20', statusColor: ''},
    },
    ,
    {
      data: { date: '01/03/2021', note: 9, bareme: '/20', statusColor: ''},
    },
  ];

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<Note>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  ngOnInit() {}

  changeSort(sortRequest: NbSortRequest): void {
    this.dataSource.sort(sortRequest);
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getDirection(column: string): NbSortDirection {
    if (column === this.sortColumn) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }
}
