import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlJobs = 'https://jobs.github.com/positions.json?description=python&full_time=true&location=sf';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<{}> {
    return this.http.get(this.urlJobs);
                    // .map(
                    //   resp => resp.json()
                    // )
                    // .catch(
                    //   err => console.log(`Erro: ${err}`)
                    // );
  }
}
