import ieCheck from "./ie-check";

function getFormattedTime(dateTime: string){
    let formattedTime = '';
    const dateTimeObject = new Date(dateTime);
     
    if(ieCheck){
        // const hours = dateTimeObject.getHours();
        // const minutes = dateTimeObject.getMinutes();
        formattedTime = dateTimeObject.toLocaleTimeString([],{hour12: false, hour: '2-digit', minute: '2-digit'})
    } else {
        formattedTime = dateTimeObject.toLocaleTimeString([],{timeStyle: 'short'})
    }

    return formattedTime;
}

export default getFormattedTime;