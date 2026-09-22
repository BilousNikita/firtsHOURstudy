# Calculator Web App

This project is a simple web-based calculator that utilizes a Python backend to evaluate mathematical expressions. The application is built using Flask and provides a user-friendly interface for performing calculations.

## Project Structure

```
calculator-web-app
├── app
│   ├── __init__.py
│   ├── main.py
│   ├── routes.py
│   ├── services
│   │   └── calculator.py
│   └── templates
│       ├── base.html
│       └── index.html
├── static
│   ├── css
│   │   └── styles.css
│   └── js
│       └── app.js
├── requirements.txt
├── .gitignore
├── README.md
└── run.py
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd calculator-web-app
   ```

2. **Create a virtual environment:**
   ```
   python -m venv venv
   ```

3. **Activate the virtual environment:**
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```
     source venv/bin/activate
     ```

4. **Install the required dependencies:**
   ```
   pip install -r requirements.txt
   ```

## Usage

1. **Run the application:**
   ```
   python run.py
   ```

2. **Open your web browser and navigate to:**
   ```
   http://127.0.0.1:5000
   ```

3. **Use the calculator interface to perform calculations.**

## License

This project is licensed under the MIT License. See the LICENSE file for more details.