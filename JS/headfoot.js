const header = `<nav class="navbar navbar-expand-lg bg-dark bg-opacity-75 shadow">
<div class="container-fluid ps-5">
    <a class="navbar-brand" href="./index.html">
        <img src="./Assets/Img/codoacodo.png" alt="Logo" width="90" class="d-inline-block">
        Conf Bs As
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-center justify-content-end pe-5" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link text-white" href="./index.html">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-secondary">Comprar tickets</a>
            </li>
        </ul>
    </div>
</div>
</nav>`

const footer = `<div class="mt-3">
<ul class="nav estilo-pie d-flex flex-column flex-md-row text-center justify-content-evenly p-3">
    <li class="nav-itemf">
        <a class="text-white text-decoration-none" href="#">Preguntas frecuentes</a>
    </li>
    <li class="nav-itemf">
        <a class="text-white text-decoration-none" href="#">Contáctanos</a>
    </li>
    <li class="nav-itemf">
        <a class="text-white text-decoration-none" href="#">Prensa</a>
    </li>
    <li class="nav-itemf">
        <a class="text-white text-decoration-none" href="#">Conferencias</a>
    </li>
    <li class="nav-itemf">
        <a class="text-white text-decoration-none" href="#">Términos y condiciones</a>
    </li>
    <li class="nav-itemf">
        <a class="text-white text-decoration-none" href="#">Privacidad</a>
    </li>
    <li class="nav-itemf">
        <a class="text-white text-decoration-none" href="#">Estudiantes</a>
    </li>
</ul>
</div>`

const cabecera = document.getElementsByTagName('header')[0]
const pie = document.getElementsByTagName('footer')[0]
cabecera.innerHTML = header
pie.innerHTML = footer