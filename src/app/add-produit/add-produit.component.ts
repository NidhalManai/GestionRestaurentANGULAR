import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})

export class AddProduitComponent {
  newProduit: Produit = new Produit();

  constructor(private produitService: ProduitService) { }
  addProduit() {
    //console.log(this.produit);
    this.produitService.ajouterProduit(this.newProduit);
  }
}

@NgModule({
  declarations: [AddProduitComponent],

  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AddProduitComponent]
})
export class AddProduitModule {}