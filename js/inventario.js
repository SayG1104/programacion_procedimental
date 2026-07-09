
let codigo_producto = document.getElementById("codigo_producto").value;
let nombre_producto = document.getElementById("nombre_producto").value;
let cantidad = document.getElementById("cantidad").value;
let marca_producto = document.getElementById("marca_producto").value;


if (codigo_producto.trim() === "" || nombre_producto.trim() === "" || cantidad.trim() === "" || marca_producto.trim() === "") {
  alert("Todos los campos son obligatorios");
  return;
}

if (!/^\d+$/.test(codigo_producto)) {
  console.log("El código del producto solo debe contener números");
  return;
}

if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre_producto)) {
  console.log("El nombre del producto no debe contener números");
  return;
}

if (!/^\d+$/.test(cantidad)) {
  console.log("La cantidad solo debe contener números");
  return;
}

if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(marca_producto)) {
  console.log("La marca del producto no debe contener números");
  return;
}


/*^\d+$ → solo números.
^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$ → solo letras (incluye tildes, ñ y espacios).*/