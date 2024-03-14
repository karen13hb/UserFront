import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/Iuser';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  public users: User[] = [];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    
  }


  public getUsers():void {
    this.userService.getUsers().subscribe({
      next: (response: User[]) => {
        this.users =response;
        console.log(this.users)
      },
      error: (error) => {
        console.error('Error usuarios', error);
      }
    });
  }

  public deleteUser(id: number):void {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        console.log('usuario eliminado con éxito');
        this.users = this.users.filter((user: User) => user.usuId !== id);
      },
      error: (error) => {
        console.error('Error al eliminar usuario', error);
      }
    });
  }

}
