import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientRoutingModule} from './client-routing.module';
import {ClientsListComponent} from './clients-list/clients-list.component';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ClientDetailsComponent} from './client-details/client-details.component';
import {ClientFilesComponent} from './client-files/client-files.component';
import {ClientFileUploadComponent} from './client-file-upload/client-file-upload.component';



@NgModule({
  declarations: [
    ClientsListComponent,
    ClientDetailsComponent,
    ClientFilesComponent,
    ClientFileUploadComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
