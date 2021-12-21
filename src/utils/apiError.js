
export const handleServiceError = (error) => {
let message = ''
if (error.response && error.response.data)
message = error.response.data.message || error.response.data.error || error.response.data.error
if (!message) message = 'Something wrong'
return { error: message }
}
export const instanceOfDataError = (object) => {
return 'error' in object || 'Error' in object
}