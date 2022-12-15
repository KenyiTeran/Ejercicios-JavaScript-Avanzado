const txtCodigo = document.getElementById("txtCodigo");
const txtNombre = document.getElementById("txtNombre");
const txtApellido = document.getElementById("txtApellido");
const txtCorreo = document.getElementById("txtCorreo");
const txtCargo = document.getElementById("txtCargo");

const salida = document.getElementById("salida");
const btnEnviar = document.getElementById("btnEnviar");

class Empleado {
  codigo;
  nombre;
  apellido;
  correo;
  cargo;
  sueldoBruto() {
    let sueldoBruto = 0;
    switch (this.cargo) {
      case "Jefe":
        sueldoBruto = 5000;
        break;
      case "Analista":
        sueldoBruto = 4000;
        break;
      case "Programador":
        sueldoBruto = 3000;
        break;
      case "Soporte":
        sueldoBruto = 2000;
        break;
      case "Asistente":
        sueldoBruto = 1500;
        break;
    }
    return sueldoBruto;
  }
  descuento() {
    return this.sueldoBruto() * 0.125;
  }
  sueldoNeto() {
    return this.sueldoBruto() - this.descuento();
  }
}

btnEnviar.addEventListener("click", () => {
  let Value_Codigo = txtCodigo.value;
  let Value_Nombre = txtNombre.value;
  let Value_Apellido = txtApellido.value;
  let Value_Correo = txtCorreo.value;
  let Value_Cargo = txtCargo.value;

  let empleado = new Empleado();
  empleado.codigo = Value_Codigo;
  empleado.nombre = Value_Nombre;
  empleado.apellido = Value_Apellido;
  empleado.correo = Value_Correo;
  empleado.cargo = Value_Cargo;

  salida.classList.remove("d-none");
  salida.innerHTML = `
  <h5 class = "text-center">${empleado.nombre} ${empleado.apellido}</h5>
  <table class = "table">
    <tbody>
      <tr>
        <th scope = "row">Código</th>
        <td>${empleado.codigo}</td>
      </tr>
      <tr>
        <th scope = "row">Nombre</th>
        <td>${empleado.nombre}</td>
      </tr>
      <tr>
        <th scope = "row">Apellido</th>
        <td>${empleado.apellido}</td>
      </tr>
      <tr>
        <th scope = "row">Correo</th>
        <td>${empleado.correo}</td>
      </tr>
      <tr>
        <th scope = "row">Cargo</th>
        <td>${empleado.cargo}</td>
      </tr>
      <tr>
        <th scope = "row">Sueldo bruto</th>
        <td>$ ${empleado.sueldoBruto().toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
      </tr>
      <tr>
        <th scope = "row">Descuento</th>
        <td>$ ${empleado.descuento().toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
      </tr>
      <tr>
        <th scope = "row">Sueldo neto</th>
        <td>$ ${empleado.sueldoNeto().toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
      </tr>
    </tbody>
  </table>
`;
});