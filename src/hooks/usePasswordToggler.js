// ./src/hooks/usePasswordToggler.js 
import {useState} from 'react'; 
export const usePasswordToggler = () => { 
  const [passwordVisibility, setPasswordVisibility] = useState(true); 
  const [type, setType] = useState('password'); 
  const handlePasswordVisibility = () => { 
    if (type === 'password') { 
      setType('text'); 
      setPasswordVisibility(!passwordVisibility); 
    } else if (type === 'text') { 
      setType('password'); 
      setPasswordVisibility(!passwordVisibility); 
    } 
  }; 
  return { 
    type, 
    passwordVisibility, 
    handlePasswordVisibility 
  }; 
}; 