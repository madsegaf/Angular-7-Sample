import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {

  mykey : string;
  mypass : string;

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

  SendSMSMessage(name : string, phone : string, message : string){
    this.mykey = "2qvgj9";
    this.mypass = "Pa$$w0rd";
    return this.http.get('https://reguler.zenziva.net/apps/smsapi.php?userkey='+this.mykey+
    '&passkey='+this.mypass+'&nohp='+phone+'&pesan=Hi ' + name +'\n' + message, {responseType: 'text'});
  }
}


