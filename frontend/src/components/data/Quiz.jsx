// Question Types
// 1. MCQs | Multiple Choice | single

export const quiz = {
    topic: 'Javascript',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [

        {
            question: 'Which function is used to serialize an object into a JSON string in Javascript?',
            choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'stringify()',
        },
        {
            question: 'Which method returns the character at a specified index in a string?',
            choices: ['charAt()', 'charCodeAt()', 'indexOf()', 'slice()'],
            type: 'MCQs',
            correctAnswer: 'charAt()',
        },
        {
            question: 'What does NaN stand for?',
            choices: ['Not-a-Number', 'Not-a-Node', 'Node-a-Number', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'Not-a-Number',
        },
        {
            question: 'Which of the following is a JavaScript framework?',
            choices: ['Django', 'Flask', 'Angular', 'Laravel'],
            type: 'MCQs',
            correctAnswer: 'Angular',
        },
        {
            question: 'How can you add a comment in JavaScript?',
            choices: ['<!-- This is a comment -->', '// This is a comment', '# This is a comment', '/* This is a comment */'],
            type: 'MCQs',
            correctAnswer: '// This is a comment',
        },
        {
            question: 'Which operator is used to assign a value to a variable?',
            choices: ['=', '==', '===', ':'],
            type: 'MCQs',
            correctAnswer: '=',
        },
        {
            question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
            choices: ['<script href="xxx.js">', '<script name="xxx.js">', '<script src="xxx.js">', '<script file="xxx.js">'],
            type: 'MCQs',
            correctAnswer: '<script src="xxx.js">',
        },
        {
            question: 'How do you declare a JavaScript variable?',
            choices: ['var carName;', 'variable carName;', 'v carName;', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'var carName;',
        },
        {
            question: 'What is the output of 2 + 3 + "7"?',
            choices: ['57', '23', '10', 'None of the above'],
            type: 'MCQs',
            correctAnswer: '57',
        },
        {
            question: 'What does the "this" keyword refer to in JavaScript?',
            choices: ['The current object', 'The previous object', 'The next object', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'The current object',
        },
        {
            question: 'What is the purpose of the "bind()" method?',
            choices: ['To create a new function', 'To bind an event', 'To create a new object', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'To create a new function',
        },
        {
            question: 'What is the correct way to write an array in JavaScript?',
            choices: ['var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = "red", "green", "blue"', 'var colors = ["red", "green", "blue"]', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'],
            type: 'MCQs',
            correctAnswer: 'var colors = ["red", "green", "blue"]',
        },
        {
            question: 'What will the following code return: Boolean(10 > 9)?',
            choices: ['false', 'true', 'undefined', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'true',
        },
        {
            question: 'Which of the following is not a reserved word in JavaScript?',
            choices: ['interface', 'throws', 'program', 'short'],
            type: 'MCQs',
            correctAnswer: 'program',
        },
        {
            question: 'How do you find the number with the highest value of x and y?',
            choices: ['ceil(x, y)', 'Math.ceil(x, y)', 'Math.max(x, y)', 'top(x, y)'],
            type: 'MCQs',
            correctAnswer: 'Math.max(x, y)',
        },
        {
            question: 'How does a for loop start?',
            choices: ['for (i = 0; i <= 5)', 'for i = 1 to 5', 'for (i <= 5; i++)', 'for (i = 0; i <= 5; i++)'],
            type: 'MCQs',
            correctAnswer: 'for (i = 0; i <= 5; i++)',
        },
        {
            question: 'Which of the following is a correct JavaScript variable declaration?',
            choices: ['var 2name;', 'let name2;', 'const *name;', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'let name2;',
        },
        {
            question: 'What does the "push()" method do?',
            choices: ['Removes the last element of an array', 'Adds a new element to the beginning of an array', 'Adds a new element to the end of an array', 'Removes the first element of an array'],
            type: 'MCQs',
            correctAnswer: 'Adds a new element to the end of an array',
        },
        {
            question: 'What is a closure in JavaScript?',
            choices: ['A function that is a closure', 'A function having access to the parent scope', 'A function with no arguments', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'A function having access to the parent scope',
        },
        {
            question: 'Which method converts JSON data to a JavaScript object?',
            choices: ['JSON.stringify()', 'JSON.parse()', 'JSON.convert()', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'JSON.parse()',
        },
        {
            question: 'Which company developed JavaScript?',
            choices: ['Netscape', 'Microsoft', 'Sun Microsystems', 'Oracle'],
            type: 'MCQs',
            correctAnswer: 'Netscape',
        },
        {
            question: 'What is the use of the "typeof" operator?',
            choices: ['To determine the data type of a variable', 'To create a new variable', 'To find the length of a string', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'To determine the data type of a variable',
        },
        {
            question: 'Which symbol is used for comments in JavaScript?',
            choices: ['//', '#', '<!-- -->', '*'],
            type: 'MCQs',
            correctAnswer: '//',
        },
        {
            question: 'What will the code "console.log(typeof NaN);" output?',
            choices: ['number', 'string', 'object', 'undefined'],
            type: 'MCQs',
            correctAnswer: 'number',
        },
        {
            question: 'How can you get the total number of arguments passed to a function?',
            choices: ['arguments.length', 'arguments.size', 'arguments.count', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'arguments.length',
        },
    ],
}