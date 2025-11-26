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
      title: '¿Qué es Nexus?',
      content:
        'Nexus es un espacio digital que integra una librería universitaria y una cafetería en un solo lugar. Aquí puedes explorar libros, descubrir productos de cafetería y realizar tus compras de forma rápida y segura desde la misma plataforma.',
    },
    {
      title: '¿Cómo funciona la plataforma?',
      content:
        'Puedes navegar por las secciones de Librería y Cafetería, ver los productos disponibles, revisar detalles al hacer clic en cada tarjeta y añadirlos a tu carrito. Todo el proceso está pensado para que encuentres lo que necesitas en pocos pasos.',
    },
    {
      title: '¿Cómo puedo ver más información de un libro o producto?',
      content:
        'Al hacer clic sobre cualquier libro o producto de cafetería, se abrirá una ventana con su detalle completo: descripción, precio, categoría e imagen. Desde ahí también puedes añadirlo directamente al carrito.',
    },
    {
      title: '¿Cómo añado productos a mi carrito?',
      content:
        'En cada tarjeta encontrarás el botón “Añadir al carrito”. También puedes hacerlo desde la vista de detalle. Al agregar productos, el carrito lateral derecho se actualiza automáticamente.',
    },
    {
      title: '¿Dónde puedo ver mi carrito de compras?',
      content:
        'Tu carrito está siempre disponible en el sidebar derecho. Desde allí puedes revisar lo que elegiste, aumentar o reducir cantidades, eliminar productos y continuar con tu compra.',
    },
    {
      title: '¿Puedo comprar libros y productos de cafetería en un solo pedido?',
      content:
        'Sí. Nexus te permite combinar en un mismo carrito libros y productos de cafetería. Así puedes gestionar todo en una sola compra, sin procesos separados.',
    },
    {
      title: '¿Qué tipos de libros puedo encontrar?',
      content:
        'Disponemos de libros académicos, literatura general, novedades, recomendaciones y colecciones universitarias. Puedes explorar por categorías y descubrir promociones destacadas en la página principal.',
    },
    {
      title: '¿Qué ofrece la sección de cafetería?',
      content:
        'La cafetería incluye bebidas calientes y frías, postres, desayunos y opciones saladas. Además, verás secciones como más vendidos, novedades, descuentos y el menú completo para explorar sin límites.',
    },
    {
      title: '¿Cómo sé si un producto tiene descuento o es novedad?',
      content:
        'Los productos con descuento o promociones aparecen identificados visualmente y también se agrupan en secciones específicas como “Descuentos” o “Novedades”, para que los encuentres más rápido.',
    },
    {
      title: '¿Los precios incluyen impuestos?',
      content:
        'Los precios mostrados corresponden al valor final del producto. En el resumen del carrito podrás ver el detalle completo de tu compra antes de confirmarla.',
    },
    {
      title: '¿Qué métodos de pago están disponibles?',
      content:
        'Puedes pagar con tarjetas de crédito o débito, transferencias bancarias y otras opciones habilitadas en la plataforma. Durante el proceso de compra verás todas las alternativas disponibles.',
    },
    {
      title: '¿Recibo confirmación de mi pedido?',
      content:
        'Sí. Una vez finalices la compra, recibirás una confirmación con el detalle de los productos seleccionados y el estado del pedido.',
    },
    {
      title: '¿Cómo puedo contactar con Nexus?',
      content:
        'En la sección de Contacto encontrarás un formulario para enviarnos tus dudas, sugerencias o reportar inconvenientes. Trata de incluir el mayor detalle posible para ayudarte más rápido.',
    },
    {
      title: '¿Dónde puedo ver promociones y recomendaciones?',
      content:
        'En la página de inicio (Home) encontrarás un hero principal con información destacada y secciones de novedades, promociones y productos recomendados tanto de librería como de cafetería.',
    },
    {
      title: '¿Qué pasa con la sección de coworking?',
      content:
        'La sección de coworking está actualmente en construcción. Muy pronto podrás reservar espacios desde Nexus, pero por ahora la plataforma está enfocada en Librería y Cafetería.',
    },
  ];
}
