import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationInstance } from 'ngx-pagination';

import { paginationInstance } from './pagination.config';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {
  objectKeys: any = Object.keys;
  objectValues: any = Object.values;
  @Input() data: any[] = [];
  @Input() action: boolean;
  @Input() headerTable: object;
  @Input() updatePath;
  @Input() header: string;
  loading: boolean = true;

  paginationConfig: PaginationInstance;
  constructor() {}

  ngOnInit(): void {
    if (this.data.length === 0 || this.data.length > 0) this.loading = false;
    this.paginationConfig = paginationInstance;
  }

  onEdit(id: number): void {
    //this.router.navigateByUrl(`${this.updatePath}/${id}`);
  }
}
