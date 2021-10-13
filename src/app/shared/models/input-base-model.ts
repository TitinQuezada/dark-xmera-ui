import { InputTypes } from '../enums/input-types.enum';

export class InputBaseModel {
  id: string;
  type?: string = InputTypes.Text;
  labelKey: string;
  icon?: string;
  columns?: number;

  constructor(props: InputBaseModel) {
    this.id = props.id;
    this.labelKey = props.labelKey;
    this.icon = props.icon;
    this.columns = props.columns;
  }
}
