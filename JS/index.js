class Alumno {
  codigo;
  nombre;
  nota1;
  nota2;
  nota3;
  nota4;
  constructor(c, n, n1, n2, n3, n4) {
  this.codigo = c;
  this.nombre = n;
  this.nota1 = n1;
  this.nota2 = n2;
  this.nota3 = n3;
  this.nota4 = n4;
  }
  promedio = () => {
  let promedio = this.nota1 * 0.15 + this.nota2 * 0.2 + this.nota3 * 0.25 + this.nota4 * 0.4;
  return promedio;
  };
  condicion = () => {
  if (this.promedio() >= 12) {
  return "Aprobado";
  } else {
  return "Desaprobado";
  }
  };
  obsequio = () => {
  if (this.promedio() > 17) {
  return "Mochila";
  } else {
  return "Sin premio :c";
  }
  };
  }
  
  const resultado = document.querySelector("#resultado");
  
  let codigo = prompt('Ingresa el codigo');
  let nombre = prompt('Ingresa el nombre');
  let n1 = prompt('Ingresa la nota 1');
  let n2 = prompt('Ingresa la nota 2');
  let n3 = prompt('Ingresa la nota 3');
  let n4 = prompt('Ingresa la nota 4');
  
  
  let alumno1 = new Alumno(codigo, nombre, n1, n2, n3, n4);
  resultado.innerHTML =
  `
  <h5>${alumno1.nombre}
  <p>promedio: ${alumno1.promedio()}
  <p>condicion: ${alumno1.condicion()}
  <p>obsequio: ${alumno1.obsequio()}
  `
  
  console.log(alumno1);
  console.log(alumno1.promedio());
  console.log(alumno1.condicion());
  console.log(alumno1.obsequio());