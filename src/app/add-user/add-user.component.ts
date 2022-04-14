import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/shared/services/user-service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  @ViewChild('input') public el: ElementRef;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  addUser() {
    const username = this.el.nativeElement.value;
    if (username.trim() !== '') {
      this.userService.addUser(username);
      this.el.nativeElement.value = '';
    }
  }
}
