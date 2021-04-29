import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from '../interface/projects-interface';
import { Frame } from '../interface/frames-interface';
import { ActorList } from '../interface/actorsList-interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }

  createDb(){
    const projects= [
      { id: 1, 
        project_name: "Lactalis",
        project_type: 11,
        project_last: "EbiosRM-11",
        project_when: '2021-04-06',
        project_who: "Moi",
        project_owner: "JP"},
      {id: 2, 
        project_name: "Sewan",
        project_type: 20,
        project_last: "EbiosRM-11",
        project_when: '2021-04-06',
        project_who: "Moi",
        project_owner: "JP"}]

    const frames=[
      {id: 1,
        frame_detail: "Ce projet est un projet concernant les ISP",
        frame_moredetail: "non",
        frame_timeAt1_start: '4/16/2021',
        frame_timeAt1_end: '4/17/2021',
        frame_timeAt2_start: '4/18/2021',
        frame_timeAt2_end: '4/19/2021',
        frame_timeAt3_start: '4/20/2021',
        frame_timeAt3_end: '4/21/2021',
        frame_timeAt4_start: '4/22/2021',
        frame_timeAt4_end: '4/23/2021',
        frame_timeAt5_start: '4/24/2021',
        frame_timeAt5_end: '4/25/2021',
        frame_timeStrat_start: '4/26/2021',
        frame_timeStrat_end: '4/27/2021',
        frame_timeOp_start: '4/28/2021',
        frame_timeOp_end: '4/29/2021',
        frame_timedetail: "Tout a faire",
        frame_confidentiality: "Confidentiel",
        frame_responsable: "Nicolas Lasquellec"},
        {id: 2,
          frame_detail: "",
          frame_moredetail: "",
          frame_timeAt1_start: '',
          frame_timeAt1_end: '',
          frame_timeAt2_start: '',
          frame_timeAt2_end: '',
          frame_timeAt3_start: '',
          frame_timeAt3_end: '',
          frame_timeAt4_start: '',
          frame_timeAt4_end: '',
          frame_timeAt5_start: '',
          frame_timeAt5_end: '',
          frame_timeStrat_start: '',
          frame_timeStrat_end: '',
          frame_timeOp_start: '',
          frame_timeOp_end: '',
          frame_timedetail: "",
          frame_confidentiality: "",
          frame_responsable: ""}
      ]
      
    const actorsList = [
      {id:1,
        project_id: 1,
        actor_firstname: "Nic",
        actor_lastname: "olas",
        actor_job: "Lasq",
        actor_comment: "uellec",
        actor_At11: "R",
        actor_At12: "A",
        actor_At13: "C",
        actor_At14: "I",
        actor_At21: "X",
        actor_At22: "R",
        actor_At23: "A",
        actor_At31: "C",
        actor_At32: "I",
        actor_At33: "X",
        actor_At41: "R",
        actor_At42: "A",
        actor_At51: "C",
        actor_At52: "I",
        actor_At53: "X"},
        {id:2,
          actor_id: 2,
          actor_firstname: "",
          actor_lastname: "",
          actor_job: "",
          actor_comment: "",
          actor_At11: "",
          actor_At12: "",
          actor_At13: "",
          actor_At14: "",
          actor_At21: "",
          actor_At22: "",
          actor_At23: "",
          actor_At31: "",
          actor_At32: "",
          actor_At33: "",
          actor_At41: "",
          actor_At42: "",
          actor_At51: "",
          actor_At52: "",
          actor_At53: ""}
      
    ]
    return{projects, frames, actorsList};
  }

  genId <T extends Project |  Frame | ActorList>(projects:Project[]): number {  
    return projects.length > 0 ? Math.max(...projects.map(project => project.id)) + 1 : 1;
  }

}