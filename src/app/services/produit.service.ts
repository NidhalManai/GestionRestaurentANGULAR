import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})

export class ProduitService {
Produits : Produit[]; //un tableau de Produit 
constructor() {
this.Produits = [
  { idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
  { idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
  { idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
  ];
}
listeProduits(): Produit[] {
  return this.Produits;
}

ajouterProduit( Prod: Produit): void {
  this.Produits.push(Prod);
}

}