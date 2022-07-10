import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
  heroes: Heroe[] = [];
  busqueda: string = "";
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.busqueda = params['name']
      this.heroes = this.heroesService.buscarHeroes(this.busqueda);
      console.log(this.heroesService.buscarHeroes(this.busqueda));

    });
  }

}
