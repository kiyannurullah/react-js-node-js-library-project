
const TOKEN_KEY = "auth";
const PROPERTY  = "property";
const APP_LANG  = "lng";
const USER_NAME = "name"
const PROPERTY_NAME = "property_name"

export const userLogin = (token) => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY,token);

};


export const userLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_NAME);
};

export const isLogged = () => {
    return !!localStorage.getItem(TOKEN_KEY);
};

export const setPropertyId = (propertyId) => {
    localStorage.setItem(PROPERTY,propertyId);
};

export const setLocalStorage = (keyName, keyValue) => {
    localStorage.setItem(keyName,keyValue);
};

export const destroyLocalStorage = (keyName) => {
    localStorage.removeItem(keyName)
};

export function isDefined(obj) {
    return obj !== undefined && obj !== null && obj !== "null" && obj !== ""
}

export function timeToTimestamp(strDate){
    return Date.parse(strDate);
}

export function setUserName(userName){
    setLocalStorage(USER_NAME,userName)
}

export function getMinutesBetweenTwoTimestamp(startTime, endTime) {
    let difference = endTime - startTime;
    return  Math.round(difference / 60000);
}

export const isProperty = () => {
    return !!localStorage.getItem(PROPERTY);
};

export const getProperty = () => {
    return isProperty() ? localStorage.getItem(PROPERTY) : null;
};

export function getUserToken() {
    return localStorage.getItem(TOKEN_KEY)
}

export function getAppLang() {
    let lng = localStorage.getItem(APP_LANG);
    lng = (lng) ? lng : null

    if( lng !== null && lng.length > 2 )
    {
        lng = lng.substr(0,2);
    }
    return lng
}

export function getBetweenDate(startDate, endDate) {

    let dates = [],
        currentDate = startDate,
        addDays = function(days) {
            let date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        };
    while (currentDate <= endDate) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
    }
    return dates;
}

export function formattedMonth (mount){
    return mount<10 ? '0'+mount : mount
}

export function getBetweenDateGlobalTest(dates) {
    let formattedDate = [];
    dates.map( date => {
        let temp = date.getFullYear() + "-" + ( formattedMonth(date.getMonth()+1) ) + "-" +formattedMonth( date.getDate());
        formattedDate.push(temp);
    });

    return formattedDate;
}


export function fillOnUndefinedObject(data, key) {

    if(!isObject(data)){
        return null
    }

    let tmpData = [];
    for (const dataKey of Object.keys(data)) {
        if(dataKey === key){
            tmpData = data[dataKey]
            return tmpData;
        }
    }
}



const isObject = (val) =>  {
    if (val === null) { return false;}
    return ( (typeof val === 'function') || (typeof val === 'object') );
}

export function viewTypeReturn(data,selectedId) {
    let values = [];
    if(selectedId.length >0 ){
        values = data.filter(item => {
            if(selectedId.includes(item.id) ){
                return item
            }
        })
    }

    return values;
}

export function getDayHours(){
    let quarterHours = ["00", "15", "30", "45"];
    let times = [];
    for(let i = 0; i < 24; i++){
        for(let j = 0; j < 4; j++){
            let time = i + ":" + quarterHours[j];
            if(i < 10){
                time = "0" + time;
            }
            times.push(time);
        }
    }
    return times;
}

export function getYears ( startYear, endYear  ){

    let sYear = startYear;
    let eYear = endYear;
    let allYear = [];

    for(let i=sYear; i >= eYear; i--){
        allYear.push(i);
    }

    return allYear;

}

export function bedGroupCoundCreateData(roomBedGroupData) {

    let defaultData = [ [{bed_type_id: ""}] ];

    let tmpBedGroup = [];

    if( Array.isArray(roomBedGroupData) && roomBedGroupData.length > 0 )
    {
        for(let i = 0; i < roomBedGroupData.length; i++){
            let last = [];
            for(let j = 0; j < roomBedGroupData[i].length; j++){

                let count = roomBedGroupData[i][j]['count'];

                for (let k = 0; k < count; k++){
                    last.push( { bed_type_id: roomBedGroupData[i][j].bed_type_id}  )
                }
            }
            tmpBedGroup.push(last);
        }
    }else{
        tmpBedGroup = defaultData;
    }

    return tmpBedGroup
}


export function getPropertyName(){
    return localStorage.getItem(PROPERTY_NAME);
}
