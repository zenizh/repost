import highlight from 'highlight.js'

export default function(element) {
  element.querySelectorAll('pre code').forEach(block => {
    highlight.highlightBlock(block)
  })
}
