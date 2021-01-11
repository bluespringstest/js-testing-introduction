const{generateText, checkAndGenerate} = require('../util.js');

test('should output name and age', () => {
    const text = generateText('Fred', 30);
    expect(text).toBe('Fred (30 years old)') ;
});

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Joe', 27);
    expect(text).toBe('Joe (27 years old)')
});