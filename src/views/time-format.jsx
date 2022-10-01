import dateFormat, { masks } from 'dateformat'

const now = new Date()

// Basic usage
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT')
