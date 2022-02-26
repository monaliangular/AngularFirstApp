import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MensComponent } from '../mens/mens.component';
import { ProductserService } from '../productser.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit, AfterViewInit {
   
   fromfashion = "We are from fashion";
   fromelectronic = '';
   shirtdata = '';
   @ViewChild(MensComponent) menscomponet:MensComponent;
  constructor(private sharedservice:ProductserService) { }

  ngOnInit(): void {
    
    this.sharedservice.sendtoelectronic(this.fromfashion);
    this.sharedservice.sharedbehaiservice.subscribe((data)=>{
      this.fromelectronic = data;
    })
  }

  ngAfterViewInit():void {
   this.shirtdata = this.menscomponet.shirt;
   console.log(this.shirtdata);
  }
   
  
}
