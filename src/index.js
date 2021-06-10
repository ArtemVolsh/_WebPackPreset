import * as $ from 'jquery'
import Post from './models/Post'
import json from './assets/somefile.json'
import './styles/styles.css'

const post = new Post('Webpack Post Title')

$('pre').html(post.toString())

console.log('JSON', json)