<template>
  <div class="dashboard-container">
    <!-- Cabecera separada -->
    <header class="header">
      <div class="header-logo">
        <img
          src="https://www.uleam.edu.ec/wp-content/uploads/2012/09/LOGO-ULEAM-HORIZONTAL.png"
          alt="Logo ULEAM"
        />
      </div>
      <div class="user-info">
        <span>ELISA ZHARICK RUIZ LAVAYEN</span>
        <div class="dropdown">
          <button class="dropbtn" @click="toggleDropdown">▸</button>
          <div class="dropdown-content" :class="{ show: isDropdownVisible }">
            <router-link to="/config">Configuración</router-link>
            <router-link to="/" class="logout">Cerrar sesión</router-link>
          </div>
        </div>
      </div>
    </header>

    <!-- Dashboard Section -->
    <section class="attendance-summary">
      <h1>DASHBOARD</h1>
      <h2>Mis Cursos</h2>
      <div class="course-container">
        <div class="course-card" v-for="(course, index) in courses" :key="index">
          <img :src="course.image" :alt="`Imagen del Curso ${course.name}`" class="course-img" />
          <h3>{{ course.name }}</h3>
          <p>{{ course.details }}</p>
        </div>
      </div>

      <h2>Resumen de Asistencia</h2>
      <p>Asistencia: 85%</p>
      <canvas id="attendanceChart" width="200" height="200"></canvas>

      <h3>Calendario</h3>
            <div id="calendar">
                <table>
                    <tr>
                        <th>Hora</th>
                        <th>Lun</th>
                        <th>Mar</th>
                        <th>Mié</th>
                        <th>Jue</th>
                        <th>Vie</th>
                    </tr>
                    <tr>
                        <td>7:00 - 8:00</td>
                        <td rowspan="3">Perspectivas de la Inteligencia Artificial</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>08:00 - 09:00</td>
                        <td></td>
                        <td rowspan="2">Aplicaciones para el Cliente Web</td>
                        <td rowspan="2">Aplicaciones para el Cliente Web</td>
                        <td rowspan="2">Aplicaciones para el Cliente Web</td>
                    </tr>
                    <tr>
                        <td>09:00 - 10:00</td>
                        <td rowspan="2">Estadística para Ingeniería</td>
                    </tr>
                    <tr>
                        <td>10:00 - 11:00</td>
                        <td></td>
                        <td></td>
                        <td rowspan="2">Administración de Servidores</td>
                        <td rowspan="3">Administración de Bases de Datos Distribuidas</td>
                    </tr>
                    <tr>
                        <td>11:00 - 12:00</td>
                        <td rowspan="2">Administración de Servidores</td>
                        <td rowspan="2">Administración de Bases de Datos Distribuidas</td>
                        <td rowspan="3">Estadística para Ingeniería</td>
                    </tr>
                    <tr>
                        <td>12:00 - 13:00</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>14:00 - 17:00</td>
                        <td></td>
                        <td></td>
                        <td rowspan="3">Administración Empresarial</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>15:00 - 16:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>16:00 - 17:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>19:00 - 20:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </section>
    
    <footer>© 2024 Universidad Laica Eloy Alfaro de Manabí</footer>
  </div>
</template>

<script>
/* import { onMounted } from "vue"; */
import Chart from "chart.js/auto";

export default {
  name: "DashboardStudent",
  data() {
    return {
      isDropdownVisible: false,
      courses: [
        {
          name: "B -- Aplicaciones para el cliente web",
          details: "CARRERA: SOFTWARE 2024",
          image:
            "https://img.freepik.com/fotos-premium/fondo-abstracto-color-verde-pastel-poligono_112418-70.jpg?w=1060",
        },
        {
          name: "B -- DISEÑO WEB",
          details: "CARRERA: SOFTWARE 2024",
          image:
            "https://t4.ftcdn.net/jpg/08/39/88/13/240_F_839881312_gUQmzdYwKbyWxv3TzYwVkZFurgtmfaS6.jpg",
        },
        {
          name: "B -- PROGRAMACIÓN",
          details: "CARRERA: SOFTWARE 2024",
          image:
            "https://static.vecteezy.com/system/resources/previews/007/188/968/non_2x/abstract-wave-background-with-pastel-color-free-vector.jpg",
        },
      ],
      schedule: [
        {
          time: "7:00 - 8:00",
          activities: [
            { name: "Perspectivas de la Inteligencia Artificial", rowspan: 3 },
            {},
            {},
            {},
            {},
          ],
        },
        // Más filas del calendario...
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    renderChart() {
      const ctx = document.getElementById("attendanceChart").getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Asistencia", "Falta"],
          datasets: [
            {
              label: "Porcentaje de Asistencia",
              data: [85, 15],
              backgroundColor: ["#36a2eb", "#ff6384"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                },
              },
            },
          },
        },
      });
    },
  },
  onMounted() {
    this.renderChart();
  },
};
</script>
<style scoped>
body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f4f8;
    margin: 0;
    padding: 0;
}
header {
    background-image: url('https://static.vecteezy.com/system/resources/previews/009/911/228/non_2x/modern-green-lines-background-illustration-eps10-vector.jpg'); /* Reemplaza con la URL directa de la imagen */
    background-size: cover;
    background-position: center;
    height: 150px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding: 5px 10px;
    border-bottom: 1px solid #f0f0f0;
}


.header-logo img {
    height: 250px; /* Reducir el tamaño del logo */
}

.user-info span {
    font-size: 2rem; /* Reducir el tamaño del texto */
}

/* Contenedor del nombre y el dropdown */
.dropdown {
    position: relative;
    display: inline-block;
    text-align: left; /* Alinea todo a la izquierda */
    margin-right: 10px; /* Opcional: espacio entre el nombre y el dropdown */
}

/* Botón del dropdown */
.dropbtn {
    background-color: transparent; /* Sin fondo */
    color: black;
    padding: 10px;
    font-size: 15px;
    border: none;
    cursor: pointer;
    text-align: right; /* Alinea el texto de la flecha a la izquierda */
}

/* Contenido del dropdown */
.dropdown-content {
    display: none; /* Inicialmente oculto */
    position: relative;
    left: 0; /* Alinea el dropdown a la izquierda */
    top: 90%; /* Se abre justo debajo del botón */
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

/* Mostrar el dropdown cuando el botón se hace clic */
.dropdown.show .dropdown-content {
    display: block;
}

/* Estilos para los enlaces dentro del dropdown */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

/* Cambiar el color de fondo al pasar el mouse */
.dropdown-content a:hover {
    background-color: #ddd;
}

/* Cambiar el color de fondo al pasar el mouse */
.dropdown-content a:hover {
    background-color: #ddd;
}
h1 {
    font-size: 2rem;
    color: #333;
    margin: 40px 0;
    text-align: center; /* Centrar el texto */
}
h1::after {
    content: "";
    display: block;
    width: 40%;
    height: 4px;
    background: linear-gradient(to right, #eb6363, #c50303); /* Barra degradada en rojo */
    margin: 10px auto;
    border-radius: 5px; /* Bordes redondeados */
}
.user-info {
    display: flex;
    align-items: center;
    position: relative;
}
.user-info span {
    margin-right: 10px; /* Espaciado entre el nombre y el ícono */
    font-size: 1.2rem;
    color: #333; /* Color del nombre del estudiante */
}

/* Estilo para el botón desplegable */
.dropbtn {
    background-color: transparent; /* Fondo transparente */
    border: none; /* Sin borde */
    cursor: pointer; /* Cursor de mano al pasar */
    font-size: 1.2rem; /* Tamaño de fuente */
    transition: transform 0.3s; /* Transición para la animación */
    margin-right: 10px; /* Espacio entre la flecha y el nombre */
}
/* Clase que se aplica cuando el menú está activo */
.dropbtn.active {
    transform: rotate(90deg); /* Rota 90 grados cuando está activo */
}
/* Estilo para el menú desplegable */
.dropdown-content {
    display: none; /* Oculto por defecto */
    position: absolute; /* Posición absoluta para que se superponga */
    background-color: white; /* Fondo blanco */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Sombra para el menú */
    z-index: 1; /* Asegura que esté encima */
    margin-top: 10px; /* Espacio entre el botón y el menú */
}
/* Mostrar el menú al hacer clic */
.dropdown-content.show {
    display: block; /* Muestra el menú */
}
/* Estilo de los enlaces en el menú desplegable */
.dropdown-content a {
    color: black; /* Color del texto */
    padding: 12px 16px; /* Espaciado */
    text-decoration: none; /* Sin subrayado */
    display: block; /* Para que ocupe el ancho completo */
}
/* Efecto al pasar el mouse sobre los enlaces */
.dropdown-content a:hover {
    background-color: #f1f1f1; /* Color de fondo al pasar el mouse */
}
/* Estilo específico para la opción "Cerrar sesión" */
.dropdown-content a.logout {
    color: #c5002b; /* Color rojo para resaltar el enlace de cerrar sesión */
    font-weight: bold; /* Negrita para mayor visibilidad */
}
/* Estilo para los bloques de cursos */
.course-blocks {
    margin-top: 20px;
}
/* Estilo del contenedor de cursos */
.course-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Más espacio entre columnas */
    gap: 20px;
}
/* Estilo de las tarjetas de curso */
.course-card {
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease-in-out; /* Añadido efecto de transición */
}
.course-card:hover {
    transform: scale(1.05); /* Efecto de aumento al pasar el mouse */
}
/* Imágenes dentro de los bloques de curso */
.course-card img {
    width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0;
    margin-bottom: 10px;
}
/* Estilo de las descripciones de los cursos */
.course-card p {
    margin-bottom: 10px;
    color: #555;
}
/* Sección de resumen de asistencia */
.attendance-summary {
    display: flex;
    flex-direction: column; /* Organiza el contenido en columna */
    align-items: center; /* Centra horizontalmente el contenido */
    margin-top: 30px;
    text-align: center;
}
.attendance-summary h2 {
    color: #444;
    font-size: 1.8rem;
    margin-bottom: 10px;
}
.attendance-summary p {
    font-size: 1.4rem;
    color: #333;
    background-color: #eef9f3;
    padding: 15px;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 20px;
}
/* círculo de porcentaje */
canvas {
    margin: 20px auto; /* Centrando el canvas */
    display: block;
    max-width: 150px; /* Ancho maximo*/
    height: 150px; /* Altura */
}
/* calendario */
#calendar {
    background-color: #fff;
    border: 2px solid #abf0a9; /* Borde azul */
    border-radius: 10px; /* Bordes redondeados */
    padding: 15px; /* Espaciado interno */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
    width: 90%; /* Ancho del calendario */
    margin: 20px auto; /* Centrando el calendario */
    overflow-x: auto; /* Manejar el desbordamiento horizontal */
}

/* Estilo de la tabla del calendario */
#calendar table {
    width: 100%; /* Ancho total de la tabla */
    border-collapse: collapse; /* Eliminar espacio entre bordes */
    font-size: 0.9rem; /* Tamaño de fuente reducido */
}

/* Estilo de las celdas del calendario */
#calendar th, #calendar td {
    border: 1px solid #abf0a9; /* Borde azul */
    padding: 8px; /* Espaciado interno de celdas */
    text-align: center; /* Alinear texto al centro */
}

/* Estilo de celdas unidas */
#calendar td[rowspan] {
    background-color: #eef9f3; /* Color de fondo para celdas unidas */
    font-weight: bold; /* Negrita para celdas que contienen materias */
}

/* Estilo del encabezado de la tabla */
#calendar th {
    background-color: #d1fdc3; /* Color de fondo para los encabezados */
    color: #333; /* Color del texto en encabezados */
    font-weight: bold; /* Negrita para encabezados */
}

/* Estilo de filas alternas */
#calendar tr:nth-child(even) {
    background-color: #ffffff; /* Color de fondo para filas pares */
}

/* Efecto al pasar el mouse */
#calendar tr:hover {
    background-color: #e4fade; /* Color de fondo al pasar el mouse */
}

/* Estilo de filas con materias */
#calendar td {
    transition: background-color 0.3s; /* Efecto de transición */
}

#calendar td:not(:empty) {
    font-weight: bold; /* Negrita para celdas que contienen materias */
    color: #333; /* Color del texto */
}
</style>
