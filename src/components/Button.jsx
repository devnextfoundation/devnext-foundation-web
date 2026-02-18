import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-brand-navy text-white hover:bg-opacity-90 active:scale-95',
        secondary: 'bg-[#0B223D] text-white hover:bg-opacity-90 active:scale-95',
        outline: 'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white active:scale-95',
        ghost: 'text-brand-navy hover:bg-gray-100',
        white: 'bg-white text-brand-navy hover:bg-gray-100 active:scale-95',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
