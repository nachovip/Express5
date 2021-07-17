const posts = [];

const newMessage = (msg)=> {
    posts.push(msg)
    return ('Mensaje almacenado')
}

const readMessages = ()=>{
    return //debería retornar todos los msjs
}
const readUserMessages = (name)=>{
    return //debería retornar los msjs de un usuario en part
}

module.exports = {
    newMessage
}