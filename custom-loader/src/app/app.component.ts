import { Component, OnInit } from '@angular/core';


declare function loadingServiceShow(zindex, id, flag);
declare function loadingServiceHide(id);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'custom-loader';

  ngOnInit() {

  }
  callme() {
    loadingServiceShow(1, 'loginbtnadd', false);
  }
  callmestop() {
    loadingServiceHide('loginbtnadd');
  }
  loadoncountry(type) {
    if (type == "country") {
      loadingServiceShow(1, 'btnstate', false);     
      setTimeout(() => {
        loadingServiceHide('btnstate');
      }, 3000);
    }
    else if (type == "state") {
      loadingServiceShow(1, 'btncity', false);     
      setTimeout(() => {
        loadingServiceHide('btncity');
      }, 3000);
    }
  }
  multipleload(){
    loadingServiceShow(1, 'btncountry', false);  
    loadingServiceShow(1, 'btnstate', false);  
    loadingServiceShow(1, 'btncity', false);     
    loadingServiceShow(1, 'loginbtnadd', false);
  }
  stopall(){
    loadingServiceHide('btncity');
    loadingServiceHide('btnstate');
    loadingServiceHide('btncountry');
    loadingServiceHide('loginbtnadd');
  }
  fullpage(){
    loadingServiceShow(1, 'btncountry', true);  
    setTimeout(() => {
      loadingServiceHide('btncountry');
    }, 3000);
    
  }
}
