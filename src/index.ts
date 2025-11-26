import { greet, Calculator, fetchData, numberGenerator, CustomError } from "./utils";
import { PI, factorial, fibonacci, Vector3 } from "./math";
import { ApiClient } from "./api";
import data from "./data.json";

// Uso básico existente
console.log(greet("Andresito"));
console.log("Data loaded:", data);

// Pruebas complejas agregadas
const calc = new Calculator();
console.log("Suma:", calc.add(15, 25));
console.log("Porcentaje:", Calculator.calculatePercentage(25, 100));

// Uso de funciones matemáticas
console.log("PI:", PI);
console.log("Factorial de 5:", factorial(5));
console.log("Fibonacci de 10:", fibonacci(10));

const vec1 = new Vector3(1, 2, 3);
const vec2 = new Vector3(4, 5, 6);
console.log("Magnitud vector:", vec1.magnitude());
console.log("Producto punto:", vec1.dot(vec2));

// Generadores
const gen = numberGenerator(5);
console.log("Números generados:", [...gen]);

// Simulación API
async function testApi() {
  try {
    const apiData = await fetchData("https://api.ejemplo.com/data");
    console.log("Datos API simulados:", apiData);

    const client = new ApiClient("https://jsonplaceholder.typicode.com");
    const response = await client.get("/todos/1");
    console.log("Todo:", response.data);
  } catch (error) {
    const customError = new CustomError("API Error", 500, { url: "/test" });
    console.error("Error:", customError);
  }
}

testApi();

// Manejo de módulos dinámicos
import("./math").then(mathModule => {
  console.log("Carga dinámica:", mathModule.fibonacci(8));
});

