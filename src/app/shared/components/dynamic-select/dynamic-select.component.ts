import { Component, Input, OnInit } from '@angular/core';
import { HttpClientService } from '../../http-client/http-client.service';
import { InputSelectModel } from '../../models/input-select-model';

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.css'],
})
export class DynamicSelectComponent implements OnInit {
  @Input() input: InputSelectModel;

  constructor(private readonly httpClientService: HttpClientService) {}

  ngOnInit(): void {
    this.httpClientService.get(this.input.optionsUrl).then((response) => {
      if (response.error) {
      } else {
        this.input.options = response.data.map((deparment) => ({
          value: deparment.id,
          text: deparment.name,
        }));
      }
    });
  }
}
