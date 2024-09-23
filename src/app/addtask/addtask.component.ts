import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  template: `
    <div class="task-add">
      <input #inputAdd class="task-add__input" type="text" placeholder="Add task" />
      <button  (click)="addTask.emit(inputAdd.value)" class="task-add__btn">Add</button>
    </div>
  `,
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  @Output() addTask = new EventEmitter<string>();
}
