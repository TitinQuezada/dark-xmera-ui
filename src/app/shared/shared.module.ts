import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import components from './components';
import { TableOperatioButtonsComponent } from './components/table-operation-buttons/table-operation-buttons.component';
import { HttpClientInterceptor } from './http-client/http-client-interceptor';
import { CreateOrEditElementComponent } from './components/create-or-edit-element/create-or-edit-element.component';
import { DynamicInputComponent } from './components/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './components/dynamic-select/dynamic-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateOrEditElementActionsComponent } from './components/create-or-edit-element-actions/create-or-edit-element-actions.component';
import { CreateOrEditElementBodyComponent } from './components/create-or-edit-element-body/create-or-edit-element-body.component';
import { ViewElementComponent } from './components/view-element/view-element.component';
import { FormatPropertyComponent } from './components/format-property/format-property.component';

@NgModule({
  declarations: [
    ...components,
    TableOperatioButtonsComponent,
    CreateOrEditElementComponent,
    DynamicInputComponent,
    DynamicSelectComponent,
    CreateOrEditElementActionsComponent,
    CreateOrEditElementBodyComponent,
    ViewElementComponent,
    FormatPropertyComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    HttpClientModule,
    TranslateModule,
    MaterialModule,
    ...components,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
