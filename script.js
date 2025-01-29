document.addEventListener('DOMContentLoaded', (event) => {
    // Simulate dynamic data updates
    setInterval(() => {
        const health = Math.floor(Math.random() * 100);
        const hunger = Math.floor(Math.random() * 100);
        const thirst = Math.floor(Math.random() * 100);
        const armor = Math.floor(Math.random() * 100);

        document.getElementById('health-bar').style.width = health + '%';
        document.getElementById('hunger-bar').style.width = hunger + '%';
        document.getElementById('thirst-bar').style.width = thirst + '%';
        document.getElementById('armor-bar').style.width = armor + '%';
    }, 1000);
});