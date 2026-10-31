/* ============================================================
   L & J Cake's - DATOS DEL CATALOGO (único archivo que editarás)
   Cuidado con las comas "," y las comillas "" al editar.
   ============================================================ */

window.CONFIG = {
  negocio: "L & J Cake's",
  whatsapp: "5353767063",   // código de país + número, sin + ni espacios
  diasMinimos: 5            // anticipación mínima del pedido
};

/* Agregados: se definen una vez y cada producto elige cuáles ofrece.
   precio: null  ->  se muestra "consultar" */
window.AGREGADOS = {
  topper:    { texto: "Topper personalizado", precio: 400 },
  impresion: { texto: "Impresión comestible", precio: 600 },
  tematica:  { texto: "Temática especial",    precio: null }
};

/* Productos (los de abajo son EJEMPLOS: cambia nombres, precios y fotos)
   - foto: "img/archivo.jpg"  (vacío = bloque rosado)
   - grupos: opciones que elige el cliente. afectaPrecio: true -> el precio
     sale de la tabla "precios" según la combinación elegida.
   - precio: número fijo, o null para "consultar precio"
   - dedicatoria: true si el producto permite texto de dedicatoria */
window.PRODUCTOS = [
  {
    nombre: "Torta de chocolate",
    descripcion: "Bizcocho húmedo de chocolate con ganache.",
    categoria: "Tortas",
    foto: "",
    moneda: "CUP",
    grupos: [
      { nombre: "Tamaño",  afectaPrecio: true, valores: ["20 cm", "25 cm"] },
      { nombre: "Relleno", afectaPrecio: true, valores: ["Crema", "Dulce de leche"] },
      { nombre: "Sabor",   valores: ["Chocolate", "Vainilla"] }
    ],
    precios: [
      { "Tamaño": "20 cm", "Relleno": "Crema",          precio: 2500 },
      { "Tamaño": "20 cm", "Relleno": "Dulce de leche", precio: 2800 },
      { "Tamaño": "25 cm", "Relleno": "Crema",          precio: 3500 },
      { "Tamaño": "25 cm", "Relleno": "Dulce de leche", precio: 3900 }
    ],
    agregados: ["topper", "impresion"],
    dedicatoria: true
  },
  {
    nombre: "Cupcakes x6",
    descripcion: "Media docena de cupcakes con cobertura a elegir.",
    categoria: "Cupcakes",
    foto: "",
    moneda: "USD",
    precio: 8,
    grupos: [
      { nombre: "Sabor",     valores: ["Vainilla", "Chocolate"] },
      { nombre: "Cobertura", valores: ["Buttercream", "Merengue"] }
    ],
    agregados: [],
    dedicatoria: false
  },
  {
    nombre: "Torta personalizada",
    descripcion: "Diseño a tu gusto. Cuéntanos tu idea y la cotizamos.",
    categoria: "Tortas",
    foto: "",
    moneda: "CUP",
    precio: null,
    grupos: [],
    agregados: ["tematica", "topper"],
    dedicatoria: true
  }
];
