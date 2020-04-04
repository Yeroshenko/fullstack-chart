import tinycolor from 'tinycolor2'

const getCorrectIndex = (number) => {
  return number > 255 ? 255 : number > 0 ? number : 0 
}

export default (hash) => {
  const [r, g, b] = hash.substring(0, 3).split('').map(char => 
    getCorrectIndex(char.charCodeAt())
  )
  return { 
    color: tinycolor({ r, g, b }).toHexString(), 
    colorLighten: tinycolor({ r, g, b }).lighten(40).toHexString() 
  }
}