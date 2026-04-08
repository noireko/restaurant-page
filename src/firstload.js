function firstLoad() {
    const mainContent = document.getElementById("content");
    mainContent.innerHTML += `<div class="main-contenedor">
            <div class="foto">
                <div class="contenedor-btn">
                    <div class="contenedor-texto">
                        <h2>Donde cada comida cuenta una historia</h2>
                        <p>Comidas artesanales hechas con el amor y calor de la cocina</p>
                    </div>
                    <button>Consultar Menú</button>
                </div>
            </div>
        </div>`
}

export { firstLoad };