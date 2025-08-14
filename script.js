function cal() {
  let d1 = Number(document.getElementById("date1").value);
  let m1 = Number(document.getElementById("month1").value);
  let y1 = Number(document.getElementById("year1").value);

  let d2 = Number(document.getElementById("date2").value);
  let m2 = Number(document.getElementById("month2").value);
  let y2 = Number(document.getElementById("year2").value);

  let d3 = Number(document.getElementById("date3").value);
  let m3 = Number(document.getElementById("month3").value);
  let y3 = Number(document.getElementById("year3").value);

  let numberOfDays = Number(document.getElementById("numberOfDays").value);

  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }

  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;

  let totalDays = Math.round(d + m * 30.5 + y * 365);
  let totalMonth = Math.round(totalDays / numberOfDays);
  let totalYear = Math.floor(totalMonth / 12);
  let remaningMonth = totalMonth % 12;

  let yDocYear = Math.floor(y3 + totalYear + (m3 + remaningMonth) / 12);
  let yDocM = (m3 + remaningMonth) % 12;
  let yDocD = 10;

  document.getElementById(
    "time"
  ).innerHTML = `Your Doc Arrival Approximate Date <br> ${yDocD}/${yDocM}/${yDocYear}`;
}
