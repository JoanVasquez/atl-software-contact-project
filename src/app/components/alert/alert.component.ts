import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() alertColor: string;
  @Input() message: any;
  @Input() messageIdentity: string;
  @Output() removeAlert: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onRemove(): void {
    this.removeAlert.emit();
  }
}
