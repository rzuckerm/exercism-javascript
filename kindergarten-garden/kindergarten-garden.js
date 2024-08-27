const PUPILS = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];
const PLANTS = { G: 'grass', V: 'violets', R: 'radishes', C: 'clover' };

export class Garden {
  /**
   * @param {string} diagram 
   * @param {string[]} students 
   */
  constructor(diagram, students = PUPILS) {
    this.diagram = diagram.split('\n').map((row) => row.split('').map((p) => PLANTS[p]));
    this.students = [...students].sort();
  }

  /**
   * @param {string} student
   * @returns {string[]}
   */
  plants(student) {
    let k = this.students.indexOf(student) * 2;
    return [...this.diagram[0].slice(k, k + 2), ...this.diagram[1].slice(k, k + 2)];
  }
}
