import React from "react";
import { useTheme } from "./ThemeContext";


function Post() {
    const blogposts = [
        {
            id: 1,
            title: 'The Enigmatic Orchid: Unraveling Its Mysteries',
            content: "Discover the secrets behind its exquisite blooms, from their intricate patterns to their diverse colors. Unravel the mysteries of orchid care, from choosing the right variety to mastering the art of watering and fertilizing. Join us on a journey through the fascinating history and cultural significance of orchids, from ancient civilizations to modern-day botanical enthusiasts. Whether you're a seasoned orchid aficionado or a curious beginner, this edition promises to illuminate the hidden wonders of these extraordinary plants."

        },
        
        {
            id: 2,
            title: 'The Silent Stalkers',
            content: "Perhaps your Ficus is secretly documenting your every move, its leaves whispering tales of burnt toast and questionable fashion choices to a vast network of houseplants across the globe. Maybe that Monstera deliciosa isn't so delicious after all, and it harbors a cunning plan to take over your living room, one fallen leaf at a time."

        },

        {
            id: 3,
            title: 'The Photosynthetic Party Animals',
            content: "Maybe your plants throw wild photosynthesis parties at night when you're sound asleep. They crank up the chlorophyll production, strobe the moonlight with bioluminescent orchids, and gossip about the latest drama in the venus flytrap community."

        },

        {
            id: 4,
            title: 'The Stoic Observers',
            content: "Or maybe the truth is far less exciting. Perhaps your houseplants are simply stoic observers of the human condition, silently judging your messy desk and questionable dance moves. They provide a calming presence, a reminder of the slow and steady rhythm of nature, all while making a snarky internal commentary."

        },

        {
            id: 5,
            title: 'Plant Whisperer Training',
            content: "So, what's the real story?  Here's a fun experiment: For the next week, talk to your plants! Share your hopes and dreams, your deepest secrets. Maybe you'll unlock the secrets of their language, or maybe they'll just reward your efforts with lusher growth (or perhaps a silent judging intensifies)."

        }
    ]
    const { isDarkMode, toggleTheme } = useTheme();
    
    

    return ( 
        <>
            <h1 className="text-4xl font-semibold leading-9 text-center text-4xl text-blue-500 font-poppins">The Secret Life of Houseplants (They Might Be Judging You)</h1>
            <p className="bg-gray-100 p-4 m-4 max-w-lg mx-auto bg-gradient-to-r from-blue-400 to-indigo-500 p-6 rounded-lg shadow-md text-white mb-6">Have you ever stopped to consider the inner lives of your houseplants? Those leafy companions gracing your windowsills and bookshelves might seem content with a bit of water and sunlight, but what if there's more to the story?</p>
            {blogposts.map(post => (
                <div key={post.id} className="bg-gray-100 p-4 m-4">
                <p className="font-semibold mb-1">{post.title}</p>
                <p>{post.content}</p>
                </div>
            ))}
                <button onClick={toggleTheme}>
                    {isDarkMode ? 'Click me to go light' : 'Click me to go dark'}
                </button>
        </>
     );
}

export default Post;