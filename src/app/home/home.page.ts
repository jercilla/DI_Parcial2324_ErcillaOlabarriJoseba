import { Component } from '@angular/core';
import { IntroduccionComponent } from '../components/introduccion/introduccion.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Declaramos las variables necesarias
  titulo: string = 'Bienvenido a TriviaApp';
  descripcion: string =
    'Explora preguntas divertidas y desafiantes. ¡Pon a prueba tu conocimiento!';
  imagenUrl: string = '/assets/icon/trivia.jpg';

  constructor() {}

  //inicializamos el segmento con su valor inicial

  //Gestionamos el cambio de segmentos
}
