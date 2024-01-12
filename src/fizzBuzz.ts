type FizzBuzzMap = Iterable<
    Readonly<[number, string]>
>;

function fizzBuzzFunctionCreator(
    map: FizzBuzzMap
): (num: number) => string {
    return (num: number) => {
        const strs: string[] = [];
        for (const entry of map) {
            if (num % entry[0] == 0) {
                strs.push(entry[1]);
            }
        }
        return strs.length > 0 ? strs.join("") : `${num}`;
    };
}
