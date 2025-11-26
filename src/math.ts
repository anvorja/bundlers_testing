// Módulo con funciones matemáticas complejas
export const PI = 3.14159265359;

export function factorial(n: number): number {
  if (n < 0) throw new Error("Negative numbers not allowed");
  return n <= 1 ? 1 : n * factorial(n - 1);
}

export function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export class Vector3 {
  constructor(
    public x: number,
    public y: number,
    public z: number
  ) {}

  magnitude(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }

  dot(other: Vector3): number {
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }
}


