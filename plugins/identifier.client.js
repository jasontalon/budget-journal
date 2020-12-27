import shortid from 'shortid'

const IDENTIFIER = '__IDENTIFIER'

const value = localStorage.getItem(IDENTIFIER) ?? ''

if (value === '') {
  localStorage.setItem(IDENTIFIER, shortid.generate())
}
