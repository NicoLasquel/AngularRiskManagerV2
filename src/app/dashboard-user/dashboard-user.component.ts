import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentDialogComponent } from '../component-dialog/component-dialog.component';

import { Project } from '../interface/projects-interface';
import { ProjectsService } from '../service/projects.service';
import { MessageService } from '../service/message.service';
import { SpinnerService } from '../component-loading/spinner.service';
import { ProjectEditService } from '../service/project-edit.service';
import { NavigationBarService } from '../navigation-bar/navigation-bar.service';


@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {
  selectedProject?: Project;
  projects: Project[] = [];
  typeString: string;

  //Variable du spinner de chargement
  ishttpLoaded: boolean = false;
  isLoaded: boolean = false;
  
  constructor(
    private projectEditService:ProjectEditService,
    private projectsService: ProjectsService,
    private messageService: MessageService,
    public dialog: MatDialog,
    private loadingData:SpinnerService, //Déclaration du service de chargement
    private navbarService: NavigationBarService
    ) { }

  ngOnInit(): void {
    this.loadingData.returnAsObservable().subscribe(
      subs => {this.ishttpLoaded=subs;})
    //permet de load le spinner
    this.getProjects();
    this.navbarService.setSubLinks(0,0);
  }

  getProjects(): void {
    this.ishttpLoaded = true;
    this.loadingData.gettingData(this.projectsService.getUrl()).subscribe(
      success => {
      //console.log("DashboardComponent: Load project success")
      /*console.log(success);*/},
      error => {
        console.log("DashboardComponent: Load project failure")
        console.log(error);})
    //ajout pour le fonctionnement du loading spinner
    
    this.projectsService.getProjects()
    .subscribe(projects => {
      this.ishttpLoaded = false;
      this.projects = projects});
  }

  onSelect(project:Project): void {
    this.selectedProject = project;
    this.messageService.add(`DashboardComponent: Selected project id=${project.id}`)
  }

  projectType(project:Project): string{
    if(project.project_type<39){
      this.typeString = 'EBIOS';
    }
    if(project.project_type<29){
      this.typeString = 'ISP';
    }
    if(project.project_type<19){
      this.typeString = 'EBIOS-RM';
    }
    return this.typeString;
  }

  removeProjectDialog(proj: Project) {
    const dialogRef = this.dialog.open(ComponentDialogComponent, {data:
      {title:"Suppression d'un projet",
      message: "Cette opération est une opération définitive, êtes-vous sûre de vouloir continuer?",
      button1: "close",
      button2: "delete"
    }});
    
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult==false){this.delete(proj);}
    })
  }

  delete(project:Project): void{
    this.projects=this.projects.filter(p => p !==project);
    this.projectsService.deleteProject(project.id).subscribe();
    //TODO ajouter chaque nouvelle partie des projets dans projectEdit
    this.projectEditService.removeProject(project.id);
  }
}

