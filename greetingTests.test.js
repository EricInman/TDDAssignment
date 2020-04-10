const greeting = require('./greetingKata');

test('tests the greeting with name', () => {
    expect(greeting.greet('Bob')).toBe('Hello, Bob.');
})

test('greet handles null', () => {
    expect(greeting.greet()).toBe('Hello, my friend.');
})

test('greet handles shouting', () => {
    expect(greeting.greet('JERRY')).toBe('HELLO, JERRY!');
})

test('handles two names', () => {
    expect(greeting.greet(['Jill', 'Jane'])).toBe("Hello, Jill and Jane.");
})

test('handles arbitrary names', () => {
    expect(greeting.greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.")
})

test('handles multiple names and shouting', () => {
    expect(greeting.greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!")
})

test('handles strings with multiple names in them', () => {
    expect(greeting.greet(["Bob", "Charlie, Diane"])).toBe("Hello, Bob, Charlie, and Diane.")
})

test('handles everything and escape intentional commas', () => {
    expect(greeting.greet(["Bob", "\"Charlie, Diane\""])).toBe("Hello, Bob and Charlie, Diane.")
})