import {OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormGroup} from '@angular/forms';
import {BaseRest} from '../../interface/http/base-rest.interface';
import {filter, take} from 'rxjs/operators';

export abstract class FormAbstract<T> implements OnInit {

  loading: Boolean = false;
  dataId: number;
  isUpdate: boolean;
  form: FormGroup;

  constructor(protected service: BaseRest<any>,
              protected routeParams: ActivatedRoute) {

  }


  ngOnInit() {
    this.form = this.formInit();
    this.onReceiveData();
  }

  abstract formInit(): FormGroup;

  onReceiveData(): void {
    this.loading = true;
    this.routeParams.params.pipe(filter(params => !!params['id']), take(1)).subscribe(params => {
      this.loading = false;
      this.dataId = +params['id'];
      this.isUpdate = true;
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.loading = true;
      let formValue = Object.assign({}, this.form.value);
      formValue = this.transformBeforeSave(formValue);
      if (this.isUpdate) {
        this.service.update(formValue)
          .subscribe(data => {
            this.loading = false;
            this.onSuccess(data);
          }, err => {
            this.loading = false;
            this.onError(err);
          });
      } else {
        this.service.save(formValue)
          .subscribe(data => {
            this.loading = false;
            this.onSuccess(data);
          }, err => {
            this.loading = false;
            this.onError(err);
          });
      }

    } else {
      this.validateAllFormFields(this.form);
    }
  }

  onError(err: any): void {
    this.loading = false;
    if ((err && err['error'] && err['error']['codigo'] === 450)
      || (err['error'] && err['error']['codigo'] === 451)
      || (err['error'] && err['error']['codigo'] === 412)) {
      this.showInfoMessage(err['error']['conteudo']);
    } else {
      this.showErrorMessage();
    }
  }

  transformBeforeSave(data: T): T {
    return data;
  }

  transformReceiveData(data: T): T {
    return data;
  }

  validateAllFormFields(formGroup: FormGroup | FormArray): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsDirty();
      control.markAsTouched();
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.validateAllFormFields(control);
      }
    });
  }

  onSuccess(data?: any): void {
    // TODO implementar
  }

  showInfoMessage(errElementElement: any): void {
    // TODO implementar
  }

  showErrorMessage(): void {
    // TODO implementar
  }
}
