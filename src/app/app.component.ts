import { Component } from '@angular/core';
import {Router, NavigationStart, NavigationEnd} from '@angular/router';
import { NavigationBarService } from './navigation-bar/navigation-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Risk Manager 0.1';
  //Variable for Loading animation
  isLoaded:boolean=false;
  ishttpLoaded:boolean=false;
  subLinks: Array<{text: string, path: string}>;

  constructor(
    private route:Router,
    private navbarService:NavigationBarService){}

  ngOnInit(){    
    //Permet d'afficher le chargement des pages
    //C'est la seule fois ou le chargement est rouge
    this.route.events.subscribe(
      event => {
        if(event instanceof NavigationStart){
          //console.log("App Component: navigation starts");
          this.isLoaded=true;
        }
        else if(event instanceof NavigationEnd){
          //console.log("App Component: navigation ends");
          this.isLoaded=false;
          //Mise à jour des links de la sidenav
          this.subLinks=this.navbarService.getSubLinks();
        }},
      error => {
        this.isLoaded=false;
        console.log("App Component:");
        console.log(error);
  })}
}
