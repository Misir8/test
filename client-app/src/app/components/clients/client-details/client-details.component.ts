import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ClientsService} from '../clients.service';
import {Observable} from 'rxjs';
import {IClient} from '../../../shared/models/Client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  client: IClient;
  constructor(
    private clientsService: ClientsService,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    this.getClientById();
  }

  getClientById(){
    this.clientsService.getClientById(this.data)
      .subscribe(client => {
        this.client = client;
      }, error => console.log(error));
  }

}
