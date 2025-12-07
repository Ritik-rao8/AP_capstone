import React from 'react'

export default function Pagination({currentPage,totalPages,onPageChange}){
    return (
        <div className="flex items-center justify-center gap-4 mt-8">
            <button 
                onClick={()=>onPageChange(currentPage-1)}
                disabled={currentPage===1}
                className="px-6 py-2 text-sm bg-[#0f0f0f] border border-[#333333] text-gray-300 rounded-lg hover:border-[#f7b731] hover:text-[#f7b731] transition disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[#333333] disabled:hover:text-gray-300"
            >
                Prev
            </button>
            
            <span className="text-white text-sm font-medium">
                Page <span className="text-[#f7b731]">{currentPage}</span> of {totalPages}
            </span>
            
            <button 
                onClick={()=>onPageChange(currentPage+1)}
                disabled={currentPage===totalPages}
                className="px-6 py-2 text-sm bg-[#0f0f0f] border border-[#333333] text-gray-300 rounded-lg hover:border-[#f7b731] hover:text-[#f7b731] transition disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[#333333] disabled:hover:text-gray-300"
            >
                Next
            </button>
        </div>
    )
}
