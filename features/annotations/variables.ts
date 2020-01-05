let apples: number = 5;


const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number} = JSON.parse(json);


function divide(a: number, b: number): number {
    return a / b;
}

const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): never => {
    throw new Error(message);
}

const forecast = {
    date: new Date(),
    weather: 'sunny',
};

const logWeather = ({ date, weather}: { date: Date; weather: string}) => {
    console.log(date, weather);
}

const fn: () => () => void = () => {
   return function() {
       return 5;
   }
}
