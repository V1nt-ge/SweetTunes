import React from 'react';

function Animals() {

    const animalContent = [
        {
            id : 1,
            title : "Majestic Predators of the Wilderness",
            content : "Discover the awe-inspiring predators that rule the untamed wilderness. From the stealthy panther stalking its prey to the powerful grizzly bear reigning supreme in its domain, these majestic creatures are the epitome of strength and grace. Learn about their hunting strategies, territorial behaviors, and the vital role they play in maintaining the delicate balance of ecosystems around the globe."
        },

        {
            id : 2,
            title : "Glimpses into the Secret Lives of Marine Creatures",
            content : "Dive into the depths of the ocean and uncover the mysteries of marine life. From the playful dolphins frolicking in the waves to the enigmatic giant squid lurking in the abyss, the ocean is home to an astonishing diversity of creatures. Explore the intricate social structures of pods, schools, and colonies, and marvel at the breathtaking beauty of coral reefs teeming with life."
        },

        {
            id : 3,
            title : "Adaptations in the Animal Kingdom",
            content : "Witness the incredible adaptations that allow animals to thrive in diverse habitats. From the camouflaged chameleons blending seamlessly into their surroundings to the migratory birds traversing continents in search of food and shelter, adaptation is the key to survival in a constantly changing world. Explore the remarkable ways in which animals have evolved to overcome challenges and exploit unique niches in their environments."
        },
    ]

    return (
        <div>
           <h1>Exploring the Untamed World: A Journey into the Lives of Animals</h1> 
           <p>Embark on a wild adventure as we delve into the fascinating world of animals. From the depths of the Amazon rainforest to the vast savannas of Africa, our planet is teeming with an astonishing array of creatures, each with its own unique story to tell. Join us as we uncover the mysteries of the animal kingdom, from the majestic lions prowling the grasslands to the tiny insects bustling beneath our feet. Prepare to be enthralled by tales of survival, cooperation, and the intricate balance of life in the natural world.</p>
           {animalContent.map(post => (
                <div key={post.id} className="bg-gray-100 p-4 m-4">
                <p className="font-semibold mb-1">{post.title}</p>
                <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Animals