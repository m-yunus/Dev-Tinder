// app/create-account/layout.tsx
import CreateAccountHeader from '@/Components/create-account/Header';
import Footer from '@/Components/layout/Footer';
import React from 'react';

const CreateAccountLayout = ({ children }) => {
  return (
    <>
     
  
       <main >{children}</main>
    
      </>
  
  );
};

export default CreateAccountLayout;
