import { Component, OnInit } from '@angular/core';
import { GifsPageComponent } from '../../gifs/gifs-page/gifs-page.component';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private GifsService: GifsService) {}
  historia: any = [];
  get historial() {
    return this.GifsService.historial;
  }
  buscar(termino: string) {
    this.GifsService.buscarGifs(termino);
  }

  ngOnInit(): void {}
}
