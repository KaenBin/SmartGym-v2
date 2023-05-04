import client from "./client"
import axios from "axios"

const getSingle = async (name) => {
    try {
        return await client.get(`/MyExercise/${name}`).then((response) => { return response })
    } catch (error) {
        console.log('error while getting exercise', error)
    }
}

const getAll = async (token) => {
    try {
        return await client.get(`/exercises/${token}`).then((response) => { return response })
    } catch (error) {
        console.log('error while getting exercise', error)
    }
}

const addSingle = async (token, name) => {
    data = { "token": token, "name": name }
    try {
        return await client.post('/MyExercise/add-exercise', data).then((response) => { return response })
    } catch (error) {
        console.log('error while getting exercise', error)
    }
}

const removeSingle = async (token, name) => {
    data = { "token": token, "name": name }
    try {
        return await client.delete('/MyExercise/delete-exercise', { data: data }).then((response) => { return response })
    } catch (error) {
        console.log('error while getting exercise', error)
    }
}

const replaceAll = async (token, lst) => {
    data = { "token": token, "lst": lst }
    try {
        return await client.delete('/MyExercise/replace-exercise', { data: data }).then((response) => { return response })
    } catch (error) {
        console.log('error while getting exercise', error)
    }
}

const postKey = async (name, value) => {        
    const data = {
        "datum": {
            "value": value
        }
    }
    const headers = {
        "Content-Type": "application/json",
        "X-AIO-Key": "aio_mKcR93jLlECIF13b6cxYovxo08IU"
    }

    try {
        return await axios.post(`https://io.adafruit.com/api/v2/DangLe1311/feeds/${name}/data`, data, {
            headers: headers
        })
            .then((response) => { return response })
    } catch (error) {
        console.log('error while getting exercise', error)
    }
}

export default { getAll, getSingle, addSingle, removeSingle, replaceAll, postKey }
