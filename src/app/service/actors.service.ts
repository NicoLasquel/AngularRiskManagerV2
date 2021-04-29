import { Injectable } from '@angular/core';
import { ActorList } from '../interface/actorsList-interface';
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  newId : number;

  private objectUrl='http://localhost:4200/api/actors'; //URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  getUrl(): string {
    return this.objectUrl;
  }

  /*
  Will 404 if not found
  Create an URL
  Server will answer with a single actorList
  */ 
  getActorList(actorListId: number): Observable<ActorList> {
  const url = `${this.objectUrl}/${actorListId}`;
  return this.http.get<ActorList>(url).pipe(
    tap(_ => this.log(`fetched Actor id=${actorListId}`)),
    catchError(this.handleError<ActorList>(`getActor id=${actorListId}`))
  );
  }
  
  ///////////////////// Save methods /////////////////////
  //POST
  /** POST: add a new actorList to the server */
  addActorList(id : number): Observable<ActorList> {
    let actor: ActorList;
    actor.id = id;
    actor.actor_id = undefined;
    actor.actor_firstname= "";
    actor.actor_lastname= "";
    actor.actor_job= "";
    actor.actor_comment= "";
    actor.actor_At11= "";
    actor.actor_At12= "";
    actor.actor_At13= "";
    actor.actor_At14= "";
    actor.actor_At21= "";
    actor.actor_At22= "";
    actor.actor_At23= "";
    actor.actor_At31= "";
    actor.actor_At32= "";
    actor.actor_At33= "";
    actor.actor_At41= "";
    actor.actor_At42= "";
    actor.actor_At51= "";
    actor.actor_At52= "";
    actor.actor_At53= "";


    return this.http.post<ActorList>(this.objectUrl, actor, this.httpOptions).pipe(
      tap((newActorList: ActorList) => this.log(`added actorList w/ id=${newActorList.id}`)),
      catchError(this.handleError<ActorList>('addActorList'))
      );
  }

  //DELETE
  /** DELETE: delete the hero from the server */
  deleteActorList(id: number): Observable<ActorList> {
    const url = `${this.objectUrl}/${id}`;

    return this.http.delete<ActorList>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted actor id=${id}`)),
      catchError(this.handleError<ActorList>('deleteActor'))
  );
}

  //UPDATE
  /** PUT: update the hero on the server */
  updateActor(actor: ActorList): Observable<any> {
    return this.http.put(this.objectUrl, actor, this.httpOptions).pipe(
      tap(_ => this.log(`updated actorList id=${actor.id}`)),
      catchError(this.handleError<any>('updateActorList'))
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

  /* Log a ActorListService message with the messagService */
  private log(message: string) {
    this.messageService.add(`ActorService: ${message}`);
  }
}