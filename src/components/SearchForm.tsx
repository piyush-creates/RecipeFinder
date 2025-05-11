'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'



export default function SearchForm() {
    const [query, setQuery] = useState('')
    const router = useRouter()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(query)
        if(query.trim()){
            router.push(`/search?q=${encodeURIComponent(query)}`)
        }
    }

    return (
        <form 
            onSubmit={handleSearch}
            className="flex items-center justify-center gap-2 mt-4"
        >
            <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a Recipe"
                className="border-2 border-gray-300 rounded-md pl-2 pr-8 py-1"
            />
            <button type="submit" className="bg-green-500 text-white px-4 py-1 rounded-md">
                Search
            </button>
        </form>
    )
}