export default function cargarContact() {
    const mainContent = document.getElementById("content");
    mainContent.innerHTML = `<div class="main-contenedor">
            <div class="foto">
                <div class="contenedor-btn">
                    <div class="container-contact">
                        <h2>
                            Contacto
                        </h2>
                        <div>
                            <h3>Dirección</h3>
                            <p>Av. Siempre Viva 742, Lomas de Zamora, Buenos Aires</p>
                        </div>
                        <div>
                            <h3>Teléfono</h3>
                            <p>+54 11 2345-6789</p>
                        </div>
                        <div>
                            <h3>Email</h3>
                            <p>contacto@turestaurante.com</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>`
}


