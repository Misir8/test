import {Component, Inject, OnInit} from '@angular/core';
import {ClientsService} from '../clients.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {environment} from '../../../../environments/environment';
import {IClient} from '../../../shared/models/Client';

@Component({
  selector: 'app-client-files',
  templateUrl: './client-files.component.html',
  styleUrls: ['./client-files.component.scss']
})
export class ClientFilesComponent implements OnInit {
  url: string = environment.baseUrl;
  img: string = environment.imgPath;
  client: IClient;
  constructor(
    private clientsService: ClientsService,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    this.clientsService.getClientFiles(this.data)
      .subscribe(client => {
        this.client = client;
      }, error => console.log(error));
  }

}
