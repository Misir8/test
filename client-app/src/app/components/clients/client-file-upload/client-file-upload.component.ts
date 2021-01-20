import {Component, Inject, OnInit} from '@angular/core';
import {ClientsService} from '../clients.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-client-file-upload',
  templateUrl: './client-file-upload.component.html',
  styleUrls: ['./client-file-upload.component.scss']
})
export class ClientFileUploadComponent implements OnInit {
  files: FileList;
  constructor(
    private clientsService: ClientsService,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    console.log();
  }

  changeUpload(value: any) {
    this.files = value.srcElement.files;
    const formData = new FormData();
    Object.values(this.files).forEach(file => {
      formData.append('photos', file);
    })
    this.clientsService.uploadClientFile(this.data, formData)
      .subscribe(res => {
        alert(res);
      }, error => alert(error.message));
  }
}
