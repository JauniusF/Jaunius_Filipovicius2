import { multiplication } from "../Task 10/modules/math/multiplication";
import { composition as sum} from '../Task 10/modules/math/composition';
import { substraction } from "../Task 10/modules/math/subtraction";
import { division } from "../Task 10/modules/math/division";
/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
const calculator={
    a:1,
    b:2,
    sum,
    substraction,
    multiplication,
    division,
}
console.log(calculator.sum(1,6))

