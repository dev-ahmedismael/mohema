/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // App
    "./src/app/app.component.html",
    "./src/app/app.component.ts",

    // Navbar
    "src/components/navbar/navbar.component.html",
    "src/components/navbar/navbar.component.ts",

    // Home
    // Header
    "src/components/home/header/header.component.html",
    "src/components/home/header/header.component.ts",

    // About
    "src/components/home/about/about.component.html",
    "src/components/home/about/about.component.ts",

    // Advantages
    "src/components/home/advantages/advantages.component.html",
    "src/components/home/advantages/advantages.component.ts",

    // Usage
    "src/components/home/usage/usage.component.html",
    "src/components/home/usage/usage.component.ts",

    // Partners
    "src/components/home/partners/partners.component.html",
    "src/components/home/partners/partners.component.ts",

    // Registeration
    // Register
    "src/components/register/register.component.html",
    "src/components/register/register.component.ts",

    // Login
    "src/components/login/login.component.html",
    "src/components/login/login.component.ts",

    // Login information
    "src/components/register/login-information/login-information.component.html",
    "src/components/register/login-information/login-information.component.ts",

    // Personal information
    "src/components/register/personal-information/personal-information.component.html",
    "src/components/register/personal-information/personal-information.component.ts",

    // Company details
    "src/components/register/company-details/company-details.component.html",
    "src/components/register/company-details/company-details.component.ts",

    // Create first teamwork
    "src/components/register/create-first-teamwork/create-first-teamwork.component.html",
    "src/components/register/create-first-teamwork/create-first-teamwork.component.ts",

    // Set company goals
    "src/components/register/set-company-goals/set-company-goals.component.html",
    "src/components/register/set-company-goals/set-company-goals.component.ts",

    // Create first project
    "src/components/register/create-first-project/create-first-project.component.html",
    "src/components/register/create-first-project/create-first-project.component.ts",

    // Create first attachments
    "src/components/register/create-first-attachments/create-first-attachments.component.html",
    "src/components/register/create-first-attachments/create-first-attachments.component.ts",

    // Set project goals
    "src/components/register/set-project-goals/set-project-goals.component.html",
    "src/components/register/set-project-goals/set-project-goals.component.ts",

    // ************** D A S H B O A R D ***************** \\

    "src/components/dashboard/dashboard.component.html",
    "src/components/dashboard/dashboard.component.ts",

    "src/components/dashboard/dashboard-home/dashboard-home.component.html",
    "src/components/dashboard/dashboard-home/dashboard-home.component.ts",

    "src/components/dashboard/project/project.component.html",
    "src/components/dashboard/project/project.component.ts",

    "src/components/dashboard/project/project-details/project-details.component.html",
    "src/components/dashboard/project/project-details/project-details.component.ts",

    "src/components/dashboard/project/tasks/tasks.component.html",
    "src/components/dashboard/project/tasks/tasks.component.ts",

    "src/components/dashboard/project/team/team.component.html",
    "src/components/dashboard/project/team/team.component.ts",

    "src/components/dashboard/project/tasks/create-new-task/create-new-task.component.html",
    "src/components/dashboard/project/tasks/create-new-task/create-new-task.component.ts",
    "src/components/dashboard/project/team/users-dialog.html",

    "src/components/dashboard/project/tasks/task/task.component.html",
    "src/components/dashboard/project/tasks/task/task.component.ts",
    "src/components/dashboard/project/tasks/task/task-dialog.html",

    // Requests
    "src/components/dashboard/project/requests/requests.component.html",
    "src/components/dashboard/project/requests/requests.component.ts",

    "src/components/dashboard/project/requests/inbound-requests/inbound-requests.component.html",
    "src/components/dashboard/project/requests/inbound-requests/inbound-requests.component.ts",

    "src/components/dashboard/project/requests/outbound-requests/outbound-requests.component.html",
    "src/components/dashboard/project/requests/outbound-requests/outbound-requests.component.ts",

    "src/components/dashboard/project/requests/all-requests/all-requests.component.html",
    "src/components/dashboard/project/requests/all-requests/all-requests.component.ts",

    // Resources
    "src/components/dashboard/project/resources/resources.component.html",
    "src/components/dashboard/project/resources/resources.component.ts",

    "src/components/dashboard/project/resources/all-resources/all-resources.component.html",
    "src/components/dashboard/project/resources/all-resources/all-resources.component.ts",

    "src/components/dashboard/project/resources/create-new-resource/create-new-resource.component.html",
    "src/components/dashboard/project/resources/create-new-resource/create-new-resource.component.ts",

    // Budget
    "src/components/dashboard/project/budget/budget.component.html",
    "src/components/dashboard/project/budget/budget.component.ts",

    // My Tasks
    "src/components/dashboard/my-tasks/my-tasks.component.html",
    "src/components/dashboard/my-tasks/my-tasks.component.ts",

    // Footer
    "src/components/footer/footer.component.html",
    "src/components/footer/footer.component.ts",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "1rem",
          lg: "20px",
        },
      },
    },
  },
  plugins: [],
};
