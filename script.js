class TransaccionBase {
    constructor(producto, fecha) {
      this.producto = producto;
      this.fecha = fecha;
    }
  }
  
  class Venta extends TransaccionBase {
    constructor(cantidad, precio) {
      super(producto, fecha);
      this.cantidad = cantidad;
      this.precio = precio;
    }
  }
  
  let ventas = [];
  
  // pedir las ventas para registrarlas
  function registrarVenta() {
    const producto = prompt('Por favor ingrese el nombre del producto:');
    const fecha = new Date();
    const cantidad = parseInt(prompt('Ingrese la cantidad:'));
    const precio = parseFloat(prompt('Ingrese el precio unitario:'));
  
    const nuevaVenta = new Venta(producto, fecha, cantidad, precio);
    ventas.push(nuevaVenta);
    console.log('Su venta fue registrada exitosamente.');
  }
  
  // eliminar la venta
  function cancelarVenta() {
    if (ventas.length === 0) {
      console.log('No hay ventas registradas.');
    } else {
      mostrarVentas();
      const indice = parseInt(
        prompt('Ingrese el número correspondiente a la venta para cancelarla:')
      );
  
      if (indice >= 0 && indice < ventas.length) {
        ventas.splice(indice, 1);
        console.log('Su venta ha sido cancelada exitosamente.');
      } else {
        console.log(
          `El número de venta no está asociado a ninguna venta existente.`
        );
      }
    }
    return;
  }
  
  function mostrarVentas() {
    if (ventas.length === 0) {
      console.log(`No hay ventas registradas.`);
    } else {
      console.log(`Ventas Registradas:`);
      for (let i = 0; i < ventas.length; i++) {
        const venta = ventas[i];
        console.log( `Venta #: ${i + 1} Producto: ${venta.producto}, Cantidad: ${venta.cantidad}, Precio: ${venta.precio}`);
      }
    }
    return;
  }
  function menu() {
    let opcion = null ;

    do {
      opcion = prompt('Seleccione una opción:\n1. Registrar Venta\n2. Cancelar Venta\n3. Mostrar Ventas\n4. Salir');
  
      switch (opcion) {
        case '1':
let c1;
do{

  registrarVenta();
 c1 = prompt ('Marque 1 si desea agreagar otra venta y 0 en caso contrario');

}while(c1 === 1);
          
          break;
        case '2':
          cancelarVenta();
          break;
        case '3':
          mostrarVentas();
          break;
        case '4':
          console.log('Saliendo del programa.');
          break;
        default:
          console.log('Opción inválida.');
      }
    } while (opcion !== '4');
  }
  menu();
  
  //22 Tarea: Sistema de Registro de Ventas:
  //Crea una clase TransaccionBase con propiedades producto y fecha.
  //Crea una clase Venta que herede de TransaccionBase y añada las propiedades cantidad y precio.
  //Implementa un menú para registrar ventas, cancelar ventas y mostrar todas las ventas realizadas.
  