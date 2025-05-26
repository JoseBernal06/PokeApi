// pokemon.services.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  constructor(private firestore: Firestore) {}

  guardarBusquedas(nombre: string, tipo: string, habilidades: string, stats: string, imagen: string, opinion: string) {
    const coleccion = collection(this.firestore, 'busquedas');
    return addDoc(coleccion, {
      nombre, tipo, habilidades, stats, imagen, opinion
    });
  }
}
