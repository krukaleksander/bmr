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

  constructor(bodyMass: number, height: number, age: number, gender: Gender) {
    this.bodyMass = bodyMass;
    this.height = height;
    this.age = age;
  }

  harrisBenedictMethod() {
    if (this.gender === "man") {
      return 66 + 13.7 * this.bodyMass + 5 * this.height - 6.76 * this.age;
    } else {
      return 655 + 9.6 * this.bodyMass + 1.8 * this.height - 4.7 * this.age;
    }
  }
  mifflinStJeorMethod() {
    const manVar: number = 5;
    const womanVar: number = -161;
    const formula = (variable: number) => {
      return (
        9.99 * this.bodyMass + 6.25 * this.height - 4.92 * this.age + variable
      );
    };

    if (this.gender === "man") {
      return formula(manVar);
    } else {
      return formula(womanVar);
    }
  }
}
