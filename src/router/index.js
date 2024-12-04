import { createRouter, createWebHistory } from 'vue-router'
/* import Vue from 'vue';
import Router from 'vue-router'; */
import LoginStudent from '../components/LoginStudent.vue';              // Importar componentes
import DashboardTeacher from '../components/Dashboard-teacher.vue';
import DashboardStudent from '../components/Dashboard-student.vue';
import ConfigApp from '../components/ConfigApp.vue';
import AsistenciaStudent from '../components/AsistenciaStudent.vue';





const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',                  // Ruta principal (login)
      name: 'login',
      component: LoginStudent,
    },
    {
      path: '/Dashboard-teacher', // Ruta para el dashboard de profesor
      name: 'DashboardTeacher',
      component: DashboardTeacher,
    },
    {
      path: '/Dashboard-student', // Ruta para el dashboard de estudiante
      name: 'DashboardStudent',
      component: DashboardStudent,
    },
    {
      path: '/config',            // Ruta para la configuración
      name: 'ConfigApp',
      component: ConfigApp,
    },
    {
      path: '/attendance-record',        // Ruta para asistencia, accesible desde el dashboard-teacher
      name: 'AsistenciaStudent',
      component: AsistenciaStudent,
    },
  ],
});
export default router