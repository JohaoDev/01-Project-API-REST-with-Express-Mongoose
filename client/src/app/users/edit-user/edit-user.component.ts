import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CrudService } from '../../services/crud.service';

export interface UserData {
  data: {
    name: string;
    lastname: string;
    age: number;
    email: string;
    password: string;
  };
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;
  userData: any;

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._getUserData();
    this._editUserForm();
  }

  private _getUserData() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
  }

  _editUserForm = () => {
    this.editUserForm = this.formBuilder.group({
      name: [this.userData.name, [Validators.required]],
      lastname: [this.userData.lastname, [Validators.required]],
      age: [this.userData.age, [Validators.required]],
      email: [this.userData.email, [Validators.required]],
      password: [this.userData.password, [Validators.required]],
    });
  };

  _update(): void {
    let updateData = {
      data: {
        name: this.editUserForm.get('name').value,
        lastname: this.editUserForm.get('lastname').value,
        age: this.editUserForm.get('age').value,
        email: this.editUserForm.get('email').value,
        password: this.editUserForm.get('password').value,
      },
    };

    let updatedUser = this.crudService.patchData(
      updateData,
      'user',
      this.userData._id
    );

    if (updatedUser !== []) {
      this.router.navigate(['/users']);
      localStorage.clear();
    }
  }
}
