import jsonData from "../lib/postList.json" with {type: "json"}
import jsonUser from "../lib/userList.json" with {type: "json"}

export function filterPost(idPost, dbPath = jsonData) {

    const y = jsonData.find((i) => {
        if (i.id == idPost) {
            return i;
        }
    })
    return y
}

export function checkUserLogin(userName, password ,dbPath = jsonUser) {
    
    const y = jsonUser.find((i) => {
        if (i.userName === userName && i.password === password) {
            return true;
        }
        return false;
    })
    return y
}
