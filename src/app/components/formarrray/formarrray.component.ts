import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarrray',
  templateUrl: './formarrray.component.html',
  styleUrls: ['./formarrray.component.scss']
})
export class FormarrrayComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userFormInitialize();
  }


  userFormInitialize() {
    this.userForm = this.fb.group({
      personalDetails: new FormGroup({
        username: new FormControl(''),
        email: new FormControl(''),
        contact: new FormControl(''),
      }),
      password: new FormControl(''),
      confirm_password: new FormControl(''),
      questions: this.fb.array([
        this.fb.group({
          question: new FormControl('', [Validators.required]),
          options: this.fb.array([
            this.fb.group({
              option: new FormControl('', [Validators.required]),
            })
          ]),
        })
      ])
    })
  }

  getQuestions(): FormArray {
    return this.userForm.get('questions') as FormArray;
  }

  newQuestion() {
    return this.fb.group({
      question: new FormControl('', [Validators.required]),
      options: this.fb.array([]),
    })
  }

  addNewQuestion() {
    this.getQuestions().push(this.newQuestion());
  }


  deleteQuestion(i: number) { }

  getOptions(questionIndex: number): FormArray {
    return this.getQuestions().at(questionIndex)?.get('options') as FormArray;
  }

  newOption() {
    return this.fb.group({
      option: new FormControl('', [Validators.required]),
    })
  }

  addNewOption(questionIndex:number) {
    this.getOptions(questionIndex).push(this.newOption());
  }

  submit() {
    console.log(this.userForm.value)
  }
}
