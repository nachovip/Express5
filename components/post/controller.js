const store = require('./store')

const newMessage = async ({ name, message }) => {
  if (!name || !message) {
    return res.status(400).send('Campos incompletos')
  } else {
    const date = new Date()
    const msg = {
      name,
      message,
      date
    }
    const response = await store.newMessage(msg)
    return response
  }
}

const readMessages = async () => {
  const response = await store.readMessages()
  return response
}
const readUserMessages = async (name) => {
  const response = await store.readMessages(name)
  return response
}

module.exports = {
  newMessage,
  readMessages,
  readUserMessages
}
