// Import React and the NewItem component
import React from 'react';
import NewItem from './new-item'; 

const Page = () => {
    // The Page component now simply renders the NewItem component within a structured layout
    return (
        <main className="flex justify-center w-full min-h-screen" style={{ backgroundColor: 'black' }}> {/* Inline style for background color */}
            <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"> {/* Adjusted for centering and styling */}
                <h1 className="text-xl font-bold text-center mb-4">Add New Item</h1>
                <NewItem />
            </div>
        </main>
    );
};

export default Page;
