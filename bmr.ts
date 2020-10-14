type Gender = 'woman' | 'man';

interface BMR {
    bodyMass: number,
    height: number,
    age: number,
    gender: Gender
};

class Bmr {
    bodyMass: number;
    height: number;
    age: number;
    gender: Gender;
    description: string = 'BMR (z ang. basal metabolic rate), czyli wskaźnik podstawowej przemiany materii (polski skrót PPM), nazywany również tempem metabolizmu podstawowego, wskazuje najmniejsze dzienne zapotrzebowanie kaloryczne, dzięki któremu zachowamy podstawowe funkcje życiowe. Na układ nerwowy przypada 1/4 tej wartości, na wątrobę - 1/5, 1/15 na serce i nerki, a kolejne 2/5 na pozostałe organy.'

constructor(bodyMass: number, height: number, age: number, gender: Gender) {
    this.bodyMass = bodyMass;
    this.height = height;
    this.age = age;    
}

harrisBenedictMethod() {
    if(this.gender === 'man') {
        return 66 + (13.7 * this.bodyMass) + (5 * this.height) - (6.76 * this.age)
    } else {
        return 655 + (9.6 * this.bodyMass) + (1.8 * this.height) - (4.7 * this.age)
    }
    
}
}
