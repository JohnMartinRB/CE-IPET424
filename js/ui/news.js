document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("news-container");

    if (!container) return; // Si no estamos en esta página, no hace nada

    async function cargarNoticias() {
        try {
            // Hacemos el fetch para traer el JSON
            const response = await fetch("../assets/data/news.json");
            const data = await response.json();

            // Verificamos si hay noticias cargadas
            if (!data.noticias || data.noticias.length === 0) {
                container.innerHTML = `<p>No hay novedades publicadas por el momento.</p>`;
                return;
            }

            let html = "";

            // Recorremos cada noticia del JSON para armar su tarjeta
            data.noticias.forEach((item) => {
                html += `
                    <article class="card-noticia">
                        <img src="${item.imagen}" alt="${item.titulo}" class="img-noticia">
                        <div class="card-body">
                            <span class="fecha">📅 ${item.fecha}</span>
                            <h3>${item.titulo}</h3>
                            <p>${item.descripcion}</p>
                        </div>
                    </article>
                `;
            });

            // Inyectamos todas las tarjetas generadas dentro del contenedor
            container.innerHTML = html;
        } catch (error) {
            console.error("Error al cargar las noticias:", error);
            container.innerHTML = `<p>Ocurrió un error al cargar las novedades.</p>`;
        }
    }

    cargarNoticias();
});
