let month;
month = parseInt(prompt (' Nhập month '));
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: alert('Tháng' + 'có 31 ngày');
        break;

    case 4:
    case 6:
    case 9:
    case 11: alert('Tháng'+'có 30 ngày');
        break;
    case 2:  alert('Thang'+'co 28 hoac 29 ngay')
        break;

}
