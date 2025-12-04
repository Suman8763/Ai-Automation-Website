import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className, children, noPadding = false }) => {
  return (
    <section 
      id={id} 
      className={`relative w-full overflow-hidden ${noPadding ? '' : 'py-20 md:py-32'} px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className || ''}`}
    >
      {children}
    </section>
  );
};

export default Section;