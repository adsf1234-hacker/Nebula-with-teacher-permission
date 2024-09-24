document.getElementById('teacherLoginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const password = document.getElementById('teacherPassword').value;
    try {
        const response = await axios.post('/login', { password });
        if (response.data.success) {
            localStorage.setItem('teacherCode', response.data.code);
            window.location.href = '/student-login';
        } else {
            alert('Invalid password');
        }
    } catch (error) {
        console.error(error);
        alert('Login failed');
    }
});
