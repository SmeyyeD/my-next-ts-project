import React from 'react';

type ButtonProps = {
    variant?: 'primary' | 'secondary';
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset'; // type prop'unu ekledik
};

function PrimaryButton({ variant = 'primary', label, onClick, type = 'button' }: ButtonProps) {
    return (
        <div className="w-full flex flex-col items-end mb-10">
            <button
                type={type} // type prop'unu burada kullanıyoruz
                className={`w-full px-4 py-2 mb-3 font-semibold rounded-md transition-all duration-300 ${variant === 'primary'
                        ? 'bg-[#EF6B4A] text-white hover:bg-[#D95A3C]'
                        : 'text-[#6251DD] bg-white border border-[#6251DD] hover:bg-[#f1f1ff]'
                    }`}
                onClick={onClick}
            >
                {label}
            </button>
        </div>
    );
}

export default PrimaryButton;