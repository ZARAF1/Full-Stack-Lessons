const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep: function () {
      console.log('Beep Bop');
    },
  };
};
const tinCan = robotFactory('P-500', true);
tinCan.beep();
console.log(tinCan);
``