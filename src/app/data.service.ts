import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /*
    Create an instance of the HttpClient via dependency injection
    within the constructor. It also needs to be added as an import
    in the app.module.ts file.
  */
  constructor(private http: HttpClient) { }

  /*
    Use a public testing API.
  */
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
