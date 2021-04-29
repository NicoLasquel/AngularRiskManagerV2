import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationBarService {

  private links = new Array<{text: string, path: string}>();
  private sublinks = new Array<{text: string, path: string}>();
  private isLoggedIn = new Subject();
  constructor() {
    this.addItem({text:'Login', path: 'login'});
    this.isLoggedIn.next(false);
  }

  getLinks(): Array<{text: string, path: string}> {
    return this.links;
  }

  getLoginStatus(): Subject<any>{
    return this.isLoggedIn;
  }

  updateLoginStatus(status: boolean): void {
    this.isLoggedIn.next(status);
    if(!status) {
      this.clearAllItems();
      this.addItem({text:'Login',path:'login'})
    }
  }

  updateNavAfterAuth(role: string): void{
    this.removeItem({text:'Login'});

    if (role === 'user'){
      this.addItem({text: 'User Board', path:'user'})
    }
    else if (role ==='admin') {
      this.addItem({text: 'Admin Board', path:'admin'})
    }
  }

  addItem({text, path}): void{
    this.links.push({text:text, path: path})
  }

  removeItem({text}): void{
    this.links.forEach((link, index) =>{
      if (link.text === text) {
        this.links.splice(index, 1)
      }
    })
  }

  clearAllItems(): void{
    this.links.length=0;
  }

  resetSubLinks(): void{
    this.sublinks.length=0;
  }

  initSubLinks(): void{
    this.sublinks.push({text:'Guide Ebios RM', path: '/GuideEbiosrm'});
    this.sublinks.push({text:'Guide ISP', path: '/GuideISP'});
    this.sublinks.push({text:'Guide Ebios', path: '/GuideEbios'});
  }
  
  getSubLinks(): Array<{text: string, path: string}> {
    if(this.sublinks.length == 0){ this.initSubLinks();}
    return this.sublinks;
  }

  setSubLinks(intType: number, idP: number): void{
    this.resetSubLinks();

    if (intType == 10 || intType == 11 || intType == 12 || intType == 13 || intType == 14 
      ||intType == 15 || intType == 16 || intType == 17 || intType == 18){
      this.ebiosrmSubLinks(intType, idP);
    }
    else{
      this.initSubLinks();
    }
  }

  ebiosrmSubLinks(intType: number, idP: number):void{
    this.sublinks.push({text:"Atelier 1", path:''});
    this.sublinks.push({text:"1.1 - Cadrage de l'étude", path: '/EbiosRM-11/'+idP});
    if (intType == 10 || intType == 11 || intType == 12 || intType == 15 || intType == 16){
      this.sublinks.push({text:'1.2 - Périmètre métier et technique', path: '/EbiosRM-12/'+idP});
      this.sublinks.push({text:'1.3 - Les évènements redouté', path: '/EbiosRM-13/'+idP});
      this.sublinks.push({text:'1.4 - Le socle de sécurité', path: '/EbiosRM-14/'+idP});
    } else {this.sublinks.push({text:"-", path:''});}
    
    this.sublinks.push({text:"Atelier 2", path:''});
    if (intType == 10 || intType == 14 || intType == 15 || intType == 16){
      this.sublinks.push({text:'2.1 - Identifier les SR/OV', path: '/EbiosRM-21/'+idP});
      this.sublinks.push({text:'2.2 - Evaluer les couples SR/OV', path: '/EbiosRM-22/'+idP});
      this.sublinks.push({text:'2.3 - Sélectionner les couples', path: '/EbiosRM-23/'+idP});
    } else {this.sublinks.push({text:"-", path:''});}
    
    this.sublinks.push({text:"Atelier 3", path:''});
    if (intType == 10 || intType == 13 || intType == 14 || intType == 15 || intType == 16 || intType == 17 || intType == 18){
      this.sublinks.push({text:'3.1 - Construire la cartographie', path: '/EbiosRM-31/'+idP});
    this.sublinks.push({text:'3.2 - Elaborer des scénarios stratégiques', path: '/EbiosRM-32/'+idP});
    this.sublinks.push({text:'3.3 - Définir des mesures de sécurité', path: '/EbiosRM-33/'+idP});
    } else {this.sublinks.push({text:"-", path:''});}
    
    this.sublinks.push({text:"Atelier 4", path:''});
    if (intType == 10 || intType == 16 || intType == 17 || intType == 18){
    this.sublinks.push({text:'4.1 - Elaborer les scénarios opérationnels', path: '/EbiosRM-41/'+idP});
    this.sublinks.push({text:'4.2 - Evaluer la vraisemblance des scénarios opérationnels', path: '/EbiosRM-42/'+idP});
    } else {this.sublinks.push({text:"-", path:''});}

    this.sublinks.push({text:"Atelier 5", path:''});
    if (intType == 10 ||intType == 12 || intType == 15 || intType == 16){
    this.sublinks.push({text:'5.1 - Synthèse des scénarios de risque', path: '/EbiosRM-51/'+idP});
    this.sublinks.push({text:'5.2 - Stratégie de traitement du risque et mesures de sécurité', path: '/EbiosRM-52/'+idP});
    this.sublinks.push({text:'5.3 - Evaluer et documenter les risques résiduels', path: '/EbiosRM-53/'+idP});
    } else {this.sublinks.push({text:"-", path:''});}
  }
  
}
