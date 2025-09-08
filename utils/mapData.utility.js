import jsonData from "../lib/examplePost.json" with {type: "json"}


export function filterPost(idPost)
{
    jsonData.map((currentPost)=>{
        if(currentPost.id == 1)return currentPost
            return  "There is no post at the requested number.";
    })
}

console.log(filterPost(1,jsonData));
