import React from 'react';
import { ArrowLeft, BookOpen, Target, Users, Star } from 'lucide-react';

interface InfoScreenProps {
  onBack: () => void;
}

const InfoScreen: React.FC<InfoScreenProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-primary-light to-background">
      {/* Header */}
      <div className="flex items-center p-4 bg-primary text-primary-foreground">
        <button
          onClick={onBack}
          className="p-2 hover:bg-primary-dark rounded-lg transition-colors mr-3"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">Información</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* App Description */}
        <div className="matepro-card">
          <div className="flex items-center mb-3">
            <Target className="text-primary mr-3" size={24} />
            <h2 className="text-xl font-bold text-primary-dark">¿Qué es MatePro?</h2>
          </div>
          <p className="text-foreground leading-relaxed">
            MatePro es tu aplicación favorita para aprender matemáticas de forma divertida y efectiva. 
            Diseñada especialmente para estudiantes de 7mo grado, te ayudamos a dominar las fracciones 
            y otros conceptos matemáticos fundamentales.
          </p>
        </div>

        {/* Features */}
        <div className="matepro-card">
          <div className="flex items-center mb-4">
            <Star className="text-warning mr-3" size={24} />
            <h3 className="text-lg font-bold text-primary-dark">Características</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-primary-dark">Lecciones en Video</h4>
                <p className="text-muted-foreground text-sm">Aprende con videos explicativos claros y fáciles de seguir</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-primary-dark">Quizzes Interactivos</h4>
                <p className="text-muted-foreground text-sm">Pon a prueba tus conocimientos con preguntas divertidas</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-primary-dark">Problemas Prácticos</h4>
                <p className="text-muted-foreground text-sm">Resuelve problemas del mundo real para aplicar lo aprendido</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-primary-dark">Seguimiento de Progreso</h4>
                <p className="text-muted-foreground text-sm">Ve tu progreso y celebra cada logro alcanzado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="matepro-card">
          <div className="flex items-center mb-3">
            <Users className="text-success mr-3" size={24} />
            <h3 className="text-lg font-bold text-primary-dark">¿Para quién es MatePro?</h3>
          </div>
          <p className="text-foreground leading-relaxed">
            MatePro está diseñado para estudiantes de 7mo grado que quieren mejorar sus habilidades matemáticas. 
            Es perfecto para aquellos que han perdido un poco el interés en las matemáticas y buscan una forma 
            más divertida y motivadora de aprender.
          </p>
        </div>

        {/* Learning Method */}
        <div className="matepro-card">
          <div className="flex items-center mb-3">
            <BookOpen className="text-primary mr-3" size={24} />
            <h3 className="text-lg font-bold text-primary-dark">Nuestro Método</h3>
          </div>
          <p className="text-foreground leading-relaxed mb-3">
            Creemos que aprender matemáticas debe ser una experiencia positiva. Por eso:
          </p>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
              Explicamos conceptos paso a paso
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
              Proporcionamos retroalimentación inmediata
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
              Celebramos cada pequeño logro
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
              Te motivamos a seguir adelante
            </li>
          </ul>
        </div>

        {/* Encouraging Message */}
        <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground p-6 rounded-lg text-center">
          <h3 className="text-lg font-bold mb-2">¡Estás listo para comenzar!</h3>
          <p className="text-sm opacity-90">
            Las matemáticas son más fáciles cuando las entiendes. ¡Vamos a descubrir juntos lo increíbles que pueden ser!
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoScreen;