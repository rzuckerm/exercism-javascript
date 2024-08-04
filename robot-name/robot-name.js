var robotNames = [];

export class Robot {
    #name = null;

    get name() {
        if (!this.#name) {
            if (!robotNames.length) {
                for (let l1 = 65; l1 <= 90; l1++) {
                    let c1 = String.fromCharCode(l1);
                    for (let l2 = 65; l2 <= 90; l2++) {
                        let c2 = String.fromCharCode(l2);
                        for (let n = 0; n < 1000; n++) {
                            robotNames.push(c1 + c2 + n.toString().padStart(3, '0')); 
                        }
                    }
                }
            }

            let n = robotNames.length - 1;
            let i = Math.floor(Math.random() * (n + 1));
            [robotNames[i], robotNames[n]] = [robotNames[n], robotNames[i]];
            this.#name = robotNames.pop();
        }

        return this.#name;
    }

    reset = () => this.#name = null;
}

Robot.releaseNames = () => { robotNames = [] };
