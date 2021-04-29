import { Injectable } from '@angular/core';
import { Frame } from '../interface/frames-interface';
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FramesService {

  newId : number;

  private objectUrl='http://localhost:4200/api/frames'; //URL to web api

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

  createFrame(): Observable<Frame>{
    const id = undefined;
    const frame_detail= "";
    const frame_moredetail= "";
    const frame_timeAt1_start= '';
    const frame_timeAt1_end= '';
    const frame_timeAt2_start= '';
    const frame_timeAt2_end= '';
    const frame_timeAt3_start= '';
    const frame_timeAt3_end= '';
    const frame_timeAt4_start= '';
    const frame_timeAt4_end= '';
    const frame_timeAt5_start= '';
    const frame_timeAt5_end= '';
    const frame_timeStrat_start= '';
    const frame_timeStrat_end= '';
    const frame_timeOp_start= '';
    const frame_timeOp_end= '';
    const frame_timedetail= "";
    const frame_confidentiality= "";
    const frame_responsable= "";
    
    return this.addFrame({
      id,
      frame_detail,
      frame_moredetail,
      frame_timeAt1_start,
      frame_timeAt1_end,
      frame_timeAt2_start, 
      frame_timeAt2_end,
      frame_timeAt3_start, 
      frame_timeAt3_end,
      frame_timeAt4_start, 
      frame_timeAt4_end,
      frame_timeAt5_start, 
      frame_timeAt5_end,
      frame_timeStrat_start,
      frame_timeStrat_end,
      frame_timeOp_start,
      frame_timeOp_end,
      frame_timedetail,
      frame_confidentiality,
      frame_responsable,
    } as Frame);    
  }

  getFrames(): Observable<Frame[]> {
    return this.http.get<Frame[]>(this.objectUrl)
    .pipe(
      tap(_ => this.log('fetched frames')),
      catchError(this.handleError<Frame[]>('getFrames', []))
    );
  }

  /*
  Will 404 if not found
  Create an URL
  Server will answer with a single frame description
  */ 
  getFrame(frameId: number): Observable<Frame> {
  const url = `${this.objectUrl}/${frameId}`;
  return this.http.get<Frame>(url).pipe(
    tap(_ => this.log(`fetched Frame id=${frameId}`)),
    catchError(this.handleError<Frame>(`getFrame id=${frameId}`))
  );
  }

  ///////////////////// Save methods /////////////////////
  //POST
  /** POST: add a new hero to the server */
  addFrame(frame : Frame): Observable<Frame> {
    return this.http.post<Frame>(this.objectUrl, frame, this.httpOptions).pipe(
      tap((newFrame: Frame) => {
        this.log(`added frame w/ id=${newFrame.id}`);
        console.log(newFrame.id);}),
      catchError(this.handleError<Frame>('addFrame'))
      );
  }

  //DELETE
  /** DELETE: delete the hero from the server */
  deleteFrame(id: number): Observable<Frame> {
    const url = `${this.objectUrl}/${id}`;

    return this.http.delete<Frame>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted frame id=${id}`)),
      catchError(this.handleError<Frame>('deleteFrame'))
  );
}

  //UPDATE
  /** PUT: update the hero on the server */
  updateFrame(frame: Frame): Observable<any> {
    return this.http.put(this.objectUrl, frame, this.httpOptions).pipe(
      tap(_ => this.log(`updated frame id=${frame.id}`)),
      catchError(this.handleError<any>('updateFrame'))
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

  /* Log a FrameService message with the messagService */
  private log(message: string) {
    this.messageService.add(`FrameService: ${message}`);
  }
}
