import readline from 'readline';
import { Cpu } from '../cpu/cpu';

export const createReadlineStepper = (cpu: Cpu, afterStep: (() => void) | undefined = undefined) => {
    const int = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    int.on('line', () => {
        cpu.step();
        cpu.displayRegisters();
        if (afterStep) {
            afterStep();
        }
    });
}