import axios from "axios";
import { useEffect, useState, useCallback } from "react";

// Comprehensive fallback language list
const FALLBACK_LANGUAGES = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "it", name: "Italian" },
  { code: "pt", name: "Portuguese" },
  { code: "ru", name: "Russian" },
  { code: "ja", name: "Japanese" },
  { code: "ko", name: "Korean" },
  { code: "zh", name: "Chinese" },
  { code: "ar", name: "Arabic" },
  { code: "hi", name: "Hindi" },
  { code: "nl", name: "Dutch" },
  { code: "pl", name: "Polish" },
  { code: "sv", name: "Swedish" },
  { code: "tr", name: "Turkish" },
  { code: "vi", name: "Vietnamese" },
  { code: "th", name: "Thai" }
];

/**
 * Main Translation Component
 * Uses MyMemory API as primary since Argos API is not accessible
 */
export default function TranslationApp() {
  // State management
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [languages, setLanguages] = useState(FALLBACK_LANGUAGES);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationError, setTranslationError] = useState(null);
  const [activeService, setActiveService] = useState("mymemory");

  /**
   * Initialize languages - using fallback since APIs are not accessible
   */
  useEffect(() => {
    setLanguages(FALLBACK_LANGUAGES);
    console.log("Using fallback language list");
  }, []);

  /**
   * Performs translation using MyMemory API (primary)
   */
  const translateWithMyMemory = useCallback(async (text, source, target) => {
    try {
      const response = await axios.get(
        "https://api.mymemory.translated.net/get",
        {
          params: {
            q: text,
            langpair: `${source}|${target}`,
            de: "translation.app@example.com"
          },
          timeout: 15000 // Increased timeout
        }
      );

      if (response.data?.responseData?.translatedText) {
        return response.data.responseData.translatedText;
      }
      throw new Error("No translation received");
    } catch (error) {
      console.error("MyMemory translation failed:", error);
      throw error;
    }
  }, []);

  /**
   * Alternative translation using Google Translate unofficial API
   */
  const translateWithGoogleAlternative = useCallback(async (text, source, target) => {
    try {
      // Using a simple Google Translate alternative
      const response = await axios.get(
        "https://translate.googleapis.com/translate_a/single",
        {
          params: {
            client: "gtx",
            sl: source,
            tl: target,
            dt: "t",
            q: text
          },
          timeout: 10000
        }
      );

      if (response.data && response.data[0] && response.data[0][0] && response.data[0][0][0]) {
        return response.data[0][0][0];
      }
      throw new Error("No translation received");
    } catch (error) {
      console.error("Google alternative translation failed:", error);
      throw error;
    }
  }, []);

  /**
   * Simple mock translation for emergency fallback
   */
  const mockTranslation = useCallback((text, source, target) => {
    // Simple language code to name mapping
    const languageNames = {
      en: "English",
      es: "Spanish",
      fr: "French",
      de: "German",
      it: "Italian",
      pt: "Portuguese",
      ru: "Russian",
      ja: "Japanese",
      ko: "Korean",
      zh: "Chinese",
      ar: "Arabic",
      hi: "Hindi"
    };

    const sourceName = languageNames[source] || source;
    const targetName = languageNames[target] || target;
    
    return `[Mock Translation from ${sourceName} to ${targetName}]: ${text}`;
  }, []);

  /**
   * Main translation handler - only triggered by button click
   */
  const handleTranslate = useCallback(async () => {
    if (!inputText.trim()) {
      setTranslationError("Please enter text to translate");
      return;
    }

    setIsTranslating(true);
    setTranslationError(null);
    const textToTranslate = inputText.trim();

    try {
      let translatedText;
      
      // Try MyMemory API first
      try {
        translatedText = await translateWithMyMemory(textToTranslate, sourceLang, targetLang);
        setActiveService("mymemory");
      } catch (myMemoryError) {
        console.log("MyMemory failed, trying alternative...");
        
        // Try Google alternative
        try {
          translatedText = await translateWithGoogleAlternative(textToTranslate, sourceLang, targetLang);
          setActiveService("google");
        } catch (googleError) {
          console.log("All APIs failed, using mock translation");
          
          // Use mock translation as last resort
          translatedText = mockTranslation(textToTranslate, sourceLang, targetLang);
          setActiveService("mock");
          setTranslationError("Using mock translation - external services unavailable");
        }
      }

      setOutputText(translatedText);
    } catch (error) {
      setTranslationError("Translation failed. Please try again.");
      setOutputText("");
    } finally {
      setIsTranslating(false);
    }
  }, [inputText, sourceLang, targetLang, translateWithMyMemory, translateWithGoogleAlternative, mockTranslation]);

  /**
   * Swaps source and target languages
   */
  const swapLanguages = useCallback(() => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    
    if (inputText && outputText) {
      setInputText(outputText);
      setOutputText(inputText);
    }
  }, [sourceLang, targetLang, inputText, outputText]);

  /**
   * Copies translation result to clipboard
   */
  const copyToClipboard = useCallback(async () => {
    if (!outputText) return;
    
    try {
      await navigator.clipboard.writeText(outputText);
      // Simple alert for feedback
      alert("Translation copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      setTranslationError("Failed to copy to clipboard");
    }
  }, [outputText]);

  /**
   * Clears all input and output fields
   */
  const clearAll = useCallback(() => {
    setInputText("");
    setOutputText("");
    setTranslationError(null);
  }, []);

  /**
   * Handles input text changes
   */
  const handleInputChange = useCallback((e) => {
    setInputText(e.target.value);
    // Clear any previous errors when user starts typing
    if (translationError) {
      setTranslationError(null);
    }
  }, [translationError]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Language Translator
          </h1>
          <p className="text-slate-600">
            Translate text between {languages.length} languages
          </p>
        </header>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          {/* Language Selection */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 p-5 bg-slate-50 rounded-lg">
            <div className="w-full md:flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                From Language
              </label>
              <select
                value={sourceLang}
                onChange={(e) => setSourceLang(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              >
                {languages.map((lang) => (
                  <option key={`src-${lang.code}`} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <button
              onClick={swapLanguages}
              className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors self-center"
              aria-label="Swap languages"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>

            <div className="w-full md:flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                To Language
              </label>
              <select
                value={targetLang}
                onChange={(e) => setTargetLang(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              >
                {languages.map((lang) => (
                  <option key={`tgt-${lang.code}`} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Translation Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Input Section */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-slate-700">
                  Input Text
                </label>
                <span className="text-xs text-slate-500">
                  {inputText.length} characters
                </span>
              </div>
              <textarea
                className="w-full h-64 p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter text to translate..."
                disabled={isTranslating}
              />
            </div>

            {/* Output Section */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-slate-700">
                  Translated Text
                </label>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500">
                    {outputText.length} characters
                  </span>
                  {outputText && (
                    <button
                      onClick={copyToClipboard}
                      className="text-xs text-blue-600 hover:text-blue-800 transition px-2 py-1 bg-blue-50 rounded"
                    >
                      Copy
                    </button>
                  )}
                </div>
              </div>
              <div className="relative">
                <textarea
                  className="w-full h-64 p-4 border border-slate-300 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  value={outputText}
                  readOnly
                  placeholder="Translation will appear here..."
                />
                {isTranslating && (
                  <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center rounded-lg">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                      <p className="mt-2 text-sm text-slate-600">Translating...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Error Display */}
          {translationError && (
            <div className="mb-6 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-700 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {translationError}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={handleTranslate}
              disabled={isTranslating || !inputText.trim()}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[180px] shadow-md hover:shadow-lg"
            >
              {isTranslating ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Translating...
                </span>
              ) : (
                "Translate"
              )}
            </button>
            <button
              onClick={clearAll}
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors shadow hover:shadow-md"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-slate-500 mt-8">
          <p className="mb-2">
            Translation powered by {activeService === "mymemory" ? "MyMemory API" : 
                                  activeService === "google" ? "Google Translate" : "Mock Translation"}
          </p>
          <p className="text-xs">
            Note: Some translation services may be temporarily unavailable
          </p>
        </div>
      </div>
    </div>
  );
}