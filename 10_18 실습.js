// 1. Funtion declaration
function printHello() {
    console.log('Hello');
    console.log('Good morning')
}
printHello()


// 5. Local scope
let globaMessage = 'global';
function printMessage()  {
    let message = 'hello';
    console.log(message);
    console.log(globaMessage);
    function printAnother()  {
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();