import { Component } from '@angular/core';
import { Accordion } from '../../shared/components/accordion/accordion';
import { AccordionItem } from '../../shared/interfaces/accordion-interface';

@Component({
  selector: 'nexus-faqs',
  imports: [Accordion],
  templateUrl: './faqs.html',
  styles: ``,
})
export class Faqs {
  readonly faqs: AccordionItem[] = [
    {
      title: '¿Quiénes somos?',
      content:
        'Somos Nexus, una librería en línea dedicada a ofrecer una amplia selección de libros para todos los gustos. Nuestro objetivo es facilitar el acceso a la literatura y promover la lectura.',
    },
    {
      title: '¿Cómo puedo realizar un pedido?',
      content:
        'Para realizar un pedido, simplemente navega por nuestro catálogo, selecciona los libros que deseas comprar y añádelos a tu carrito. Luego, sigue el proceso de pago proporcionando la información necesaria.',
    },

    {
      title: '¿Cuáles son las opciones de pago disponibles?',
      content:
        'Aceptamos diversas formas de pago, incluyendo tarjetas de crédito y débito, PayPal y transferencias bancarias. Durante el proceso de pago, podrás seleccionar la opción que más te convenga.',
    },
    {
      title: '¿Los precios incluyen impuestos?',
      content:
        'Los precios mostrados pueden incluir o excluir impuestos según la configuración regional. En la página de resumen del pedido verás el desglose final con impuestos y tasas aplicables.',
    },
    {
      title: '¿Cómo puedo contactar con soporte o servicio al cliente?',
      content:
        'Puedes escribirnos mediante el formulario de contacto en la web, por correo a soporte@nexusbookstore.example. Intenta incluir el número de pedido para acelerar la gestión.',
    },
  ];
}
