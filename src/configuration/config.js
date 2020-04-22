export const config = JSON.parse( JSON.stringify (
    process.env.NODE_ENV === 'development' ? 
    require('./settings-dev.json') :
    require('./settings-prod.json')
));