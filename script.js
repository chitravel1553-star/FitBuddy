* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f4f7f6;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

.container {
    background: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    max-width: 500px;
    width: 100%;
}

h1 {
    color: #2c3e50;
    margin-bottom: 8px;
    text-align: center;
}

p {
    color: #7f8c8d;
    text-align: center;
    margin-bottom: 24px;
}

.input-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    color: #34495e;
    font-weight: 600;
}

input, select {
    width: 100%;
    padding: 10px;
    border: 1px solid #bdc3c7;
    border-radius: 6px;
    font-size: 16px;
}

button {
    width: 100%;
    padding: 12px;
    background-color: #27ae60;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
}

button:hover {
    background-color: #219150;
}

.hidden {
    display: none;
}

#output-container {
    margin-top: 25px;
    padding: 15px;
    background-color: #e8f8f5;
    border-left: 5px solid #27ae60;
    border-radius: 4px;
}

#output-container h2 {
    font-size: 18px;
    color: #16a085;
    margin-bottom: 10px;
}
