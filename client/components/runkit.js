const React = require('react')
const Embed = require('react-runkit')

const helloSource = `console.log('Hello, world!')`

module.exports = class HelloEmbed extends React.Component {
    render() {
        return <Embed source={ helloSource } />
    }
}