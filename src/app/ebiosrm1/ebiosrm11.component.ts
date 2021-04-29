import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from '../interface/projects-interface';
import { ProjectsService } from '../service/projects.service';
import { Frame } from '../interface/frames-interface';
import { FramesService } from '../service/frames.service';
import { SpinnerService } from '../component-loading/spinner.service';
import { NavigationBarService } from '../navigation-bar/navigation-bar.service';

@Component({
  selector: 'app-ebiosrm11',
  templateUrl: './ebiosrm11.component.html',
  styleUrls: ['./ebiosrm11.component.css']
})
export class Ebiosrm11Component implements OnInit {

  //@Input() project?: Project;
  myproject: Project;
  myframe: Frame;
  isEditable: boolean;
  optionList: string[] = ['test','angular','vue','js'];
  titleList: string[] = [
    "Nom du projet",
    "Description de l'objectif",
    "Commentaire supplémentaire",
    "Responsable",
    "Période de l'atelier 1",
    "Période de l'atelier 2",
    "Période de l'atelier 3",
    "Période de l'atelier 4",
    "Période de l'atelier 5",
    "Période de l'atelier Stratégique",
    "Période de l'atelier Opérationnel"
  ]

  //Variable du spinner de chargement
  ishttpLoaded: boolean = false;
  isLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private framesService: FramesService,
    private location: Location,
    private loadingData:SpinnerService, //Déclaration du service de chargement
    private navbarService:NavigationBarService
  ) {}

  ngOnInit(): void {
    this.loadingData.returnAsObservable().subscribe(
      subs => {this.ishttpLoaded=subs;})
    //permet de load le spinner
    this.getProject();
    this.isEditable=false;
  }

  goBack(): void{
    this.location.back();
  }

  //also get frame
  getProject(): void{
    const project_id = +this.route.snapshot.paramMap.get('id');
    //----------------------
    this.ishttpLoaded = true;
    this.loadingData.gettingData(this.projectsService.getUrl()+"/"+project_id).subscribe(
    success => {/*console.log("DashboardComponent: Load project success")*/},
      error => {console.log("EbiosRM11 Component: Load project failure");
        console.log(error);})
    this.projectsService.getProject(project_id).subscribe(
      project => {this.myproject = project; //Ensuite load les sublinks
        this.navbarService.setSubLinks(this.myproject.project_type,this.myproject.id);})
      
    this.loadingData.gettingData(this.framesService.getUrl()+"/"+project_id).subscribe(
      success => {}, error => {console.log("EbiosRM11 Component: Load frame failure");
        console.log(error);})
    this.framesService.getFrame(project_id).subscribe(
      frame => { this.myframe = frame;
      this.ishttpLoaded = false;})}

  saveProject() : void {
    this.projectsService.updateProject(this.myproject)
    .subscribe()
    //.subscribe(() => this.goBack())
  }

  saveFrame() : void {
    this.framesService.updateFrame(this.myframe)
    .subscribe()
  }
}
