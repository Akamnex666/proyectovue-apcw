<template>
  <div class="container">
    <button class="back-button" @click="goBack">↩</button>
    <img
      src="https://www.uleam.edu.ec/wp-content/uploads/2012/09/LOGO-ULEAM.png"
      alt="Logo ULEAM"
      class="uleam-logo"
    />
    <h2>Registro de Asistencia</h2>

    <p>{{ currentTime }}</p>

    <form @submit.prevent="submitAttendance" class="attendance-form">
      <label for="parallel">Paralelo:</label>
      <select id="parallel" v-model="selectedParallel" @change="updateStudents" required>
        <option value="">Seleccione un paralelo</option>
        <option value="A">Paralelo A</option>
        <option value="B">Paralelo B</option>
      </select>

      <div v-if="students.length" id="studentCheckboxesContainer">
        <h3>Seleccionar estudiantes:</h3>
        <div id="studentCheckboxes">
          <label v-for="(student, index) in students" :key="index">
            <input type="checkbox" v-model="selectedStudents" :value="student" /> {{ student }}
          </label>
        </div>
      </div>

      <button type="submit" v-if="students.length" id="submitBtn">Registrar Asistencia</button>
    </form>

    <!-- Botón para desplegar/ocultar los registros -->
    <button @click="toggleAttendanceRecords" class="toggle-button">
      {{ showAttendanceRecords ? "Ocultar Registros" : "Mostrar Registros" }}
    </button>

    <!-- Mostrar registros de asistencia almacenados -->
    <div v-if="showAttendanceRecords && attendanceRecords.length">
      <h3>Registros de Asistencia</h3>
      <ul>
        <li v-for="(record, index) in attendanceRecords" :key="index">
          <strong>{{ record.date }}</strong> - Paralelo: {{ record.parallel }} - Estudiantes presentes: 
          <!-- Verificar si record.students es un arreglo antes de usar .join() -->
          <span>{{ Array.isArray(record.students) ? record.students.join(", ") : "No students listed" }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AsistenciaStudent",
  data() {
    return {
      currentTime: "",
      selectedParallel: "",
      students: [],
      selectedStudents: [],
      attendanceRecords: [], // Guardar los registros de asistencia
      showAttendanceRecords: false, // Controla la visibilidad de los registros
    };
  },
  methods: {
    goBack() {
      this.$router.push("/dashboard-teacher");
    },
    updateCurrentTime() {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "America/Guayaquil",
      };
      const now = new Date();
      this.currentTime = new Intl.DateTimeFormat("es-EC", options).format(now);
    },
    updateStudents() {
      const parallelA = [
        "NATHALIA ARACELY ANGULO MEDRANDA",
        "WILLIAM ANDRES CABRERA PALACIOS",
        "CARLOS ALBERTO DELGADO CAMPUZANO",
        "GONZALO ALEXANDER DELGADO MACIAS",
        "ANTHONY ROMAN FUENTES CHONILLO",
        "JORDY ALEXANDER FRANCO ROSADO",
        "ROBINSON OMAR MOREIRA DELGADO",
        "WALTHER JAVIER GUTIEREZ LOOR",
        "MICHAEL AGUSTIN INTRIAGO BENITEZ",
        "LUIS EMILIO FIGUEROA ARTEAGA",
      ];
      const parallelB = [
        "EMILIO SLEIMEN CARDENAS AVILA",
        "CARLOS JUNIOR CHILE SILVA",
        "JESUS ARIEL MONTES TORO",
        "LUIS ANTONIO MEDRANDA FLORES",
        "MAYKEL JOSUE MENENDEZ VELEZ",
        "MARCELO ISRAEL MEJIA CHAMORRO",
        "ELISA ZHARICK RUIZ LAVAYEN",
        "LENIN ALEXANDER SUAREZ CARRERA",
        "VICTOR HUGO ZAMBRANO MARTINEZ",
        "YEIKER ALEXANDER LOPEZ PACHAY",
        "JERENY JOHNAYKER VERA MERO",
        "CINTHIA DAYANNA ZAMBRANO GAVILANES",
      ];

      this.students = this.selectedParallel === "A" ? parallelA : this.selectedParallel === "B" ? parallelB : [];
      this.selectedStudents = [];
    },
    submitAttendance() {
      if (this.selectedStudents.length) {
        const attendanceRecord = {
          date: this.currentTime,
          parallel: this.selectedParallel,
          students: this.selectedStudents,
        };

        // Obtener registros previos del localStorage o iniciar un arreglo vacío
        const existingRecords = JSON.parse(localStorage.getItem("attendanceRecords")) || [];

        // Añadir el nuevo registro al arreglo
        existingRecords.push(attendanceRecord);

        // Guardar los registros en el localStorage
        localStorage.setItem("attendanceRecords", JSON.stringify(existingRecords));

        // Actualizar los registros en la vista
        this.attendanceRecords = existingRecords;

        // Limpiar el formulario y volver a su estado inicial
        this.selectedParallel = "";
        this.selectedStudents = [];
        this.students = [];

        alert("Asistencia registrada exitosamente.");
      } else {
        alert("Por favor, selecciona los estudiantes.");
      }
    },

    // Método para alternar la visibilidad de los registros
    toggleAttendanceRecords() {
      this.showAttendanceRecords = !this.showAttendanceRecords;
    },
  },
  mounted() {
    this.updateCurrentTime();
    setInterval(this.updateCurrentTime, 1000);

    // Cargar los registros almacenados al cargar la página
    const storedRecords = JSON.parse(localStorage.getItem("attendanceRecords"));
    if (storedRecords) {
      this.attendanceRecords = storedRecords;
    }
  },
};
</script>

<style scoped>
body {
    font-family: 'Arial', sans-serif;
    background: #3aad5767;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background-color: #fff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    text-align: center;
    position: relative;
}

.back-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px; /* Tamaño del texto ajustado al tamaño de un emoji */
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
    padding: 8px; /* Ajuste de padding para que el botón se vea bien alrededor del emoji */
    border-radius: 50%; /* Forma circular del botón */
    transition: transform 0.2s, background-color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px; /* Ancho y alto del botón, igual que el tamaño de un emoji */
    height: 50px;
}

.back-button:hover {
    transform: scale(1.1); /* Efecto al pasar el mouse */
    background-color: #f0f0f0; /* Color de fondo cuando el mouse pasa */
}

.uleam-logo {
    display: block;
    margin: 40px auto;
    width: 200px;
}

h2 {
    color: #333;
    font-size: 2rem;
    margin-bottom: 20px;
}

label {
    font-size: 1rem;
    color: #333;
    display: block;
    margin-top: 20px;
}

select {
    width: 100%;
    padding: 10px;
    margin-top: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 12px;
    background-color: #6cdf98;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #42924f;
}
</style>
