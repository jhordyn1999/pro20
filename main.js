
var app = new Vue({
    el: '#app',

    data: {
        contadorProyecto: 1,
        logos_confian: [{ nombre: '', foto: 'img-pro20/oracle.PNG' },
        { nombre: '', foto: 'img-pro20/w.PNG' },
        { nombre: '', foto: 'img-pro20/colgate.PNG' },
        { nombre: '', foto: 'img-pro20/kolpa.PNG' },
        { nombre: '', foto: 'img-pro20/cadinsa.PNG' },
        { nombre: '', foto: 'img-pro20/bicentenario.PNG' },
        { nombre: '', foto: 'img-pro20/lima.PNG' },],

        listado_trabajos: [{
            foto: 'img-pro20/audiovisual.PNG',
            nombre: 'Programador web', time: 'Hace 5 días',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas ipsum exercitationem saepe odio voluptates   dignissimos quaerat, mollitia culpa tempora cupiditate ducimus itaque nihil officiis nesciunt. Nostrum commodi officia iure.'
        },
        {
            foto: 'img-pro20/audiovisual.PNG',
            nombre: 'Programador web',
            time: 'Hace 5 días',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas ipsum exercitationem saepe odio voluptates   dignissimos quaerat, mollitia culpa tempora cupiditate ducimus itaque nihil officiis nesciunt. Nostrum commodi officia iure.'
        }],

    },
    methods: {
        changueSlider(sld) {
            const sld1 = document.getElementById("sld1");
            const sld2 = document.getElementById("sld2");
            const sld3 = document.getElementById("sld3");
            const sld4 = document.getElementById("sld4");

            if (sld === "sld1") {
                this.colorBoton(sld1)
                this.sinColorBoton(sld2)
                this.sinColorBoton(sld3)
                this.sinColorBoton(sld4)
            } else if (sld === "sld2") {
                this.colorBoton(sld2)
                this.sinColorBoton(sld1)
                this.sinColorBoton(sld3)
                this.sinColorBoton(sld4)
            } else if (sld === "sld3") {
                this.colorBoton(sld3)
                this.sinColorBoton(sld1)
                this.sinColorBoton(sld2)
                this.sinColorBoton(sld4)
            } else if (sld === "sld4") {
                this.colorBoton(sld4)
                this.sinColorBoton(sld1)
                this.sinColorBoton(sld2)
                this.sinColorBoton(sld3)
            }
        },
        colorBoton(id) {
            id.style.background = "#4B71FC"
        },
        sinColorBoton(id) {
            id.style.background = "#1C0098"
        },
        changueMenu() {
            const btnMenu = document.getElementById("btnMenu");
            const btnSalir = document.getElementById("btnSalir");
            const divMenu = document.getElementById("divMenu");


            if (divMenu.style.display = "none") {
                divMenu.style.display = "block"
                btnSalir.style.display = "block"
                btnMenu.style.display = "none"

            }
        },
        changueMenuSalir() {
            const btnMenu = document.getElementById("btnMenu");
            const btnSalir = document.getElementById("btnSalir");
            const divMenu = document.getElementById("divMenu");


            if (divMenu.style.display = "block") {
                divMenu.style.display = "none"
                btnSalir.style.display = "none"
                btnMenu.style.display = "block"

            }
        },
        changueItemMenu(item) {
            const itemLineas = document.getElementById("idLineas");
            const itemNosotros = document.getElementById("idNosotros");
            const itemTrabaja = document.getElementById("idTrabaja");
            const itemContactanos = document.getElementById("idContactanos");

            if (item === "Lineas") {
                itemLineas.style.background = "#F21170";
                itemNosotros.style.background = "transparent";
                //itemTrabaja.style.background = "transparent";
                itemContactanos.style.background = "transparent";


            } else if (item === "Nosotros") {
                itemNosotros.style.background = "#F21170";
                itemLineas.style.background = "transparent";
                // document.getElementById('idTrabaja').style.background = "transparent";
                itemContactanos.style.background = "transparent";


            } else if (item === "Contacto") {
                itemContactanos.style.background = "#F21170";
                itemLineas.style.background = "transparent";
                itemNosotros.style.background = "transparent";
                // itemTrabaja.style.background = "transparent";


            }
        },
        changueFile() {
            document.querySelectorAll("[type='file']")
                .forEach(function (control) {
                    control.addEventListener('change', function (ev) {
                        console.log(this.id);
                        document.querySelector("[for='" + this.id + "']")
                            .innerHTML = ev.target.files[0].name;
                        console.log(ev.target.files)
                    });
                });
        },




    },
})
