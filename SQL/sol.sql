SELECT Project.project_name, COUNT(Employee.employee_id) AS employee_count
FROM Project
LEFT JOIN Employee
ON Project.project_id = Employee.project_id
GROUP BY Project.project_name
ORDER BY Project.project_name ASC;
