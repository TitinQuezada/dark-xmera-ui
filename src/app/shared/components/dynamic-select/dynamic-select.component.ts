import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiGatewayHttpClientService } from '../../http-client/api-gateway-http-client.service';
import { InputSelectModel } from '../../models/input-select-model';

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.css'],
})
export class DynamicSelectComponent implements OnInit {
  @Input() input: InputSelectModel;
  @Input() parentFormGroup: FormGroup;

  constructor(
    private readonly httpClientService: ApiGatewayHttpClientService
  ) {}

  ngOnInit(): void {
    this.httpClientService
      .get<Array<any>>(this.input.optionsUrl)
      .then((response) => {
        this.input.options = response.data?.map((element) => ({
          value: element.id,
          text: element.name,
        }));
      });
  }
}
