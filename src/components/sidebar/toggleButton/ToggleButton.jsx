import React from "react";

const ToggleButton = ({ setOpen, isOpen }) => {
    return (
        <button
            onClick={() => setOpen((prev) => !prev)}
            className="fixed top-4 left-4 w-12 h-12 z-50 bg-white rounded-full shadow-md flex items-center justify-center"
        >
            <svg width="23" height="23" viewBox="0 0 23 23">
                {/* Top line */}
                <path
                    d={isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5"}
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                />

                {/* Middle line (hidden when open) */}
                <path
                    d="M 2 9.423 L 20 9.423"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{ opacity: isOpen ? 0 : 1 }}
                />

                {/* Bottom line */}
                <path
                    d={isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346"}
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
        </button>
    );
};

export default ToggleButton;
