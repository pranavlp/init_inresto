import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {
  
  private logData = true;
  private logWarn = true;
  private logErr = true;  

  log(msg: any)   {
    if(this.logData == true)
      console.log( 'inresto_log  '+  JSON.stringify(msg) + '     ' + this.getFormattedDateTime());
   }
  error(msg: any) { 
    if(this.logWarn == true)
      console.error('inresto_warn  ' + JSON.stringify(msg)+ '     ' + this.getFormattedDateTime());
  }
  warn(msg: any)  { 
    if(this.logErr == true)
      console.warn('inresto_err  ' + JSON.stringify(msg)+ '     ' + this.getFormattedDateTime());
  }
  
   getFormattedDateTime() {
    var date = new Date();
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
    return str;
  }

}