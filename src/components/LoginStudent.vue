<template>
  <div class="login-container">
    <!-- Caja del login -->
    <div class="login-box">
      <!-- Logo ULEAM -->
      <img
        src="https://www.uleam.edu.ec/wp-content/uploads/2012/09/LOGO-ULEAM-VERTICAL.png"
        alt="Logo ULEAM"
        class="logo-uleam"
      />
      <h1>BIENVENIDO</h1>
      <h2>Iniciar Sesión</h2>
      <!-- Formulario de login -->
      <form @submit.prevent="handleLogin">
        <label for="user">Usuario:</label>
        <input
          type="text"
          id="user"
          v-model="user"
          placeholder="Ingresa tu usuario"
          required
        />

        <label for="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Ingresa tu contraseña"
          required
        />

        <button type="submit" class="login-btn">Iniciar Sesión</button>
      </form>

      <!-- Opciones adicionales -->
      <div class="login-options">
        <a href="#">¿Olvidaste tu contraseña?</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginStudent",
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      if (
        (this.user === "e1317863445" && this.password === "1234") ||
        (this.user === "p1317863445" && this.password === "abcd")
      ) {
        if (this.user === "e1317863445") {
          this.$router.push("/dashboard-student"); // Redirigir a dashboard de estudiante
        } else if (this.user === "p1317863445") {
          this.$router.push("/dashboard-teacher"); // Redirigir a dashboard de profesor
        }
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    },
  },
};
</script>
<style scoped>
/* Estilo general */
body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #eaf7e9; /* Fondo verde claro */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #333;
}

/* Contenedor principal */
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

/* Caja del login */
.login-box {
    background-color: #ffffff; /* Fondo blanco */
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 100%;
    max-width: 400px;
}

/* Logo ULEAM */
.logo-uleam {
    width: 150px;
    margin-bottom: 50px;
}

/* Encabezados */
h1 {
    font-size: 24px;
    color: #479773; /* Verde medio */
    margin-bottom: 10px;
}
h1::after {
    content: "";
    display: block;
    width: 30%;
    height: 4px;
    background: linear-gradient(to right, #eb6363, #c50303); /* Barra degradada en rojo */
    margin: 10px auto;
    border-radius: 5px; /* Bordes redondeados */
}
h2 {
    font-size: 18px;
    color: #58b58c; /* Verde más oscuro */
    margin-bottom: 20px;
}

/* Formulario */
form {
    width: 100%;
    text-align: left;
}

label {
    font-size: 14px;
    color: #333;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 12px;
    margin: 10px 0 20px;
    border: 1px solid #c4dec6;
    border-radius: 5px;
    font-size: 14px;
    background-color: #f9fff9; /* Fondo claro */
}

input[type="text"]:focus,
input[type="password"]:focus {
    border-color: #58b58c;
    outline: none;
}

/* Botón de inicio de sesión */
.login-btn {
    width: 100%;
    padding: 12px;
    background-color: #58b58c; /* Verde medio */
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.login-btn:hover {
    background-color: #479773; /* Verde más oscuro */
}

/* Opciones adicionales */
.login-options {
    margin-top: 15px;
}

.login-options a {
    text-decoration: none;
    font-size: 12px;
    color: #58b58c;
}

.login-options a:hover {
    text-decoration: underline;
    color: #479773;
}
</style>
