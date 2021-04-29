import { Component, OnInit } from '@angular/core';
//import { InMemoryDataService } from '../service/in-memory-data.service';
import { Project } from '../interface/projects-interface';
import { ProjectsService } from '../service/projects.service';
import { ProjectEditService }  from '../service/project-edit.service';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';


export interface ANSSI_Table {
  position: number;
  detail: string;
  At1: string;
  At2: string;
  At3: string;
  At4: string;
  At5: string;
}

const ELEMENT_DATA: ANSSI_Table[] = [
  {position: 1, detail: "Identifier le socle de sécurité adapté à l'objet de l'étude",
  At1: 'X',At2: ' ',At3: ' ',At4: ' ',At5: ' '},
  {position: 2, detail: "Etre en conformité avec les référentiels de sécurité numérique",
  At1: 'X',At2: ' ',At3: ' ',At4: ' ',At5: 'X'},
  {position: 3, detail: "Evaluer le niveau de menace vis-à-vis de l'objet de l'étude",
  At1: ' ',At2: ' ',At3: 'X',At4: ' ',At5: ' '},
  {position: 4, detail: "Identifier et analyser les scénarios de haut niveau, intégrant l'ecosystème",
  At1: ' ',At2: 'X',At3: 'X',At4: ' ',At5: ' '},
  {position: 5, detail: "Réaliser une étude préliminaire de risque pour identifier les axes prioritaires",
  At1: 'X',At2: 'X',At3: 'X',At4: ' ',At5: 'X'},
  {position: 6, detail: "Conduire une étude de risque complète et fine, par exemple sur un produit de sécurité ou en vue de l'homologation d'un système",
  At1: 'X',At2: 'X',At3: 'X',At4: 'X',At5: 'X'},
  {position: 7, detail: "Orienter un audit de sécurité et notament un test d'intrusion",
  At1: ' ',At2: ' ',At3: 'X',At4: 'X',At5: ' '},
  {position: 8, detail: "Orienter les dispositifs de detection et de réaction, par exemple au niveau d'un centre opérationnel de la sécurité (SOC)",
  At1: ' ',At2: ' ',At3: 'X',At4: 'X',At5: ' '},
];

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  projects:Project[];
  projectName: string = "";
  TypeSelected: string;
  intTypeSelected: number;
  newUrl: string;
  newId: number;
  createType: string[]=['EBIOS-RM', 'ISP', 'EBIOS'];
  titleString: string[] = ["Nom du projet"]

  displayedColumns: string[] = ['select', 'detail', 'At1','At2','At3','At4','At5'];
  dataSource = new MatTableDataSource<ANSSI_Table>(ELEMENT_DATA);
  selection = new SelectionModel<ANSSI_Table>(true, []);

  constructor(
    //private memoryService: InMemoryDataService,
    private projectsService: ProjectsService,
    private projectEditService: ProjectEditService,) { 
      this.intSelectReset()
    }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectsService.getProjects()
    .subscribe(projects => this.projects = projects);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ANSSI_Table): string {
    this.intTypeSelected = row.position;
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  intSelectReset(): void{
    this.intTypeSelected = 0;
  }

  add(project_name: string): void {
    if(project_name==""){project_name = "New";}
    project_name = project_name.trim();
    if (!project_name) {return;}

    let project_type: number;
    let project_last: string;
    project_type = this.TypeConvertor();
    project_last = this.initPos();
    const project_when = new Date().toDateString();

    //TODO: Modifier Moi par un login
    const project_who = "Moi";
    const project_owner = project_who;
    
    this.projectsService
    .createProject(project_name, project_type, project_when, project_who, project_last, project_owner)
    .subscribe(project => this.projects.push(project));

    this.projectEditService.addProject();
  }

  TypeConvertor(): number{
    if(this.TypeSelected == "EBIOS-RM"){
      //Default value if nothing selected
      if(this.intTypeSelected == 0){
        this.intTypeSelected = 14;
      }
      return 1 + this.intTypeSelected;
      
    }
    else if(this.TypeSelected == "ISP"){
      //Default value if nothing selected
      if(this.intTypeSelected == 0){
        this.intTypeSelected = 19;
      }
      return 2 + this.intTypeSelected;
    }
    else if(this.TypeSelected == "EBIOS"){
      //Default value if nothing selected
      if(this.intTypeSelected == 0){
        this.intTypeSelected = 28;
      }
      return 3+this.intTypeSelected;
    }
  }

  initPos(): string{
    if(this.TypeSelected == "EBIOS"){
      //TODO: remplacer par les nouveaux composants
      return "EbiosRM-11";
    }
    else if(this.TypeSelected == "ISP"){
      //TODO: remplacer par les nouveaux composants
      return "EbiosRM-11";
    }
    else if(this.TypeSelected == "EBIOS-RM"){
      return "EbiosRM-11";
    }
  }
}
