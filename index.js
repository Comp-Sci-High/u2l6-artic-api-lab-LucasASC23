// Task 1
// Define a function called getDogArtworks that makes the API call to the request URL you defined in the worksheet (to get 3 dog artworks)
// Make sure to console log all 3 titles (after you get the data retrieve the nested values) 
const requestURL="https://api.artic.edu/api/v1/artworks/search?=dog&limit=31"


async function fetchData(requestUrl){
    const response= await fetch(requestUrl)
    const data=await response.json()
    let i=0
    while(i<3){

        console.log(data.data[i].title)
        i++
    }

}

// Call the function and confirm it worked correctly
fetchData(requestUrl)

// Task 2
// Define another function called searchArtworks that takes in a search query and a size limit
// You can use the function above and modify it to make the API call with the function parameters instead
// You will need to use string concatenation to build the request URL
// Now when the function it's called it should only return artwork the specified # of artworks based on the inputed search query
// Make sure to console log the values. 

async function searchArtworks(query,size){
    let requestUrl=
   

}



// Call the new function with the user inputs and confirm it worked correctly 
// Test with anything you'd like like 5 "cats" or 2 "flowers"

