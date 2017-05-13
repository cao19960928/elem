function imgSrc(data){
  if(!data){
    return "";
  }
    // console.log(data);
    // 281442ec3a18ba42c024cc3e14d1998bpng
    // console.log(data.substr(32));
    // var str1 = data.substr(32);
    // console.log(data.substr(2,1));
    // var str2 = data.substr(0,1);
    // console.log(data.substr(1,2));
    // var str3 = data.substr(1,2);
    // console.log(data.substr(3,32));
    // var str4 = data.substr(3,32);
    // return "//fuss10.elemecdn.com/"  + str2 + '/' + str3 + '/' + str4 + '.' + str1;

    // var str1 = data.slice(0,1);
    // console.log(str1);
    // var str2 = data.slice(1,3);
    // console.log(str2);
    // var str3 = data.slice(3,35);
    // console.log(str3);
    // var str4 = data.slice(32,35);
    // console.log(str4);
    // return "//fuss10.elemecdn.com/" + str1 + '/' + str2 + '/' + str3 + '.' + str4;
      var filtedStr = "//fuss10.elemecdn.com/";
      filtedStr+=data.substr(0,1);
      filtedStr+="/";
      filtedStr+=data.substr(1,2);
      filtedStr+="/";
      filtedStr+=data.substr(3);
      filtedStr+=".";
      filtedStr+=data.substr(32);
      // console.log(filtedStr);
      return filtedStr;
}
function imgPre(data){
    return '//fuss10.elemecdn.com' + data
}
function distance(data){
    if(data>1000){
        return (data/1000).toFixed(2) + 'km'
    }
    else{
        return data + 'm';
    }
}
export {imgSrc,imgPre,distance}
