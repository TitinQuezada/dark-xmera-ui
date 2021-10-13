import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-or-edit-element-actions',
  templateUrl: './create-or-edit-element-actions.component.html',
  styleUrls: ['./create-or-edit-element-actions.component.css'],
})
export class CreateOrEditElementActionsComponent implements OnInit {
  @Output() save = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
