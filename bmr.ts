type Gender = "woman" | "man";

interface BMR {
  bodyMass: number;
  height: number;
  age: number;
  gender: Gender;
}

class Bmr {
  bodyMass: number;
  height: number;
  age: number;
  gender: Gender;
  harrisBenedictScore: number;
  mifflinStJeorScore: number;

  constructor(bodyMass: number, height: number, age: number, gender: Gender) {
    this.bodyMass = bodyMass;
    this.height = height;
    this.age = age;
    this.init();
  }

  harrisBenedictMethod() {
    if (this.gender === "man") {
      this.harrisBenedictScore = Math.round(
        66 + 13.7 * this.bodyMass + 5 * this.height - 6.76 * this.age
      );
    } else {
      this.harrisBenedictScore = Math.round(
        655 + 9.6 * this.bodyMass + 1.8 * this.height - 4.7 * this.age
      );
    }
  }
  mifflinStJeorMethod() {
    const manVar: number = 5;
    const womanVar: number = -161;
    const formula = (variable: number) => {
      return Math.round(
        9.99 * this.bodyMass + 6.25 * this.height - 4.92 * this.age + variable
      );
    };

    if (this.gender === "man") {
      this.mifflinStJeorScore = formula(manVar);
    } else {
      this.mifflinStJeorScore = formula(womanVar);
    }
  }
  init() {
    this.mifflinStJeorMethod();
    this.harrisBenedictMethod();
    console.log(`Harrisa-Benedict score: ${this.harrisBenedictScore}`);
    console.log(`Mifflin-St Jeor score: ${this.mifflinStJeorScore}`);
  }
}

const score: BMR = new Bmr(105, 176, 30, "man");
