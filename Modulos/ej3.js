class Alumno {
    constructor(username, dni) {
      this.username = username,
      this.dni = dni;
    }
  }

  function alumni(username, dni){
    let alumno = new Alumno(username, dni);
    console.log(`Username: ${alumno.username} / DNI: ${alumno.dni}`);
  }

module.exports = alumni;