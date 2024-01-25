import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  // Create Company
  createCompany(data: any) {
    return this.http.post(`${environment.apiUrl}/api/company`, data);
  }
  getCompany(id: string | null) {
    return this.http.get(`${environment.apiUrl}/api/company/${id}`);
  }
  addEmployee(data: any) {
    return this.http.post(`${environment.apiUrl}/api/pending-user`, data);
  }
  addCompanyGoal(data: any) {
    return this.http.post(`${environment.apiUrl}/api/company-goals`, data);
  }

  // Users
  getCompanyUsers(company_id: string | null) {
    return this.http.get(
      `${environment.apiUrl}/api/company-users/${company_id}`
    );
  }
  getUserTasks(user_id: string | null) {
    return this.http.get(`${environment.apiUrl}/api/user-tasks/${user_id}`);
  }

  // Projects
  createProject(data: any) {
    return this.http.post(`${environment.apiUrl}/api/project`, data);
  }
  getProjects(company_id: string | null) {
    return this.http.get(
      `${environment.apiUrl}/api/company-projects/${company_id}`
    );
  }
  getProject(project_id: string | null) {
    return this.http.get(`${environment.apiUrl}/api/project/${project_id}`);
  }
  getProjectDocuments(project_id: string) {
    return this.http.get(
      `${environment.apiUrl}/api/project-documents/${project_id}`
    );
  }
  storeProjectDocuments(data: any) {
    return this.http.post(`${environment.apiUrl}/api/project-document`, data);
  }
  addProjectGoal(data: any) {
    return this.http.post(`${environment.apiUrl}/api/project-goal`, data);
  }
  storeProjectUser(data: any, project_id: any) {
    return this.http.post(
      `${environment.apiUrl}/api/project-user/${project_id}`,
      data
    );
  }
  getProjectUser(project_id: string | null) {
    return this.http.get(
      `${environment.apiUrl}/api/project-user/${project_id}`
    );
  }

  // Tasks
  createTask(data: any) {
    return this.http.post(`${environment.apiUrl}/api/task`, data);
  }
  getTasks(project_id: string | null) {
    return this.http.get(
      `${environment.apiUrl}/api/project-tasks/${project_id}`
    );
  }
  getTask(task_id: string | null) {
    return this.http.get(`${environment.apiUrl}/api/task/${task_id}`);
  }
  getTaskDocuments(task_id: string) {
    return this.http.get(`${environment.apiUrl}/api/task-documents/${task_id}`);
  }
  storeTaskDocuments(data: any) {
    return this.http.post(`${environment.apiUrl}/api/task-document`, data);
  }
  getTaskGoals(task_id: string | null) {
    return this.http.get(`${environment.apiUrl}/api/task-goals/${task_id}`);
  }
  addTaskGoal(data: any) {
    return this.http.post(`${environment.apiUrl}/api/task-goal`, data);
  }
  storeTaskUser(data: any, task_id: any) {
    return this.http.post(
      `${environment.apiUrl}/api/task-user/${task_id}`,
      data
    );
  }
  getTaskUser(task_id: string | null) {
    return this.http.get(`${environment.apiUrl}/api/task-user/${task_id}`);
  }

  // Requests
  getProjectRequests(project_id: string | null) {
    return this.http.get(`${environment.apiUrl}/api/request/${project_id}`);
  }
  sendRequest(data: any) {
    return this.http.post(`${environment.apiUrl}/api/request`, data);
  }
  getInboundRequest(userID: string | null, data: any) {
    return this.http.post(
      `${environment.apiUrl}/api/in-request/${userID}`,
      data
    );
  }
  getOutboundRequest(userID: string | null, data: any) {
    return this.http.post(
      `${environment.apiUrl}/api/out-request/${userID}`,
      data
    );
  }

  // Resources
  getResources(project_id: string | null) {
    return this.http.get(`${environment.apiUrl}/api/resources/${project_id}`);
  }

  createResource(data: any) {
    return this.http.post(`${environment.apiUrl}/api/resources`, data);
  }

  // Budget
  getTasksChartData(project_id: string | null) {
    return this.http.get(
      `${environment.apiUrl}/api/tasks-chart-data/${project_id}`
    );
  }

  getResourcesChartData(project_id: string | null) {
    return this.http.get(
      `${environment.apiUrl}/api/resources-chart-data/${project_id}`
    );
  }
}
