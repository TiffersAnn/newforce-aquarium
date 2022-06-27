/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            // image: img src=/image"
            image: "../image/blue.jpg",
            name: "Dory",
            species: "Blue tang",
            length: 3,
            location: "ocean",
            food: "plankton"

        },
              
        {
            image:  "../image/clown.jpg",
            name: "Stripey",
            species: "Zebra fish",
            length: 3,
            location: "ocean",
            food: "algae"
        },
    
        
        {
            image: "../image/gold.jfif",
            name: "Goldie",
            species: "Goldfish",
            length: 2,
            location: "pond",
            food: "worms"
        },
        {
            image: "../image/pinkFish.jfif",
            name: "Pinky",
            species: "Rainbow fish",
            length: 4,
            location: "river",
            food: "snails"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}