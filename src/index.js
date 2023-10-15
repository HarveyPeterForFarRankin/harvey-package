import { toUpper } from './utils/transformMessage'

const returnMessage = (message) =>
    toUpper(`${message}, this was done in front of a live crowd!`)

export default returnMessage
