import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddNewServiceService {

  constructor(private http: HttpClient) { }

  getImageFiles() {
    return this.http.get('http://upload.dev/getFilesFromDirectory.php');
  }

}
