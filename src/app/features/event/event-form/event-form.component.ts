import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  
  registerForm: FormGroup;
    submitted = false;

  constructor( private formBuilder: FormBuilder) { }

  // number = "^(\+\d{1,3}[- ]?)?\d{10}$";

  ngOnInit()
   {
    this.registerForm = this.formBuilder.group(
      {
    
      eventName: ['', Validators.required ],
      description: ['', Validators.required],
      file: ['', Validators.required],
      
      },
  )
}

urls = [];
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.urls.push(event.target.result); 
                }

                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }




onSubmit() {
  this.submitted = true;

  console.log( this.registerForm.value);

  if (this.registerForm.invalid) {
      return;
  }
  alert('SUCCESS!! :-)\n\n' 
  // + JSON.stringify(this.registerForm.value, null, 4)
  );

  this.registerForm.reset();
}


get f() 
{ return this.registerForm.controls; 
}


 onReset() 
{
  this.submitted = false;
  this.registerForm.reset();
}



}
