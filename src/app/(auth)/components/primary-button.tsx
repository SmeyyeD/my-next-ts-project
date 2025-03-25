import React from 'react'

type ButtonProps = {
    variant?: "primary" | "secondary",
    label: string,
    onClick?: () => void
}

function PrimaryButton({ variant = "primary", label, onClick }: ButtonProps) {
    return (
        <div>
            <button
                className={`w-[500px] my-1 px-4 py-2 font-semibold ${variant === "primary"
                    ? "bg-[#EF6B4A] text-white hover:bg-[#D95A3C]"
                    : " text-[#6251DD] bg-white border border-[#6251DD] "
                    }`}
                onClick={onClick}
            >
                {label}
            </button>

        </div>


    );
}

export default PrimaryButton