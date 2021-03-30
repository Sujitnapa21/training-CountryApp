import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountryService } from '../../country.service';
import { SearchCountry } from '../model/searchCountryModel';
import { ShowCountry } from '../model/showCountryModel';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  showCountry: ShowCountry = new ShowCountry();
  searchCountry: Array<SearchCountry> = new Array<SearchCountry>();

  showCountryForm = new FormGroup({
    name: new FormControl(''),
    continent: new FormControl(''),
    region: new FormControl(''),
    governmentForm: new FormControl(''),
  });

  constructor(private countryService: CountryService ) { }

  ngOnInit(): void {
  }

Search() {
  this.showCountry = this.showCountryForm.value;
  console.log(this.showCountry);

  this.countryService.searchCountry(this.showCountry).subscribe(res => {
    this.searchCountry = res.data;
    console.log(this.searchCountry);
    
  })
  
}

}
