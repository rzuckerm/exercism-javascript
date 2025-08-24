export class GradeSchool {
  students = {}

  /**
   * @returns {object}
   */
  roster = () => Object.keys(this.students).sort().flatMap((k) => this.students[k]);

  /**
   * @param {string} name 
   * @param {number} grade 
   * @returns {boolean}
   */
  add(name, grade) {
    if (Object.values(this.students).some((names) => names.includes(name))) { return false; }
    this.students[grade] = (this.students[grade] ?? []).concat(name).sort();
    return true;
  }

  /**
   * @param {number} g
   * @returns {string[]}
   */
  grade = (g) => [...(this.students[g] ?? [])];
}
