import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss'],
})
export class InputErrorComponent implements OnInit {
  @Input() error: string;
  @Input() data: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
