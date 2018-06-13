/*
import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <input type="file" (change)="onFileChange($event)" #fileInput style="visibility: hidden"/>

      <input placeholder="Enter filename" [(ngModel)]="txtName"/>
      <br>
      <button (click)="uploadFile();">Upload File</button>
      <button (click)="fileInput.click();">Choose File</button>
      <p>Filename: {{ myFile?.name }}</p>
    </div>
  `
})
export class AppComponent {
  myFile: File;
  txtName = '';

  constructor(private http: Http) {}

  onFileChange(event) {
    this.myFile = event.target.files[0];
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('product-image', this.myFile, this.myFile.name);
    formData.append('name', this.txtName);
    this.http.post('http://localhost:3000/upload', formData)
    .toPromise()
    .then(() => alert('Upload thanh cong'))
    .catch(() => alert('Upload that bai'));
  }
}
*/
