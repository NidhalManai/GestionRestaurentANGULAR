import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';



@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls : ['./produits.component.css']
})

export class ProduitsComponent implements OnInit {
  Produits : Produit[]; //un tableau de Produit

  constructor(private produitService: ProduitService ) {
    this.Produits = produitService.listeProduits();
  }
  ngOnInit(): void {
  }
}