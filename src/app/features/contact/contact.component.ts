import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ContactForm: FormGroup;
  submitted = false;

  constructor(  private formBuilder: FormBuilder) { }

  ngOnInit(): void
   {

    this.ContactForm = this.formBuilder.group(
      
      {
    
        ConName: ['', Validators.required],
        email: ['', [Validators.compose([Validators.required, Validators.email])]],
        msg: ['', Validators.required, Validators.maxLength(40)],
      
  
      },
    )
  }


  get f() 
  { return this.ContactForm.controls; }
  

  onSubmit() {
    this.submitted = true;
  
    console.log( this.ContactForm.value);
  
    if (this.ContactForm.invalid) 
    {
        return;
    }

    alert('Meassage sent :-)\n\n'  );

  this.ContactForm.reset();

  }


  submit()
  {
    alert('Meassage sent :-)\n\n'  );
  }


}
