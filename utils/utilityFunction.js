import { writeFile } from 'fs/promises';
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

export function checkUserLogin(userName, password, dbPath = jsonUser) {

    const y = jsonUser.find((i) => {
        if (i.userName === userName && i.password === password) {
            return true;
        }
        return false;
    })
    return y
}

export async function newPost(templitPost, dbPath = jsonData) {
    const jsonString = JSON.stringify(dbPath, null, 2)
    try {
        await writeFile(templitPost, jsonString);
        console.log('successfully written a new Post');
    } catch (error) {
        console.error('Error writing:', error);
    }
}

export async function newUser(templitUser, dbPath = pathJsonUser) {

    console.log(templitUser);
    console.log(dbPath);
        try {
        await writeFile(dbPath ,JSON.stringify(templitUser));
        console.log('successfully written a new User');
    } catch (error) {
        console.error('Error writing:', error);
    }
}
