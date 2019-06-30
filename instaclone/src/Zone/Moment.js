import Moment from 'moment'

const today = new Date()

const date = () => {
    return Moment(today).format('dddd')
}

export default {
    date,
    
}