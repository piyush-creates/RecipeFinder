import SearchForm from "@/components/SearchForm";
import { JSX } from 'react';

export default function HomePage() {
    return (
        <>
            <h1 className="text-4xl  font-bold text-center bg-lime-200 text-white p-4">My Recipe Finder</h1>
            <SearchForm/>
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold">About</h2>
                <p>
                    My Recipe Finder is a web application that allows you to search for recipes by name.
                </p>
            </div>
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold text-center">Popular Recipes</h2>
                
            </div>
        </>
    )
}