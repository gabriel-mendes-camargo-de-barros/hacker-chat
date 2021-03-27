import blessed from 'blessed'

export default class ComponentsBuilder {
  constructor() {} 

  #baseComponent() {
    return {
      border: 'line',
      mouse: true,
      keys: true,
      top: 0,
      scrollboar: {
        ch: ' ',
        inverse: true
      },
      tags: true
    }
  }

  
}