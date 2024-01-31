import React, { useState } from 'react';
import axios from 'axios';

const CreateForm = () => {
    const [surveyTitle, setSurveyTitle] = useState('');
    const [questions, setQuestions] = useState([{ text: '', options: [''] }]);

    const handleQuestionTextChange = (index, value) => {
        const newQuestions = [...questions];
        newQuestions[index].text = value;
        setQuestions(newQuestions);
    };

    const handleOptionChange = (questionIndex, optionIndex, value) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options[optionIndex] = value;
        setQuestions(newQuestions);
    };

    const addQuestion = () => {
        setQuestions([...questions, { text: '', options: [''] }]);
    };

    const addOption = (questionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options = [...newQuestions[questionIndex].options, ''];
        setQuestions(newQuestions);
    };

    const removeQuestion = (index) => {
        const newQuestions = [...questions];
        newQuestions.splice(index, 1);
        setQuestions(newQuestions);
    };

    const removeOption = (questionIndex, optionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options.splice(optionIndex, 1);
        setQuestions(newQuestions);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Envoyer une requête POST à l'API Laravel
            const response = await axios.post('http://localhost:8000/api/sondage/create', {
                title: surveyTitle,
                questions: questions,
            });

            // Gérer la réponse, rediriger ou afficher un message de succès
            console.log('Sondage créé avec succès:', response.data);
        } catch (error) {
            // Gérer les erreurs, afficher un message d'erreur, etc.
            console.error('Erreur lors de la création du sondage:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col bg-white rounded shadow-2xl p-14 mt-4 rounded-2xl pt-0 mt-0 bg-gradient-to-r from-blue-400 to-blue-200">
            <h2 className="mt-0 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Créez Votre Sondage
            </h2>

            <label className="font-semibold text-base text-black text-left" htmlFor="surveyTitleField">
                Titre du sondage:
            </label>
            <input
                className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 text-black text-sm border border-blue-300 w-full"
                type="text"
                value={surveyTitle}
                onChange={(e) => setSurveyTitle(e.target.value)}
            />

            {questions.map((question, questionIndex) => (
                <div key={questionIndex}>
                    <textarea
                        id={`questionTextField-${questionIndex}`}
                        value={question.text}
                        onChange={(e) => handleQuestionTextChange(questionIndex, e.target.value)}
                        className="flex items-center h-20 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 text-black border border-blue-300 w-full"
                        placeholder={`Texte de la Question ${questionIndex + 1}`}
                    />

                    {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center mt-2">
                            <input
                                type="text"
                                value={option}
                                onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                                className="flex items-center h-12 px-4 w-full bg-gray-200 rounded focus:outline-none focus:ring-2 text-black text-sm border border-blue-300"
                                placeholder={`Option ${optionIndex + 1}`}
                            />
                            {question.options.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeOption(questionIndex, optionIndex)}
                                    className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Supprimer
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addOption(questionIndex)}
                        className="mt-2 bg-green-500 text-white px-2 py-1 rounded"
                    >
                        Ajouter une option
                    </button>

                    {questions.length > 1 && (
                        <button
                            type="button"
                            onClick={() => removeQuestion(questionIndex)}
                            className="mt-2 bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Supprimer la Question
                        </button>
                    )}
                </div>
            ))}

            <button
                type="button"
                onClick={addQuestion}
                className="mt-2 bg-green-500 text-white px-2 py-1 rounded"
            >
                Ajouter une Question
            </button>

            <button
                type="submit"
                className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 mb-0 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700 w-full"
            >
                Créer le sondage
            </button>
        </form>
    );
};

export default CreateForm;
