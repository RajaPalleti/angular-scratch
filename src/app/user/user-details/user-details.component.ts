import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public selectedId: any;
  public selectedUserData: any;
  public totalUsers: any;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private route: Router) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
      console.log('this.selectedId', this.selectedId);
    })
    this.userList();
    this.userDetails();
  }
  userList() {
    this.userService.getUserList().subscribe(res => {
      if (res) {
        this.totalUsers = res.length;
        console.log('totalUsers', this.totalUsers);
      }
    })
  }
  userDetails() {
    this.userService.getUserDetails(this.selectedId).subscribe(res => {
      if (res) {
        console.log('user result', res);
        this.selectedUserData = res;
      }
    })
  }
  next() {
    if (this.selectedId < this.totalUsers) {
      this.selectedId += 1;
      this.route.navigate(['user', this.selectedId], { relativeTo: this.activatedRoute.parent });
      this.userDetails();
    } else {
      this.selectedId = 1;
      this.route.navigate(['user', this.selectedId], { relativeTo: this.activatedRoute.parent });
      this.userDetails();
    }
  }
  prev() {
    if (this.selectedId <= 1) {
      // debugger;
      this.selectedId = this.totalUsers;
      this.route.navigate(['user', this.selectedId], { relativeTo: this.activatedRoute.parent });
      this.userDetails();
    } else {
      this.selectedId -= 1;
      this.route.navigate(['user', this.selectedId], { relativeTo: this.activatedRoute.parent });
      this.userDetails();
    }
  }
}
