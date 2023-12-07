const randomNum1 = Math.floor(Math.random() * (100 - 1) + 1);
console.log(randomNum1);
const randomNum2 = Math.floor(Math.random() * (100 - 1) + 1);
console.log(randomNum2);

const requestData = {
  userName: `Hassan-Zaheer${randomNum1}${randomNum2}`,
  password: 'testing@Playwright05',
};

export default requestData;