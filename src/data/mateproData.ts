// MatePro App Data - Educational Math Content for 7th Grade Students

export interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  description: string;
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctOption: number;
  feedback: string;
  explanation: string;
}

export interface Problem {
  id: string;
  question: string;
  correctAnswer: string;
  feedback: string;
  hint: string;
}

export const lessons: Lesson[] = [
  {
    id: "lesson1",
    title: "Introducción a las Fracciones",
    videoUrl: "https://www.youtube.com/watch?v=kYyDc0XRUeg",
    description: "Aprende qué son las fracciones y cómo representarlas visualmente"
  },
  {
    id: "lesson2", 
    title: "Suma y Resta de Fracciones",
    videoUrl: "https://www.youtube.com/watch?v=qJtoI1ipxs8",
    description: "Domina las operaciones básicas con fracciones"
  },
  {
    id: "lesson3",
    title: "Multiplicación de Fracciones",
    videoUrl: "https://www.youtube.com/watch?v=VDTZG1aHiHc",
    description: "Aprende a multiplicar fracciones paso a paso"
  },
  {
    id: "lesson4",
    title: "División de Fracciones",
    videoUrl: "https://www.youtube.com/watch?v=4Q2lLy3pzrI",
    description: "Descubre el secreto de dividir fracciones"
  },
  {
    id: "lesson5",
    title: "Fracciones Equivalentes",
    videoUrl: "https://www.youtube.com/watch?v=osePKL39EBo",
    description: "Identifica y crea fracciones que representan lo mismo"
  }
];

export const quizzes: Quiz[] = [
  {
    id: "quiz1",
    question: "¿Qué fracción representa la mitad de un entero?",
    options: ["1/3", "1/2", "2/1", "1/4"],
    correctOption: 1,
    feedback: "¡Correcto! 1/2 representa exactamente la mitad",
    explanation: "La fracción 1/2 significa 1 parte de 2 partes iguales, que es la mitad"
  },
  {
    id: "quiz2",
    question: "¿Cuál es el resultado de 1/4 + 2/4?",
    options: ["3/8", "3/4", "1/2", "2/4"],
    correctOption: 1,
    feedback: "¡Excelente! 1/4 + 2/4 = 3/4",
    explanation: "Al sumar fracciones con el mismo denominador, sumas los numeradores: 1+2=3, entonces 3/4"
  },
  {
    id: "quiz3", 
    question: "¿Cuál es el resultado de 1/2 × 2/3?",
    options: ["2/6", "1/3", "3/2", "2/3"],
    correctOption: 1,
    feedback: "¡Perfecto! 1/2 × 2/3 = 2/6 = 1/3",
    explanation: "Multiplicas numerador por numerador y denominador por denominador: (1×2)/(2×3) = 2/6 = 1/3"
  },
  {
    id: "quiz4",
    question: "¿Cuál fracción es equivalente a 2/4?",
    options: ["1/2", "4/2", "2/8", "3/6"],
    correctOption: 0,
    feedback: "¡Genial! 2/4 = 1/2 son equivalentes",
    explanation: "Ambas fracciones representan la mitad: 2÷2 = 1 y 4÷2 = 2, entonces 2/4 = 1/2"
  },
  {
    id: "quiz5",
    question: "¿Cuál es el resultado de 3/4 ÷ 1/2?",
    options: ["3/8", "6/4", "3/2", "1/2"],
    correctOption: 2,
    feedback: "¡Increíble! 3/4 ÷ 1/2 = 3/2",
    explanation: "Para dividir fracciones, multiplicas por el recíproco: 3/4 × 2/1 = 6/4 = 3/2"
  }
];

export const problems: Problem[] = [
  {
    id: "problem1",
    question: "Si tienes una pizza dividida en 8 partes iguales y comes 3 partes, ¿qué fracción de la pizza comiste?",
    correctAnswer: "3/8",
    feedback: "¡Correcto! Comiste 3 partes de 8, que se escribe como 3/8",
    hint: "Piensa: ¿cuántas partes comiste? ¿de cuántas partes en total?"
  },
  {
    id: "problem2", 
    question: "Calcula: 2/5 + 1/5 (escribe tu respuesta como fracción)",
    correctAnswer: "3/5",
    feedback: "¡Excelente! 2/5 + 1/5 = 3/5",
    hint: "Cuando los denominadores son iguales, solo sumas los numeradores"
  },
  {
    id: "problem3",
    question: "¿Cuánto es 1/3 de 12? (escribe solo el número)",
    correctAnswer: "4",
    feedback: "¡Perfecto! 1/3 de 12 = 4",
    hint: "Para encontrar una fracción de un número, multiplica: 1/3 × 12"
  },
  {
    id: "problem4",
    question: "Simplifica la fracción 6/9 a su forma más simple",
    correctAnswer: "2/3", 
    feedback: "¡Genial! 6/9 simplificado es 2/3",
    hint: "Encuentra el máximo común divisor de 6 y 9, que es 3"
  },
  {
    id: "problem5",
    question: "Si 3/4 de una clase de 20 estudiantes aprobó el examen, ¿cuántos estudiantes aprobaron?",
    correctAnswer: "15",
    feedback: "¡Correcto! 3/4 de 20 = 15 estudiantes aprobaron",
    hint: "Calcula: (3/4) × 20 = ?"
  }
];

export const motivationalTips: string[] = [
  "¡No te rindas, vas por buen camino! 🌟",
  "Intenta otra estrategia para resolverlo 🤔",
  "Recuerda repasar tus apuntes 📚", 
  "¡Cada error es una oportunidad de aprender! 💡",
  "¡Estás haciendo un gran progreso! 🚀",
  "La práctica hace al maestro 🏆",
  "¡Tú puedes hacerlo! 💪",
  "Las matemáticas son como un juego, ¡diviértete! 🎮",
  "Paso a paso llegarás a la meta 🎯",
  "¡Eres más inteligente de lo que crees! 🧠"
];

// Progress Management
export interface Progress {
  lessons: string[];
  quizzes: string[];
  problems: string[];
}

export const getProgress = (): Progress => {
  const saved = localStorage.getItem('matepro-progress');
  if (saved) {
    return JSON.parse(saved);
  }
  return { lessons: [], quizzes: [], problems: [] };
};

export const saveProgress = (progress: Progress): void => {
  localStorage.setItem('matepro-progress', JSON.stringify(progress));
};

export const markAsCompleted = (type: keyof Progress, id: string): void => {
  const progress = getProgress();
  if (!progress[type].includes(id)) {
    progress[type].push(id);
    saveProgress(progress);
  }
};

export const isCompleted = (type: keyof Progress, id: string): boolean => {
  const progress = getProgress();
  return progress[type].includes(id);
};