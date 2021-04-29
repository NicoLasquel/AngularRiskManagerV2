import { Injectable } from '@angular/core';
import { Project } from '../interface/projects-interface';
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  newId : number;

  private objectUrl='http://localhost:4200/api/projects'; //URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    ) { }

  getUrl(): string {
    return this.objectUrl;
  }

  createProject(project_name: string, project_type: number, project_when: string, project_who: string, project_last: string, project_owner: string): Observable<Project>{
    let id: number;
    return this.addProject({
      id,
      project_name,
      project_type,
      project_last,
      project_when,
      project_who,
      project_owner
    } as Project);    
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.objectUrl)
    .pipe(
      tap(_ => this.log('fetched projects')),
      catchError(this.handleError<Project[]>('getProjects', []))
    );
  }

  /*
  Will 404 if not found
  Create an URL
  Server will answer with a single project rather than with an array of projects
  */ 
  getProject(projectId: number): Observable<Project> {
  const url = `${this.objectUrl}/${projectId}`;
  return this.http.get<Project>(url).pipe(
    tap(_ => this.log(`fetched project id=${projectId}`)),
    catchError(this.handleError<Project>(`getProject id=${projectId}`))
  );
  }

  ///////////////////// Save methods /////////////////////
  //POST
  /** POST: add a new hero to the server */
  addProject(project: Project): Observable<Project> {
    project.id=undefined;
    return this.http.post<Project>(this.objectUrl, project, this.httpOptions).pipe(
      tap((newProject: Project) => {
        this.log(`added project w/ id=${newProject.id}`);
      }),
      catchError(this.handleError<Project>('addProject'))
      );
  }

  //DELETE
  /** DELETE: delete the hero from the server */
  deleteProject(id: number): Observable<Project> {
    const url = `${this.objectUrl}/${id}`;

    return this.http.delete<Project>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted project id=${id}`)),
      catchError(this.handleError<Project>('deleteProject'))
  );
}

  //UPDATE
  /** PUT: update the hero on the server */
  updateProject(project: Project): Observable<any> {
    return this.http.put(this.objectUrl, project, this.httpOptions).pipe(
      tap(_ => this.log(`updated project id=${project.id}`)),
      catchError(this.handleError<any>('updateProject'))
    );
  }

  ///////////////////// Error and Log /////////////////////

  /**
   * Handle Http operation that failed
   * @param operation - name of the operation that failed
   * @param result - optionnal value to return as the observable result
   * @returns - Let the app keep running by returning an empty result.
   */
  private handleError<T>(operation='operation', result?: T){
    return (error:any): Observable<T> => {
      //TODO: send the error to remote logging infrastructure
      console.error(error);

      //TODO: better job of transforming error for user consuption
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  /* Log a ProjectService message with the messagService */
  private log(message: string) {
    this.messageService.add(`ProjectService: ${message}`);
  }
}
