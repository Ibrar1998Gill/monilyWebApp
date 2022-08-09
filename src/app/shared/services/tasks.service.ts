import { Injectable } from '@angular/core';
import * as data from '../../shared/data/tasks/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  public Tasks: any[] = data.tasks;

  constructor() { }

  addTasks(task) {
    this.Tasks.push(task);
  }
  
}
