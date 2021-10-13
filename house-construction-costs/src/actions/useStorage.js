import { React, useState, useCallback, useEffect } from "react";

export const useSessionStorage=(key, defaultValu)=>{
    return useStorage(key, defaultValu, window.sessionStorage)
}

function useStorage(key, defaultValu, storageObject){
    const [value, setValue] = useState(()=>{
        const jsonValue = storageObject.getItem(key)
        if(jsonValue !=null) return JSON.parse(jsonValue)
        if(typeof initialValue === "function"){
            return defaultValu()
        } else{
            return defaultValu
        }
    })


useEffect(()=>{
    if(value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value))
}, [key, value, storageObject])

const remove = useCallback(
    () => {
        setValue(undefined)
    },
    [])
return [value, setValue, remove]
}