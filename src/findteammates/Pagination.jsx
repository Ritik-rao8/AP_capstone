import React from 'react'

export default function Pagination({currentPage,totalPages,onPageChange}){
    return (
        <div className="flex items-center justify-center gap-4 mt-8">
            <button 
                onClick={()=>onPageChange(currentPage-1)}
                disabled={currentPage===1}
                className="px-4 py-2 text-sm border border-gray-700 text-gray-300 rounded hover:border-[#f7b731] hover:text-[#f7b731] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Prev
            </button>
            
            <span className="text-gray-400 text-sm">
                Page {currentPage} of {totalPages}
            </span>
            
            <button 
                onClick={()=>onPageChange(currentPage+1)}
                disabled={currentPage===totalPages}
                className="px-4 py-2 text-sm border border-gray-700 text-gray-300 rounded hover:border-[#f7b731] hover:text-[#f7b731] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </div>
    )
}
