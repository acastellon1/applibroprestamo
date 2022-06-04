import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrestarI } from 'src/app/models/prestar'; 
import { PrestarService } from 'src/app/services/prestar.service';

@Component({
  selector: 'app-list-prestar',
  templateUrl: './list-prestar.component.html',
  styleUrls: ['./list-prestar.component.css']
})
export class ListPrestarComponent implements OnInit {
  public prestamos: PrestarI[] = []
  public displayedColumns: string[] = ["fechaDev", "fechaPres", "UsuarioId", "EjemplarId", "Acciones"]
  constructor(
    private prestarService: PrestarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarPrestamos()
  }
  mostrarPrestamos() {
    this.prestarService.getAllPrestar()
    .subscribe({
      next:(data) => {
        this.prestamos = data.prestar
        console.log(this.prestamos)
      }
    })
  }

}
