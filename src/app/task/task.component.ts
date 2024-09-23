import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../model/Task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],

  styleUrl: './task.component.css',
  template: `
    <div class="task">
     <p>Name: {{task?.name}}</p>
     <p>Description: {{task?.description}}</p>
     <p>Status: {{task?.done}}</p>
     {{id}}
    </div>
  `
})
export class TaskComponent {
  @Input() id?: string;
  taskservice = new TaskService();
  task?: Task;
  
  ngOnInit() {
    if(this.id) {
      this.taskservice.getTask(this.id).then((res)=>{
        this.task = res;
      });
    }

  }
}
