function numberFromString(id)
{
    const value =    document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

function getButton(id){
    const button = document.getElementById(id);
    return button;
}
