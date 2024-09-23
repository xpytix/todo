import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../model/Task';
import { AddtaskComponent } from "../addtask/addtask.component";
import { TaskListComponent } from "../task-list/task-list.component";
import { CustomUppercasePipe } from "../app.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [AddtaskComponent, TaskListComponent, CustomUppercasePipe],
  template: `
   <div class="todo">
      <h1>Title: {{ title | customUppercase }}</h1>
      <h1>To do List</h1>

      <app-add-task (addTask)="addTask($event)" />
      <app-task-list
        (updateTask)="updateTask($event)"
        (deleteTask)="deleteTask($event)"
        [tasks]="tasks"
      />
    </div>
  `,
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  title = 'Tasks';

  taskservice = new TaskService();
  tasks: Task[] = [];

  ngOnInit() {
    this.taskservice.getTasks().then((res) => {
      this.tasks = res;
    });
  }

  addTask(name: string) {
    this.taskservice.addTask(name).then((res) => {
      this.tasks.push(res);
    });
  }

  deleteTask(id: number) {
    this.taskservice.deleteTask(id).then((res) => {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    });
  }

  updateTask(event: { name: string; id: number }) {
    this.taskservice.updateTask(event.id, event.name).then((res) => {
      this.tasks = this.tasks.map((task) => {
        if (task.id === event.id) {
          task.name = event.name;
        }
        return task;
      });
    });
  }
}
