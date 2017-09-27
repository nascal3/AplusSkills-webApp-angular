import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class AddNewServiceService {

  files;

  constructor(private http: HttpClient) { }

  uploadFile(formdata: any) {
    const url = 'http://upload.dev/fileUpload.php';
    return this.http.post(url, formdata).catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    console.log('Error occurred: ' + error);
    return Observable.throw(error);
  }

  getImageFiles() {
    return this.http.get('http://upload.dev/getFilesFromDirectory.php');
  }

}
