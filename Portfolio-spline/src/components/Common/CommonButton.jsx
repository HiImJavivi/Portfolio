import React from 'react'

function CommonButton({ children, ...props }) {
    return (
        <button className="bg-blue-500 px-5 py-2 rounded-sm mt-2 hover:scale-105 hover:bg-purple-400 transition-all duration-500" {...props} >
            {children}
        </button>
    )
}

export default CommonButton