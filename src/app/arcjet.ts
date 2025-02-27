import arcjet, 
{ detectBot, shield, fixedWindow, tokenBucket} from "@arcjet/next";

export { detectBot , fixedWindow , shield , tokenBucket };

export default arcjet({
    key: process.env.ARCJET_KEY!,
    rules : [],
});