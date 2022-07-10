const dateConvert = (date) => {

    const dateMs = new Date(Date.parse(date));

    let dd = dateMs.getDate();
    if (dd < 10) dd = '0' + dd;
  
    let mm = dateMs.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    let yy = dateMs.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
}

export default dateConvert;