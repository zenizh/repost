const mentionStrategy = (screenNames) => {
  return {
    match: /(^|\s)@([0-9_a-zA-Z]+)$/,
    search: (term, callback) => {
      callback(screenNames.filter((name) => {
        return name.match(new RegExp(term, 'i'))
      }))
    },
    template: (name) => {
      return `@${name}`
    },
    replace: (name) => {
      return `$1@${name} `
    }
  }
}

const tagStrategy = (tagNames) => {
  return {
    match: /(^|\s)#(.+)$/,
    search: (term, callback) => {
      callback(tagNames.filter((name) => {
        return name.match(new RegExp(term, 'i'))
      }))
    },
    template: (name) => {
      return `#${name}`
    },
    replace: (name) => {
      return `$1#${name} `
    }
  }
}

export { mentionStrategy, tagStrategy }
