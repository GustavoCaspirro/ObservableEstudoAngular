import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.scss']
})
export class ListJobsComponent implements OnInit {
  JobsApi;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this.apiService.getJobs()
                   .subscribe(
                     jobs => this.JobsApi = jobs,
                     error => console.log(`Erro: ${error.message}`)
                   );
  }

}
