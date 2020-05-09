class IniAreausuario {
  //(static method)
  static get URL_BASE() {
    return 'https://jsonplaceholder.typicode.com';
  }

  static get TRIGGER_ELM() {
    return document.querySelector('#meterId');
  }

  static get FORM_ID() {
    return document.querySelector('#inputIdUsuario');
  }
    static get PINTAR_USER_NAME() {
      return document.querySelector('#hUsuario');
  }

  //funcion para manejar ajax call (Promesas)
  ajaxCall(url) {
    fetch(url)
      .then(data => data.json(data))
      .then(data => this.generadorDatos.netx(data))
      .catch(err => `Problemas obteniendo la información ${err}`);
  }
  //guarda y pintara la info obtenida de Json (method)
  pintorDatos(user) {
    //const { name, username } = user;
    const pintarUserName = `<strong>${user}</strong>`;
    IniAreausuario.PINTAR_USER_NAME.innerHTML = pintarUserName;
  }
  // Funcion para realizar las llamadas de usuarios, post y comentarios (Generadores)
  *obtenerInfo(usuarioIdentificador) {
    const user = yield this.ajaxCall(`${IniAreausuario.URL_BASE}/users/${usuarioIdentificador}`);
    const posts = yield this.ajaxCall(`${IniAreausuario.URL_BASE}/posts?userId=${usuarioIdentificador}`);
    console.log(usuarioIdentificador);
    // no funciona y no da error -> console.log(user, posts);
    this.pintorDatos(user);
  }
  //Comprueba que lo introducido en el input es una id valida
  comprobarId() {}
  //obtiene id usuario del imput y inicia el generador
  getIdUsuario() {
    const usuarioIdentificador = IniAreausuario.FORM_ID.value;
    this.generadorDatos = this.obtenerInfo(usuarioIdentificador);
    this.generadorDatos.next();
  }
  // inicia al hacer click en el boton aceptar
  init() {
    IniAreausuario.TRIGGER_ELM.addEventListener('click', this.getIdUsuario.bind(this));
  }
}
//(instancias)
const iniAreausuario = new IniAreausuario();
iniAreausuario.init();
