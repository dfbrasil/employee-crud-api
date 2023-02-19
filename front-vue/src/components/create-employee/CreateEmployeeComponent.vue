<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
          <h3>Add Employee</h3>
      </div>
      <div class="card-body">
      <form @submit.prevent="HandleSubmitForm()">

        <!-- INICIO BLOCO: Employee name -->
        <div class="form-group">
          <label class="font-weight-bold">Employee Name</label>
          <input type="text" class="form-control" placeholder="Employee Name" v-model="employee.name" required>
        </div>
        <!-- FIM BLOCO: Employee name -->

        <!-- INICIO BLOCO: Job Hole -->
        <div class="form-group">
          <label class="font-weight-bold">Job Role</label>
          <input type="text" class="form-control" placeholder="Job Role" v-model="employee.job_role" required>
        </div>
        <!-- FIM BLOCO: Job Hole -->

        <!-- INICIO BLOCO: Salary -->
        <div class="form-group">
          <label class="font-weight-bold">Salary</label>
          <input type="number" class="form-control" placeholder="Salary" v-model="employee.salary" required>
        </div>
        <!-- FIM BLOCO: Salary -->

        <!-- INICIO BLOCO: birth -->
        <div class="form-group">
          <label class="font-weight-bold">Birth</label>
          <input type="date" class="form-control" placeholder="YYYY/MM/DD" v-model="employee.birth" required>
        </div>
        <!-- FIM BLOCO: birth -->

        <!-- INICIO BLOCO: Employee Registration -->
        <div class="form-group">
          <label class="font-weight-bold">Employee Registration</label>
          <input type="text" class="form-control" placeholder="Employee Registration" v-model="employee.employee_registration" required>
        </div>
        <!-- FIM BLOCO: Employee Registration -->
        <div class="form-group">
          <button class="btn-primary" type="submit">ADD employee</button>
        </div>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    name: 'CreateEmployeeComponent',
  },
  data() {
    return {
      employee: {
        name: '',
        job_role: '',
        salary: '',
        birth: '',
        employee_registration: '',
      },
    };
  },
  methods: {
    HandleSubmitForm() {},
  },
};
</script>
