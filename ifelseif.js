// function company(type) {
//   if (type == "teir1") {
//     console.log("I will get a package of 10 lpa");
//   } else if (type == "teir2") {
//     console.log("I will get a package of 7 lpa");
//   } else if (type == "teir3") {
//     console.log("I will get a package of 5lpa");
//   } else {
//     console.log("no job");
//   }
// }
// company("teir2");

//  Switch case
let type = "tier2";
switch (type) {
  case "tier1":
    console.log("I will get a package of 10 lpa");
    break;
  case "tier2":
    console.log("I will get a package of 7 lpa");
    break;
  case "tier3":
    console.log("I will get a package of 5 lpa");
    break;

  default:
    console.log("no job");
    break;
}
