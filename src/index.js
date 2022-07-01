/**
 * @author OWLjz18 <owl.jz18@gmail.com>
 * @gratitude GOD.
 * @license MIT.
 * @module import-css-jz
*/

/**
 * Creates a 'link' element with the path specified in the first parameter and connects it to the element specified in the second parameter (which defaults to document.body).
 * @param {String} cssPath - Relative path of the css file to connect.
 * @param {HTMLElement} [elementToConnect=document.head] - Element to connect CSS file.
*/
export default function (cssPath, elementToConnect = document.head) {
  
  try {
    
    throw new Error('import-css-jz: Hey! You shouldn\'t see this error :(');
    
  } catch (err) {
    
    const path = err.stack.split('\n').find(line => line.trim().startsWith('at htt'));
    const normalizedPath = path.trim().replace('at', '').replace(/(\w+\.)+\w+(:\d)+$/, '');
    
    const url = new URL(cssPath, normalizedPath);
    
    const styleSheet = document.createElement('link');
    styleSheet.rel = 'stylesheet';
    styleSheet.href = url.href;
    
    const styleSheetsOfTheElementToConnect = Array.from(elementToConnect.querySelectorAll('link'));
    const routesOfTheStyleSheetsOfTheElementToConnect = styleSheetsOfTheElementToConnect.map(stylesheet => stylesheet.href);
    
    if (!routesOfTheStyleSheetsOfTheElementToConnect.includes(styleSheet.href)) {
      
      elementToConnect.append(styleSheet);
      
    }
    
  }
  
}
