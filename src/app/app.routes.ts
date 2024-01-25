import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginInformationComponent } from '../components/register/login-information/login-information.component';
import { PersonalInformationComponent } from '../components/register/personal-information/personal-information.component';
import { CompanyDetailsComponent } from '../components/register/company-details/company-details.component';
import { CreateFirstTeamworkComponent } from '../components/register/create-first-teamwork/create-first-teamwork.component';
import { SetCompanyGoalsComponent } from '../components/register/set-company-goals/set-company-goals.component';
import { CreateFirstProjectComponent } from '../components/register/create-first-project/create-first-project.component';
import { CreateFirstAttachmentsComponent } from '../components/register/create-first-attachments/create-first-attachments.component';
import { SetProjectGoalsComponent } from '../components/register/set-project-goals/set-project-goals.component';
import { LoginComponent } from '../components/login/login.component';
import { EmailComponent } from '../components/login/email/email.component';
import { PasswordComponent } from '../components/login/password/password.component';
import { CompleteRegisterationComponent } from '../components/login/complete-registeration/complete-registeration.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { DashboardHomeComponent } from '../components/dashboard/dashboard-home/dashboard-home.component';
import { CreateNewProjectComponent } from '../components/dashboard/projects/create-new-project/create-new-project.component';
import { CreateProjectDocumentsComponent } from '../components/dashboard/projects/create-project-documents/create-project-documents.component';
import { CreateProjectGoalsComponent } from '../components/dashboard/projects/create-project-goals/create-project-goals.component';
import { ProjectComponent } from '../components/dashboard/project/project.component';
import { TasksComponent } from '../components/dashboard/project/tasks/tasks.component';
import { ProjectDetailsComponent } from '../components/dashboard/project/project-details/project-details.component';
import { RequestsComponent } from '../components/dashboard/project/requests/requests.component';
import { ResourcesComponent } from '../components/dashboard/project/resources/resources.component';
import { TeamComponent } from '../components/dashboard/project/team/team.component';
import { BudgetComponent } from '../components/dashboard/project/budget/budget.component';
import { PlansComponent } from '../components/dashboard/project/plans/plans.component';
import { CreateNewTaskComponent } from '../components/dashboard/project/tasks/create-new-task/create-new-task.component';
import { TaskComponent } from '../components/dashboard/project/tasks/task/task.component';
import { InboundRequestsComponent } from '../components/dashboard/project/requests/inbound-requests/inbound-requests.component';
import { OutboundRequestsComponent } from '../components/dashboard/project/requests/outbound-requests/outbound-requests.component';
import { AllRequestsComponent } from '../components/dashboard/project/requests/all-requests/all-requests.component';
import { CreateNewResourceComponent } from '../components/dashboard/project/resources/create-new-resource/create-new-resource.component';
import { AllResourcesComponent } from '../components/dashboard/project/resources/all-resources/all-resources.component';
import { MyTasksComponent } from '../components/dashboard/my-tasks/my-tasks.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', redirectTo: 'login-information', pathMatch: 'full' },
      { path: 'login-information', component: LoginInformationComponent },
      { path: 'personal-information', component: PersonalInformationComponent },
      { path: 'company-details', component: CompanyDetailsComponent },
      { path: 'set-company-goals', component: SetCompanyGoalsComponent },
      {
        path: 'create-first-teamwork',
        component: CreateFirstTeamworkComponent,
      },
      { path: 'create-first-project', component: CreateFirstProjectComponent },
      {
        path: 'create-first-attachments',
        component: CreateFirstAttachmentsComponent,
      },
      { path: 'set-project-goals', component: SetProjectGoalsComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', redirectTo: 'email', pathMatch: 'full' },
      { path: 'email', component: EmailComponent },
      { path: 'password', component: PasswordComponent },
      {
        path: 'complete-registeration',
        component: CompleteRegisterationComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: DashboardHomeComponent },
      { path: 'my-tasks', component: MyTasksComponent },
      { path: 'create-new-project', component: CreateNewProjectComponent },
      {
        path: 'create-project-documents',
        component: CreateProjectDocumentsComponent,
      },
      { path: 'create-project-goals', component: CreateProjectGoalsComponent },
      {
        path: 'project',
        component: ProjectComponent,
        pathMatch: 'prefix',
        children: [
          { path: '', redirectTo: 'project-details', pathMatch: 'full' },
          { path: 'project-details', component: ProjectDetailsComponent },
          { path: 'tasks', component: TasksComponent },
          { path: 'task', component: TaskComponent },
          { path: 'create-new-task', component: CreateNewTaskComponent },
          {
            path: 'requests',
            component: RequestsComponent,
            pathMatch: 'prefix',
            children: [
              { path: '', redirectTo: 'inbound-requests', pathMatch: 'full' },
              { path: 'inbound-requests', component: InboundRequestsComponent },
              {
                path: 'outbound-requests',
                component: OutboundRequestsComponent,
              },
              { path: 'all-requests', component: AllRequestsComponent },
            ],
          },
          {
            path: 'resources',
            component: ResourcesComponent,
            pathMatch: 'prefix',
            children: [
              {
                path: '',
                pathMatch: 'full',
                redirectTo: 'all-resources',
              },
              { path: 'all-resources', component: AllResourcesComponent },
              {
                path: 'create-new-resource',
                component: CreateNewResourceComponent,
              },
            ],
          },
          { path: 'team', component: TeamComponent },
          { path: 'budget', component: BudgetComponent },
          { path: 'plans', component: PlansComponent },
        ],
      },
    ],
  },
];
