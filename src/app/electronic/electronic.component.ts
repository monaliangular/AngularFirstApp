import { Component, OnInit } from '@angular/core';
import { ProductserService } from '../productser.service';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {
  msgfromelectronic = 'hello we are from electronic';
  msgfromfashion = '';
  constructor(private shareservice:ProductserService) { }

  ngOnInit(){
    this.shareservice.sendtofashion(this.msgfromelectronic);
    this.shareservice.sharedeleservice.subscribe((data)=>{
       this.msgfromfashion = data;
    })
  }

  

}
