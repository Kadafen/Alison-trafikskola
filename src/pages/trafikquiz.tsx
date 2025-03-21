import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, T } from '@/contexts/LanguageContext';
import { QuizQuestion, getRandomQuestions, QuizCategory, getQuestionsByCategory } from '@/data/quiz-questions';
import Seo from '@/components/shared/Seo';

// Quiz status types
type QuizStatus = 'intro' | 'in-progress' | 'completed';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.05,
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

const TrafficQuiz: React.FC = () => {
  const { translateImmediate } = useLanguage();
  const [status, setStatus] = useState<QuizStatus>('intro');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<QuizCategory | 'all'>('all');
  const [questionCount, setQuestionCount] = useState(5);
  
  // Set up questions based on filters
  useEffect(() => {
    if (status === 'intro') {
      const newQuestions = categoryFilter === 'all' 
        ? getRandomQuestions(questionCount) 
        : getRandomQuestions(questionCount, categoryFilter);
      setQuestions(newQuestions);
    }
  }, [categoryFilter, questionCount, status]);
  
  // Start the quiz
  const startQuiz = () => {
    setStatus('in-progress');
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore(0);
    setUserAnswers([]);
  };
  
  // Select an answer
  const selectAnswer = (answerIndex: number) => {
    if (showAnswer) return; // Prevent changing answer after submission
    setSelectedAnswer(answerIndex);
  };
  
  // Submit the answer
  const submitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    
    // Save user's answer
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(newUserAnswers);
    
    setShowAnswer(true);
  };
  
  // Move to the next question or complete the quiz
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      setStatus('completed');
    }
  };
  
  // Restart the quiz
  const restartQuiz = () => {
    setStatus('intro');
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore(0);
    setUserAnswers([]);
  };
  
  const handleQuestionCountChange = (count: number) => {
    setQuestionCount(count);
  };
  
  const handleCategoryChange = (category: QuizCategory | 'all') => {
    setCategoryFilter(category);
  };
  
  // Get current question
  const currentQuestion = questions[currentQuestionIndex];
  
  return (
    <>
      <Seo
        title={translateImmediate("Trafikquiz")} 
        description={translateImmediate("Testa dina kunskaper om trafikregler, vägmärken och trafiksituationer med vårt interaktiva trafikquiz. Perfekt för att förbereda dig inför teoriprovet!")}
      />

      <section className="py-12 px-4 md:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Quiz header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4"><T>Trafikquiz</T></h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              <T>Testa dina kunskaper om trafikregler, vägmärken och trafiksituationer med vårt interaktiva trafikquiz. Perfekt för att förbereda dig inför teoriprovet!</T>
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <AnimatePresence mode="wait">
              {/* Quiz intro screen */}
              {status === 'intro' && (
                <motion.div
                  key="intro"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={containerVariants}
                  className="p-6 md:p-8"
                >
                  <motion.div variants={itemVariants}>
                    <h2 className="text-2xl font-bold mb-6"><T>Välkommen till trafikquizet!</T></h2>
                    <p className="mb-6 text-gray-600"><T>Förbättra dina trafikkunskaper med vårt quiz. Välj antal frågor och kategori för att börja.</T></p>
                    
                    <div className="mb-8">
                      <h3 className="font-semibold mb-3"><T>Inställningar</T></h3>
                      
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1"><T>Antal frågor</T></label>
                        <div className="flex gap-2 flex-wrap">
                          {[5, 8, 10, 12].map(count => (
                            <button
                              key={count}
                              className={`px-4 py-2 rounded-full text-sm ${
                                questionCount === count
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                              } transition-colors`}
                              onClick={() => handleQuestionCountChange(count)}
                            >
                              {count}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1"><T>Kategori</T></label>
                        <div className="flex gap-2 flex-wrap">
                          <button
                            className={`px-4 py-2 rounded-full text-sm ${
                              categoryFilter === 'all'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            } transition-colors`}
                            onClick={() => handleCategoryChange('all')}
                          >
                            <T>Alla</T>
                          </button>
                          <button
                            className={`px-4 py-2 rounded-full text-sm ${
                              categoryFilter === 'signs'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            } transition-colors`}
                            onClick={() => handleCategoryChange('signs')}
                          >
                            <T>Vägmärken</T>
                          </button>
                          <button
                            className={`px-4 py-2 rounded-full text-sm ${
                              categoryFilter === 'rules'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            } transition-colors`}
                            onClick={() => handleCategoryChange('rules')}
                          >
                            <T>Trafikregler</T>
                          </button>
                          <button
                            className={`px-4 py-2 rounded-full text-sm ${
                              categoryFilter === 'situations'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            } transition-colors`}
                            onClick={() => handleCategoryChange('situations')}
                          >
                            <T>Trafiksituationer</T>
                          </button>
                          <button
                            className={`px-4 py-2 rounded-full text-sm ${
                              categoryFilter === 'safety'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            } transition-colors`}
                            onClick={() => handleCategoryChange('safety')}
                          >
                            <T>Trafiksäkerhet</T>
                          </button>
                          <button
                            className={`px-4 py-2 rounded-full text-sm ${
                              categoryFilter === 'environment'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            } transition-colors`}
                            onClick={() => handleCategoryChange('environment')}
                          >
                            <T>Miljö & Ekonomi</T>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <button
                        onClick={startQuiz}
                        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <T>Starta quiz</T>
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
              
              {/* Quiz in progress screen */}
              {status === 'in-progress' && currentQuestion && (
                <motion.div
                  key="quiz"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={containerVariants}
                  className="p-6 md:p-8"
                >
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-sm font-semibold text-gray-500">
                      <T>Fråga</T> {currentQuestionIndex + 1} / {questions.length}
                    </div>
                    <div className="text-sm font-semibold text-gray-500">
                      <T>Poäng</T>: {score}
                    </div>
                  </div>
                  
                  <motion.div variants={itemVariants} className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">{currentQuestion.question}</h2>
                    
                    {currentQuestion.image && (
                      <div className="mb-4 relative rounded-lg overflow-hidden h-48 md:h-64">
                        <Image
                          src={currentQuestion.image}
                          alt={currentQuestion.question}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    
                    <div className="space-y-3">
                      {currentQuestion.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => selectAnswer(index)}
                          className={`w-full text-left p-3 rounded-lg transition-colors ${
                            selectedAnswer === index
                              ? showAnswer
                                ? index === currentQuestion.correctAnswer
                                  ? 'bg-green-100 border-2 border-green-500 text-green-800'
                                  : 'bg-red-100 border-2 border-red-500 text-red-800'
                                : 'bg-blue-100 border-2 border-blue-500 text-blue-800'
                              : showAnswer && index === currentQuestion.correctAnswer
                                ? 'bg-green-100 border-2 border-green-500 text-green-800'
                                : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                          }`}
                          disabled={showAnswer}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                  
                  {showAnswer && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-gray-50 border rounded-lg mb-6"
                    >
                      <h3 className="font-semibold mb-2"><T>Förklaring</T></h3>
                      <p className="text-gray-700">{currentQuestion.explanation}</p>
                    </motion.div>
                  )}
                  
                  <div className="flex justify-end">
                    {!showAnswer ? (
                      <button
                        onClick={submitAnswer}
                        disabled={selectedAnswer === null}
                        className={`px-6 py-2 rounded-lg font-medium ${
                          selectedAnswer === null
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-blue-600 text-white hover:bg-blue-700 transition-colors'
                        } transition-colors`}
                      >
                        <T>Svara</T>
                      </button>
                    ) : (
                      <button
                        onClick={nextQuestion}
                        className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        {currentQuestionIndex < questions.length - 1 
                          ? <T>Nästa fråga</T> 
                          : <T>Avsluta quiz</T>
                        }
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
              
              {/* Quiz completed screen */}
              {status === 'completed' && (
                <motion.div
                  key="completed"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={containerVariants}
                  className="p-6 md:p-8"
                >
                  <motion.div variants={itemVariants}>
                    <h2 className="text-2xl font-bold mb-4"><T>Resultat</T></h2>
                    
                    <div className="mb-6">
                      <div className="text-center py-6 px-4 bg-gray-50 rounded-lg">
                        <p className="text-lg text-gray-600 mb-2"><T>Din poäng</T></p>
                        <div className="text-4xl font-bold text-blue-600 mb-2">
                          {score} / {questions.length}
                        </div>
                        <p className="text-lg text-gray-600">
                          {(score / questions.length) >= 0.8 
                            ? <T>Mycket bra!</T> 
                            : (score / questions.length) >= 0.6 
                              ? <T>Bra!</T> 
                              : <T>Du behöver öva mer</T>
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="font-semibold mb-4"><T>Sammanfattning</T></h3>
                      <div className="space-y-4">
                        {questions.map((question, index) => (
                          <div
                            key={index}
                            className="border rounded-lg overflow-hidden bg-white"
                          >
                            <div className="p-4">
                              <div className="flex items-start">
                                <div className="flex-shrink-0 mt-0.5">
                                  <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                                    userAnswers[index] === question.correctAnswer
                                      ? 'bg-green-100 text-green-600'
                                      : 'bg-red-100 text-red-600'
                                  }`}>
                                    {userAnswers[index] === question.correctAnswer 
                                      ? '✓' 
                                      : '✕'
                                    }
                                  </div>
                                </div>
                                <div className="ml-3 flex-1">
                                  <div className="flex items-center justify-between">
                                    <h4 className="font-medium text-gray-900">
                                      {index + 1}. {question.question}
                                    </h4>
                                    <p className={`text-sm font-medium px-2 py-0.5 rounded ${
                                      userAnswers[index] === question.correctAnswer
                                        ? 'bg-green-100 text-green-600'
                                        : 'bg-red-100 text-red-600'
                                    }`}>
                                      {userAnswers[index] === question.correctAnswer 
                                        ? <T>Rätt</T> 
                                        : <T>Fel</T>
                                      }
                                    </p>
                                  </div>
                                  
                                  <div className="ml-9">
                                    <p className="text-gray-600 text-sm mb-1">
                                      <strong><T>Ditt svar</T>:</strong> {question.options[userAnswers[index]]}
                                    </p>
                                    {userAnswers[index] !== question.correctAnswer && (
                                      <p className="text-gray-600 text-sm mb-1">
                                        <strong><T>Rätt svar</T>:</strong> {question.options[question.correctAnswer]}
                                      </p>
                                    )}
                                    <p className="text-gray-600 text-sm mt-2">
                                      <strong><T>Förklaring</T>:</strong> {question.explanation}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={restartQuiz}
                        className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <T>Försök igen</T>
                      </button>
                      <a 
                        href="/kontakt"
                        className="px-6 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-center"
                      >
                        <T>Kontakta oss</T>
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrafficQuiz; 