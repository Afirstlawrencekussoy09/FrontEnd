// Buatlah object dengan properti:
// 1. firstName,
// 2. weight
// 3. height
// 4. function calculateBMI (gunakan tabel diberikut untuk menampilkan hasil)
// 5. BMI : properti baru hasil perhitungan function calculateBMI


let profil = {
    firstName: "Afirst",
    weight: 60, 
    height: 1.60, 
  
    calculatorBMI: function () {
      let rumus = this.weight / (this.height * this.height);
      this.BMI = rumus.toFixed(2);
    },
  
    KategoriBMI: function () {
      if (this.BMI <= 16.0) {
        return "Severly Underweight";
      } else if (this.BMI >= 16.0 && this.BMI <= 18.4) {
        return "Underweight";
      } else if (this.BMI >= 18.5 && this.BMI <= 24.9) {
        return "Normal";
      } else if (this.BMI >= 25 && this.BMI <= 29.9) {
        return "Overweight";
      } else if (this.BMI >= 30.0 && this.BMI <= 34.9) {
        return "Moderately Obese";
      } else if (this.BMI >= 35.0 && this.BMI <= 39.9) {
        return "Severely Obese";
      } else if (this.BMI >= 40.0) {
        return "Morbidly Obese";
      } else {
        return "Not Found";
      }
    },
  };
  
  profil.calculatorBMI();
  
  console.log("Name: " + profil.firstName);
  console.log("Weight: " + profil.weight + " kg");
  console.log("Height: " + profil.height + " m");
  console.log("Calculated BMI: " + profil.BMI);
  console.log("KategoriBMI: " + profil.KategoriBMI());