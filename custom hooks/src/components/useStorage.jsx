import { useEffect, useState } from 'react';


function saveValue(key,initialValue){
  const save = JSON.parse(localStorage.getItem(key));
  const saveSession = JSON.parse(sessionStorage.getItem(key));

  if(save){
    return save;
  }

  if(saveSession){
    return saveSession;
  }

  else{
    return initialValue;
  }
}

export default function useLocalStorage(key,initialValue) {
  
  const [content, setContent] = useState(()=>{
    return saveValue(key,initialValue);
  })

  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(content))
    sessionStorage.setItem(key,JSON.stringify(content))
  },[key,content])

  return (
    [content,setContent]
  )
}