<template>
  <div class="config-container">
        <h1>Configuración del Sistema</h1>
        <p>Administra tus preferencias y ajustes del sistema.</p>
        <div class="config-section">
            <h2>Cuenta</h2>
            <div class="config-item">
                <span>Cambiar contraseña</span>
                <button class="btn">Modificar</button>
            </div>
            <div class="config-item">
                <span>Cambiar dirección de correo</span>
                <button class="btn">Modificar</button>
            </div>
        </div>
        <div class="config-section" id="teacher-settings">
            <h2>Configuraciones para Profesores</h2>
            <div class="config-item">
                <span>Gestionar clases</span>
                <button class="btn">Administrar</button>
            </div>
            <div class="config-item">
                <span>Acceso a informes de asistencia</span>
                <button class="btn">Ver informes</button>
            </div>
        </div>
        <div class="config-section" id="student-settings">
            <h2>Configuraciones para Estudiantes</h2>
            <div class="config-item">
                <span>Ver progreso académico</span>
                <button class="btn">Ver progreso</button>
            </div>
            <div class="config-item">
                <span>Solicitar certificados</span>
                <button class="btn">Solicitar</button>
            </div>
        </div>
    </div>

    <footer>
        © 2024 Universidad Laica Eloy Alfaro de Manabí
    </footer>
</template>

<script>
export default {
  name: "ConfigApp",
  data() {
    return {
      isTeacher: false,  // Set to true if the user is a teacher
      isStudent: true,   // Set to true if the user is a student
    };
  },
  methods: {
    changePassword() {
      alert('Cambiando contraseña...');
    },
    changeEmail() {
      alert('Cambiando dirección de correo...');
    },
    manageClasses() {
      alert('Gestionando clases...');
    },
    viewAttendanceReports() {
      alert('Viendo informes de asistencia...');
    },
    viewAcademicProgress() {
      alert('Viendo progreso académico...');
    },
    requestCertificates() {
      alert('Solicitando certificados...');
    }
  }
};
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}
.config-container {
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(37, 37, 37, 0.1);
}
h1 {
    color: #333;
    text-align: center;
}
h2 {
    color: #333;
    margin-top: 20px;
}
p {
    text-align: center;
    color: #666;
}
.config-section {
    margin-bottom: 30px;
}
.config-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}
.config-item span {
    font-weight: bold;
    color: #333;
}
.btn {
    padding: 10px 15px;
    background-color: #cdfad8;
    color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}
.btn:hover {
    background-color: #89f8a1;
}
footer {
    text-align: center;
    margin-top: 20px;
    color: #666;
    font-size: 0.9em;
}
</style>