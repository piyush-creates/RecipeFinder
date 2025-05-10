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
        <form onSubmit={handleSearch}>
            <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a Recipe"
                className="bg-red-500"
            />
            <button type="submit" className="bg-green-500">
                Search
            </button>
        </form>
    )
}