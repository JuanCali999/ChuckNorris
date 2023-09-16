import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ChuckNorrisService} from "../../chuck-norris.service";

@Component({
  selector: 'app-chuck-norris-jokes',
  templateUrl: './chuck-norris-jokes.component.html',
  styleUrls: ['./chuck-norris-jokes.component.css']
})
export class ChuckNorrisJokesComponent implements OnInit {
  categories: string[];

  constructor(private chuckNorrisService: ChuckNorrisService) { }
}

import { OnInit } from '@angular/core';

export class ChuckNorrisJokesComponent implements OnInit {
    categories: string[];

    constructor(private chuckNorrisService: ChuckNorrisService) { }

    ngOnInit() {
        this.chuckNorrisService.getCategories().subscribe(
            data => this.categories = data,
            error => console.error(error)
        );
    }
}

