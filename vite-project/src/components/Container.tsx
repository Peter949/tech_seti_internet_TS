import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className='bg-gray-200 md:bg-amber-200 lg:bg-amber-500 w-[90%] h-[calc(100vh-300px)] m-auto mt-[100px] rounded-2xl shadow'>
      {children}
    </div>
  );
};