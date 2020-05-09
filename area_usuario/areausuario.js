class IniAreausuario {

  static get URL_BASE() {
    return 'https://jsonplaceholder.typicode.com';
  }

  static get TRIGGER_ELM() {
    return document.querySelector('#meterId');
  }

  static get FORM_ID() {
    return document.querySelector('#inputIdUsuario');
  }

  //funcion para manejar ajax call
  ajaxCall(url, post, comentarios) {
    fetch()
      .then(data => data.jason(data))
      .then(data => this.generadorDatos.netx(data))
      .catch(err = "Problemas obteniendo la información ${err}")
  }
  //guarda y pintara la info obtenida de Json
  pintorDatos() {

  }
  // Funcion para realizar las llamadas de usuarios, post y comentarios
  obtenerInfo(usuarioIdentificador) {
    const usuario = yield this.ajaxCall(´${IniAreausuario.URL_BASE}/users/${usuarioIdentificador}´);
    const post = yield this.ajaxCall(´${IniAreausuario.URL_BASE}/posts?userId=${usuarioIdentificador}´);
    console.log("bien");
  }
  //Comprueba que lo introducido en el input es una id valida
  comprobarId() {}
  //obtiene id usuario del imput y inicia el generador
  getIdUsuario() {
    const usuarioIdentificador = IniAreausuario.FORM_ID.value;
    this.generadorDatos = this.obtenerInfo(usuarioIdentificador);


  }
  // inicia al hacer click en el boton aceptar
  init() {
    IniAreausuario.TRIGGER_ELM.addEventListener('click', this.getIdUsuario.bind(this));
  }
}

const iniAreausuario = new IniAreausuario();
iniAreausuario.init();
