import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
    {
        path: '',
        component: TasksComponent
        
    },
    {    
        path: 'task',
        children: [
            {
                path: '',
                component: TasksComponent
            },
            {
                path: ':id',
                component: TaskComponent
            }
        ]
    }
];
