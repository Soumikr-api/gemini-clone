import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();   

const ContextProvider = ({ children }) => {

  const [input, setInput] = useState("");
  const [recentPrompts, setRecentPrompts] = useState([]);
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {

    setResultData("");
    setShowResults(true);
    setLoading(true);
    setRecentPrompts(input);
    setPreviousPrompt(prev=> [input, ...prev]);
    const response = await runChat(input);
    let responceArray = response.split("**");
    let newResponce = "";
    for(let i = 0; i < responceArray.length; i++){
      if(i===0 || i%0!==1){
        newResponce+=responceArray[i];
      }
      else{
        newResponce+=`<b>${responceArray[i]}</b>`;
      }
    }
    let newResponce2 = newResponce.split("*").join("</br>");
    let newResponceArray = newResponce2.split("");
    for(let i = 0; i < newResponceArray.length; i++){
      if(newResponceArray[i]==="\n"){
        newResponceArray[i]="</br>";
      }
    }
    setResultData(responceArray);
    setResultData(response);
    setLoading(false);
    setInput("");
    // setPreviousPrompt(input);
  };

  const contextValue = {
    previousPrompt,
    setPreviousPrompt,
    onSent,
    recentPrompts,
    setRecentPrompts,
    showResults,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;