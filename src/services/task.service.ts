import { Injectable } from '@angular/core';
import { Task } from '../app/model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly URL = "http://localhost:3001"
  getTasks(){
    return fetch(`${this.URL}/tasks`).then<Task[]>((res)=>{
      return res.json()
    }).then((res)=>{
      return res;
    })
  }

  addTask(name: string){
    return fetch(`${this.URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: name})
    }).then((res)=>{
      return res.json();
    }).then((res)=>{
      return res;
    })
  }

  deleteTask(id: number){
    return fetch(`${this.URL}/tasks/${id}`, {
      method: "DELETE"
    }).then((res)=>{
      return res.json();
    }).then((res)=>{
      return res;
    })
  }

  updateTask(id: number, name: string){
    return fetch(`${this.URL}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: name})
    }).then((res)=>{
      return res.json();
    }).then((res)=>{
      return res;
    })
  }

  getTask(id: string){
    return fetch(`${this.URL}/tasks/${id}`).then((res)=>{
      return res.json();
    }).then((res)=>{
      return res;
    })
  }
}
