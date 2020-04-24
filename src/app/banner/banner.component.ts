import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {DynamicScriptLoaderService} from '../_shared/services/DynamicScriptLoaderService';
=======
import {DynamicScriptLoaderService} from '../_shared/_services/DynamicScriptLoaderService';
>>>>>>> 41e8a9e74b797593730726bca15c63a121a3858a

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [DynamicScriptLoaderService]
})
export class BannerComponent implements OnInit {

  public scrip: string[] ;

  constructor(private dynamicScript: DynamicScriptLoaderService) { }


  ngOnInit() {
    this.scrip = this.dynamicScript.scrip;
    console.log(this.scrip);
    this.loadScripts(this.scrip);

  }

  private loadScripts(scr: string[]) {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    console.log(scr);
    this.dynamicScript.load(scr[30]).then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }

}
