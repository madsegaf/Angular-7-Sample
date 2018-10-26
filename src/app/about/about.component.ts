import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  dataProvinsi : Object;
  dataKabupaten : Object;

  constructor(private data : DataService) { 
    }

  ngOnInit() {
    this.data.getDataProvinsi().subscribe(data => {
      this.dataProvinsi = data;
      console.log(this.dataProvinsi[1]);
    });
 }

getKabupaten(id:string){
   this.dataKabupaten = null;
  
   console.log(id); 
    this.data.getDataKabupaten(id).subscribe(data=>{
      this.dataKabupaten = data;
      console.log(this.dataKabupaten);
    });
}

}
