import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(private services: ProduitService) { }

  produitsData: any;
  ngOnInit(): void {
    this.produitsData = this.services.produits;
  }

}
