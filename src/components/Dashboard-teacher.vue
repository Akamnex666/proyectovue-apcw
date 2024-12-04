<template>
  <div class="dashboard-container">
    <header>
      <div class="header-logo">
        <img
          src="https://www.uleam.edu.ec/wp-content/uploads/2012/09/LOGO-ULEAM-VERTICAL.png"
          alt="Logo ULEAM"
          class="logo"
        />
        <h1>BIENVENIDO/A DOCENTE</h1>
        <div class="user-info">
          <span>PATRICIA ALEXANDRA QUIROZ PALMA</span>
          <div class="dropdown">
            <button class="dropbtn" @click="toggleDropdown">▸</button>
            <div class="dropdown-content" :class="{ show: isDropdownVisible }">
              <router-link to="/config">Configuración</router-link>
              <router-link to="/" class="logout">Cerrar sesión</router-link>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="attendance-summary">
      <h2>DASHBOARD</h2>
      <h3>Cursos</h3>
      <div class="course-container">
        <div class="course-card" v-for="(course, index) in courses" :key="index">
          <router-link :to="course.link" style="text-decoration: none;">
            <img :src="course.image" :alt="`Imagen del ${course.name}`" class="course-img" />
            <h3>{{ course.name }}</h3>
            <p>{{ course.details }}</p>
          </router-link>
        </div>
      </div>
    </section>

    <footer>© 2024 Universidad Laica Eloy Alfaro de Manabí</footer>
  </div>
</template>

<script>
export default {
  name: "DashboardTeacher",
  data() {
    return {
      isDropdownVisible: false,
      courses: [
        {
          name: "PLICACIONES PARA EL CLIENTE WEB",
          details: "CARRERA: SOFTWARE 2024",
          image:
            "https://img.freepik.com/fotos-premium/fondo-abstracto-color-verde-pastel-poligono_112418-70.jpg?w=1060",
          link: "/attendance-record",
        },
        {
          name: "DISEÑO WEB",
          details: "CARRERA: SOFTWARE 2024",
          image:
            "https://thumbs.dreamstime.com/b/pastel-geometric-background-camouflage-pattern-colorful-rectangular-geometric-background-camouflage-pattern-pastel-shades-106660880.jpg",
          link: "/attendance-record",
        },
        {
          name: "PROGRAMACIÓN",
          details: "CARRERA: SOFTWARE 2024",
          image:
            "https://static.vecteezy.com/system/resources/previews/007/188/968/non_2x/abstract-wave-background-with-pastel-color-free-vector.jpg",
          link: "/attendance-record",
        },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    handleLogout() {
      this.$router.push("/LoginStudent");
    },
  },
};
</script>
<style scoped>
.dashboard-container {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
header {
  text-align: center;
  margin-bottom: 20px;
}
.logo {
  width: 200px;
  margin-bottom: 20px;
}
h1 {
  color: #333;
  margin: 0;
}
.attendance-summary {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}
h2 {
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}
h2::after {
  content: "";
  display: block;
  width: 10%;
  height: 4px;
  background: linear-gradient(to right, #eb6363, #c50303);
  margin: 10px auto;
  border-radius: 5px;
}
.course-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
.course-card {
  text-decoration: none;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
}
.course-card:hover {
  transform: scale(1.05);
}
.course-img {
  max-width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}
footer {
  text-align: center;
  margin-top: 20px;
  color: #666;
}
.user-info {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.dropbtn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  margin-right: 10px;
  transition: transform 0.3s;
}
.dropbtn.active {
  transform: rotate(90deg);
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-top: 10px;
  border-radius: 5px;
  min-width: 160px;
}
.dropdown-content.show {
  display: block;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background-color: #f1f1f1;
}
.dropdown-content a.logout {
  color: #c5002b;
  font-weight: bold;
}
</style>
