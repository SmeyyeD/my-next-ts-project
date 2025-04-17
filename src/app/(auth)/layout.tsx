import React from 'react';

type Props = { children: React.ReactNode };

function Layout({ children }: Props) {
  return (
    <div className="grid grid-cols-2 min-h-screen">
    
      <div className="fixed left-0 top-0 w-1/2 h-full">
        <img 
          src="/Picture.png" 
          alt="Login Görseli" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="col-start-2 flex justify-center items-center h-screen py-10">
        {children}
      </div>
    </div>
  );
}

export default Layout;