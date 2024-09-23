import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../model/Task';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, RouterLink],
  styleUrl: './task-list.component.css',
  template: `
    <div class="task-list">
      <ul class="task-list__list">
        <li
          id="task-{{ task.id }}"
          *ngFor="let task of tasks"
          class="task-list__item"
          [ngClass]="{ 'task-done': task.done }"
        >
          <div class="task-list__name" (click)="changeStatus(task)">
            <a
              [routerLink]="['/task', task.id]"
              routerLinkActive="router-link-active"
            >
              {{ task.name }}
            </a>
          </div>

          <div class="task-list__button">
            <button
              (click)="deleteTask.emit(task.id)"
              class="task-list__deleteBtn"
            >
              Delete
            </button>
            <button
              *ngIf="!isEdit"
              (click)="isEditTask(task.id)"
              class="task-list__editBtn "
            >
              Edit
            </button>

            <div *ngIf="editTaskId === task.id && isEdit">
              <input
                #editInput
                value="{{ task.name }}"
                type="text"
                class="task-list__editInput"
              />

              <button
                class="task-list__editBtn "
                (click)="saveEditTask(editInput.value, task.id)"
              >
                Save
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() deleteTask = new EventEmitter<number>();
  @Output() updateTask = new EventEmitter<{ name: string; id: number }>();
  editTaskId?: number;
  isEdit: boolean = false;

  changeStatus(task: Task) {
    console.log(task);

    task.done = !task.done;
  }

  isEditTask(id: number) {
    this.isEdit = !this.isEdit;
    this.editTaskId = id;
  }

  saveEditTask(name: string, id: number) {
    this.updateTask.emit({ name: name, id: id });
    this.isEdit = !this.isEdit;
  }
}
