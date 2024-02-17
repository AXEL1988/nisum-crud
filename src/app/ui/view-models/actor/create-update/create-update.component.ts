import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActorUseCaseService } from '../../../../domain/actor/application/actor-use-case.service';
import { IDomainActor } from '../../../../domain/actor/domain/actor.model';
import { SnackBarService } from '../../../../domain/actor/infractructure/snack-Bar.service';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent implements OnInit {

  actorForm: FormGroup;

  constructor(private _fb: FormBuilder,
              private _dialogRef: MatDialogRef<CreateUpdateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private _actorService: ActorUseCaseService,
              private _snackBarService: SnackBarService,
            ) {

    this.actorForm = this._fb.group({
      primaryName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      primaryProfession: [''],
      birthYear: ['', [Validators.required, Validators.pattern(/^([0-9])*$/), Validators.minLength(4), Validators.maxLength(4)]]
    });

  }
  ngOnInit(): void {
    this.actorForm.patchValue(this.data);
  }

  onFormSubmit(): void {
    if (this.actorForm.valid) {

      if (this.data) {
        let actor: IDomainActor = {...this.actorForm.value, _id: this.data._id};
        this._actorService.update(this.data._id, actor);
        this._snackBarService.openSnackBar('Actor actualizado correctamente!');
        this._dialogRef.close(true);
      }

      if (!this.data) {
        let guidActor = this.generateGuid();
        let actor: IDomainActor = {...this.actorForm.value, _id: guidActor};
        this._actorService.add(actor);
        this._snackBarService.openSnackBar('Actor creado correctamente!');
        this._dialogRef.close(true);
      }
    }
  }

  generateGuid = () => {
    return Math.random().toString(30).substring(2);
  }
}
