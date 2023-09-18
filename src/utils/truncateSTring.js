export const TruncateString = (str) =>{
    if (str.length < 15){
        return str
    }

    if(str.length > 15){
        return str.slice(0,15) + "..."
    }
}