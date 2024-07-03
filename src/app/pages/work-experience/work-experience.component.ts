import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CustomDateInputComponent } from './custom-date-input.component';

@Component({
  selector: 'app-work-experience',
  standalone: true, 
  imports: [MatInputModule, MatButtonModule, MatCardModule, ReactiveFormsModule, CommonModule, NgFor, NgIf, MatSelectModule, MatDatepickerModule, MatNativeDateModule, CustomDateInputComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent implements OnInit {
  experienceForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.experienceForm = this.fb.group({
      jobs: this.fb.array([])
    });
  }

  get jobs(): FormArray {
    return this.experienceForm.get('jobs') as FormArray;
  }

  getPositions(job: AbstractControl): FormArray {
    return job.get('positions') as FormArray;
  }

  addJob() {
    const jobGroup = this.fb.group({
      companyName: ['', [Validators.required, Validators.maxLength(100)]],
      companyWebsite: ['', [Validators.required, Validators.pattern('(https?://)?(www\\.)?[a-z0-9]+(\\.[a-z]+)+(/[-a-zA-Z0-9@:%_+.~#?&//=]*)?')]],
      companyDescription: ['', Validators.required],
      positions: this.fb.array([])
    });

    this.jobs.push(jobGroup);
  }

  removeJob(index: number) {
    this.jobs.removeAt(index);
  }

  addPosition(jobIndex: number) {
    const positions = this.jobs.at(jobIndex).get('positions') as FormArray;
    const positionGroup = this.fb.group({
      positionName: ['', Validators.required],
      positionLevel: ['', Validators.required],
      positionDescription: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    }, { validators: this.dateRangeValidator });

    positions.push(positionGroup);
  }

  removePosition(jobIndex: number, positionIndex: number) {
    const positions = this.jobs.at(jobIndex).get('positions') as FormArray;
    positions.removeAt(positionIndex);
  }

  dateRangeValidator(group: AbstractControl): ValidationErrors | null {
    const startDate = group.get('startDate')?.value;
    const endDate = group.get('endDate')?.value;
    return startDate && endDate && startDate <= endDate ? null : { dateRangeInvalid: true };
  }
}