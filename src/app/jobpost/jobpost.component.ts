import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from './../shared/job.service';
import { FormBuilder, FormGroup } from "@angular/forms";

// User interface


@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.scss']
})
export class JobpostComponent implements OnInit {
	jobpostForm: FormGroup;
    errors = null;
	success = null;
	countries: {};
	categories: {};

  constructor(public router: Router,
    public fb: FormBuilder,
    public jobService: JobService
  ) { 
	this.jobpostForm = this.fb.group({
		title: [''],
		location: [''],
		job_type: [''],
		category: [''],
		description: [''],
		compensation_from: [''],
		compensation_to: [''],
		currency: [''],
		frequency: [''],
		compensation_show: [''],
		additional_info: [''],
		company_name: [''],
		company_url: [''],
		contact_email: [''],
		upload_file: ['']
	  });
	  
  }

  ngOnInit(): void {
	//   this.jobService.getCountry().subscribe((data:any) => {
	// 	this.countries = data;
	//   });
	  this.jobService.getCategory().subscribe((data:any) => {
		this.categories = data;
	  });
  }
	
    check:boolean=false;
	myfunction(){
		if(this.check==false){
		this.check=true;	
		}	
		else{
		this.check=false;	
		}
	}

	onSelectedFile(event: any) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			this.jobpostForm.get('upload_file').setValue(file);
		}
	}
	
	onSubmit() {
		const formData = new FormData();
		formData.append('title', this.jobpostForm.get('title').value);
		formData.append('location', this.jobpostForm.get('location').value);
		formData.append('job_type', this.jobpostForm.get('job_type').value);
		formData.append('category', this.jobpostForm.get('category').value);
		formData.append('description', this.jobpostForm.get('description').value);
		formData.append('compensation_from', this.jobpostForm.get('compensation_from').value);
		formData.append('compensation_to', this.jobpostForm.get('compensation_to').value);
		formData.append('currency', this.jobpostForm.get('currency').value);
		formData.append('frequency', this.jobpostForm.get('frequency').value);
		formData.append('compensation_show', this.jobpostForm.get('compensation_show').value);
		formData.append('additional_info', this.jobpostForm.get('additional_info').value);
		formData.append('company_name', this.jobpostForm.get('company_name').value);
		formData.append('company_url', this.jobpostForm.get('company_url').value);
		formData.append('contact_email', this.jobpostForm.get('contact_email').value);
		formData.append('upload_file', this.jobpostForm.get('upload_file').value);

		this.jobService.jobpost(formData).subscribe(
			result => {
			console.log(result)
			this.success = result;
			},
			error => {
			this.errors = error.error;
			},
			() => {
			this.jobpostForm.reset()
			//this.router.navigate(['jobseeker-login']);
			}
		)
	}

}
