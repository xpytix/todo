import { NgFor } from '@angular/common';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { Task } from './model/Task';
import { TaskService } from '../services/task.service';
import { NavbarComponent } from "./navbar/navbar.component";

@Pipe({
  name: 'customUppercase',
  standalone: true,
})
export class CustomUppercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    CustomUppercasePipe,
    NavbarComponent
],
  styleUrl: './app.component.css',
  template: `
    <app-navbar/>

    <main>
      <router-outlet />
    </main>
  `,
})
export class AppComponent {}
