import {Component, OnInit} from '@angular/core';
import {ClientsService} from '../clients.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ISearchParams} from '../../../shared/models/SearchParams';
import {MatDialog} from '@angular/material/dialog';
import {ClientDetailsComponent} from '../client-details/client-details.component';
import {ClientFilesComponent} from '../client-files/client-files.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'firstname', 'lastname',
    'email', 'birthDate', 'registrationDate', 'ipAddress', 'status', 'actions'];
  dataSource;
  form: FormGroup;

  constructor(
    private clientsService: ClientsService,
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      birthDate: [''],
      status: ['']
    })
    this.getClients();
  }

  getClients(search?: ISearchParams) {
    this.clientsService.getClients(search)
      .subscribe(clients => {
        console.log(clients);
        this.dataSource = clients;
      }, error => console.log(error));
  }

  nameSearch() {
    const search = this.form.value as ISearchParams;
    this.getClients(search);
  }

  openClientDetails(id: number) {
    this.dialog.open(ClientDetailsComponent, {
      data: id,
      minWidth: '40vw',
    });
  }
  openClientFiles(id: number) {
    this.dialog.open(ClientFilesComponent, {
      data: id,
      minWidth: '40vw',
    });
  }
}
