import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
    nameLog: any;
    theForm: FormGroup;
    formVal: any;
    constructor(private fb: FormBuilder) 
    {
        this.theForm = new FormGroup({});
    }

    ngOnInit(): void 
    {
        this.theForm = this.fb.group({
            name: ['', [
                Validators.required
            ]],

            phone: this.fb.array([])
        })

        this.addPhone();
        console.log(this.theForm.controls.name, this.theForm.controls.phone)
    }

    formValue()
    {
        this.formVal = this.theForm.value;
        for (let i = 0; i < this.Phone.length; i++) 
        {
            console.log(this.Phone.at(i).value);    
        }
        console.log(this.theForm.value, this.theForm.controls.name.value, this.theForm.controls);
    }

    get Phone()
    {
        return this.theForm.get('phone') as FormArray;
    }

    get name()
    {
        return this.theForm.get('name');
    }

    addPhone()
    {
        const phone = (this.theForm.get('phone') as FormArray); 
        phone.push(this.fb.group({
            phone: ['']
        }))

        console.log(phone);
    }

    deletePhone(i: any)
    {
        if ( this.Phone.length > 1)
        this.Phone.removeAt(i);
    }
}
