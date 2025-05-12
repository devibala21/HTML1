// Sample student credentials
const validStudents = [
    { id: 'student1', password: 'password123' },
    { id: 'student2', password: 'mypassword' }
];

function login() {
    const studentId = document.getElementById('studentId').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (!studentId || !password) {
        errorMessage.textContent = "Please fill all fields.";
        return false;
    }

    const student = validStudents.find(s => s.id === studentId && s.password === password);

    if (student) {
        alert(`Welcome ${studentId}!`);
        errorMessage.textContent = "";
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        errorMessage.textContent = "Invalid ID or password!";
    }

    return false;
}
