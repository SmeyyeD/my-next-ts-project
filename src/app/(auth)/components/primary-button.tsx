import React from 'react'

type ButtonProps = {
    variant?: "primary" | "secondary",
    label: string,
    onClick?: () => void
}

function PrimaryButton({ variant = "primary", label, onClick }: ButtonProps) {
    return (
        <div className="w-full flex flex-col items-end mb-10">
            <button
                className={`w-full px-4 py-2 mb-3 font-semibold rounded-md transition-all duration-300 ${variant === "primary"
                        ? "bg-[#EF6B4A] text-white hover:bg-[#D95A3C]"
                        : "text-[#6251DD] bg-white border border-[#6251DD] hover:bg-[#f1f1ff]"
                    }`}
                onClick={onClick}
            >
                {label}
            </button>
        </div>


    );
}

export default PrimaryButton