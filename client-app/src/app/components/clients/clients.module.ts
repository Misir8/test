import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientRoutingModule} from './client-routing.module';
import {ClientsListComponent} from './clients-list/clients-list.component';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ClientDetailsComponent} from './client-details/client-details.component';
import {ClientFilesComponent} from './client-files/client-files.component';



@NgModule({
  declarations: [
    ClientsListComponent,
    ClientDetailsComponent,
    ClientFilesComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
