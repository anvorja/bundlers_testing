export function greet(name: string): string {
  return `Hola ${name}, esto es una prueba de empaquetamiento 👋`;
}

// Clase compleja con métodos estáticos y de instancia
export class Calculator {
  private static readonly MAX_OPERATIONS = 1000;
  private history: number[] = [];

  static calculatePercentage(value: number, total: number): number {
    return (value / total) * 100;
  }

  add(a: number, b: number): number {
    const result = a + b;
    this.updateHistory(result);
    return result;
  }

  private updateHistory(result: number): void {
    if (this.history.length >= Calculator.MAX_OPERATIONS) {
      this.history.shift();
    }
    this.history.push(result);
  }

  getHistory(): number[] {
    return [...this.history];
  }
}

// Función asíncrona compleja
export async function fetchData(url: string): Promise<any> {
  const simulateDelay = (ms: number) => 
    new Promise(resolve => setTimeout(resolve, ms));

  await simulateDelay(200);
  
  return {
    url,
    data: {
      users: [
        { id: 1, name: 'Alice', role: 'admin' },
        { id: 2, name: 'Bob', role: 'user' }
      ],
      timestamp: new Date().toISOString()
    }
  };
}

// Generadores y iteradores
export function* numberGenerator(limit: number): Generator<number> {
  for (let i = 0; i < limit; i++) {
    yield Math.random() * 100;
  }
}

// Manejo de errores avanzado
export class CustomError extends Error {
  constructor(
    message: string,
    public code: number,
    public context?: any
  ) {
    super(message);
    this.name = 'CustomError';
  }
}

