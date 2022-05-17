export var num = 0;

export function ChangeNum(val) {
  num = val + 1;
  console.log(val);
  console.log("Clicked change");
}

export function GetNum() {
  return num;
}
