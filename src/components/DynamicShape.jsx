import { useState, useEffect } from 'react';

const DynamicShape = ({ children }) => {
  const [shape, setShape] = useState('bubble');
  const [animation, setAnimation] = useState('none');

  const shapes = [
    'bubble',
    'circle',
    'blob',
    'wave',
    'polygon',
    'organic'
  ];

  const animations = [
    'none',
    'morph',
    'rotate',
    'float'
  ];

  useEffect(() => {
    // Generate random shape and animation on component mount
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    setShape(randomShape);
    setAnimation(randomAnimation);
  }, []);

  const getShapeClasses = () => {
    switch (shape) {
      case 'bubble':
        return 'rounded-full';
      case 'circle':
        return 'rounded-full';
      case 'blob':
        return 'rounded-[60px]';
      case 'wave':
        return 'rounded-[40px_60px_60px_40px]';
      case 'polygon':
        return 'rounded-[30px_50px_70px_30px]';
      case 'organic':
        return 'rounded-[50px_30px_70px_40px]';
      default:
        return 'rounded-full';
    }
  };

  const getGradientClasses = () => {
    const gradients = [
      'from-primary-400 to-primary-600',
      'from-primary-500 to-primary-700',
      'from-primary-300 to-primary-500',
      'from-purple-400 to-purple-600',
      'from-violet-400 to-violet-600',
      'from-indigo-400 to-indigo-600'
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  const getAnimationClasses = () => {
    switch (animation) {
      case 'morph':
        return 'shape-morph';
      case 'rotate':
        return 'shape-rotate';
      case 'float':
        return 'float-animation';
      default:
        return '';
    }
  };

  return (
    <div className={`relative w-80 h-80 md:w-96 md:h-96 ${getShapeClasses()} bg-gradient-to-br ${getGradientClasses()} p-1 shadow-2xl transform hover:rotate-3 transition-all duration-300 ease-out ${getAnimationClasses()}`}>
      <div className="w-full h-full bg-white dark:bg-secondary-800 rounded-full overflow-hidden">
        {children}
      </div>
      {/* Floating bubbles with different animations */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-300 rounded-full opacity-60 floating-bubble"></div>
      <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary-400 rounded-full opacity-40 pulse-gentle"></div>
      <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary-500 rounded-full opacity-50 animate-ping"></div>
      <div className="absolute top-1/4 -left-4 w-3 h-3 bg-primary-600 rounded-full opacity-30 floating-bubble" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 -right-2 w-5 h-5 bg-primary-200 rounded-full opacity-40 pulse-gentle" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default DynamicShape;
