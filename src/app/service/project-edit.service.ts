import { Injectable } from '@angular/core';

import { FramesService } from './frames.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectEditService {

  constructor(
    private framesService: FramesService,
    ) { }

  removeProject(idRemove){
    this.framesService.deleteFrame(idRemove).subscribe();
  }

  addProject(){
    this.framesService.createFrame().subscribe();
  }
}
