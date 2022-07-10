import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(private heoresService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.heoresService.getHeores();
  }

  verHeroe(id: number): void {
    this.router.navigate(['/heroe', id]);
  }

}
