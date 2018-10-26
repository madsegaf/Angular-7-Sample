import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }


  firstClick(){
    return console.log('clicked');
  }

  ChangeValueH1Style(){
    return true;
  }

  getDataProvinsi(){
    return this.http.get('https://provkabwebservices.azurewebsites.net/api/data_provinsi');
  }

  getDataKabupaten(id:string){  
   return this.http.post('https://provkabwebservices.azurewebsites.net/home/ajaxkab',{idprov:id});
  }

}


