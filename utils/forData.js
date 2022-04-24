export function forData(val) {
  if (val != null) {
    const dateMat = new Date(val);
    const year = dateMat.getFullYear();
    const month =
      dateMat.getMonth() + 1 < 10
        ? "0" + (dateMat.getMonth() + 1)
        : dateMat.getMonth() + 1;
    const day =
      dateMat.getDate() < 10 ? "0" + dateMat.getDate() : dateMat.getDate();
    const hh =
      dateMat.getHours() < 10 ? "0" + dateMat.getHours() : dateMat.getHours();
    const mm =
      dateMat.getMinutes() < 10
        ? "0" + dateMat.getMinutes()
        : dateMat.getMinutes();
    const ss =
      dateMat.getSeconds() < 10
        ? "0" + dateMat.getSeconds()
        : dateMat.getSeconds();
    var timeFormat = `${year}年${month}月${day}日 ${hh}:${mm}:${ss}`;
    return timeFormat;
  }
}
