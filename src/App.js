import { useState } from "react";
import { MyContext } from "./MyContext";
import MainContainer from "./components/MainContainer";

function App() {
  const [isItemBoxVisible, setIsItemBoxVisible] = useState(false);
  const [nameLists, setNameLists] = useState([
    "Jonty kamble",
    "Nayan kamble",
    "Suyog kamble",
    "Abhilash kamble",
    "Ram dafale",
    "Aishwarya kamble",
    "Isha bisandre"
  ]);
  const [chipLists, setChipLists] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <MyContext.Provider
      value={{
        isItemBoxVisible,
        setIsItemBoxVisible,
        nameLists,
        setNameLists,
        chipLists,
        setChipLists,
        inputValue,
        setInputValue,
      }}
    >
      <div className="flex flex-col items-center my-[10%]">
        <MainContainer />
      </div>
    </MyContext.Provider>
  );
}

export default App;
