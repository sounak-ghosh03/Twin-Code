const { GoogleGenerativeAI } = require('@google/generative-ai');

if (!process.env.GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY environment variable is required');
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyzeCode = async (code, language) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  
  const prompt = `You are a patient programming tutor helping beginners learn to code.

Analyze this code and provide:
1. **Step-by-Step Explanation**: Break down what each part does in simple terms
2. **Bug Detection**: Identify any errors or potential issues
3. **Improvements**: Suggest better practices and optimizations
4. **Learning Points**: Highlight key concepts demonstrated

Code Language: ${language}
Code:
${code}

Format your response in clear sections using markdown.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    throw new Error('Failed to analyze code: ' + error.message);
  }
};

const chatAboutCode = async (message, context) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  
  const prompt = `You are a patient programming tutor helping beginners learn to code.

Previous conversation context:
${context}

User question: ${message}

Provide a helpful, educational response that:
1. Answers the question clearly and simply
2. Provides relevant code examples if needed
3. Encourages learning and exploration

Format your response using markdown.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    throw new Error('Failed to process chat: ' + error.message);
  }
};

module.exports = {
  analyzeCode,
  chatAboutCode,
};