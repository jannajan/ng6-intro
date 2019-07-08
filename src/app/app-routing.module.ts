import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UsersComponent } from './users/users.component'
import { DetailsComponent } from './details/details.component'
import { PostsComponent } from './posts/posts.component'

const routes: Routes = [
  // Specifies the default component that loads on the root path
  {
    path: '',
    component: UsersComponent
  },
  // Users detail route, which uses an "id" wildcard.
  // :id will be fetched from the router
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  // Posts route
  {
    path: 'posts',
    component: PostsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
