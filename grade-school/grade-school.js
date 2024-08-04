export class GradeSchool {
  students = {}

  /**
   * @returns {object}
   */
  roster = () => structuredClone(this.students);

  /**
   * @param {string} name 
   * @param {number} grade 
   */
  add(name, grade) {
    this.students = Object.fromEntries(Object.entries(this.students).filter(([_, n]) => n != name));
    this.students[grade] = (this.students[grade] ?? []).concat(name).sort();
  }

  /**
   * @param {number} g
   * @returns {string[]}
   */
  grade = (g) => [...(this.students[g] ?? [])];
}
