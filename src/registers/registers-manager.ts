import { MemoryManager } from "../memory/memory-manager";
import { Register } from "./register";

export class RegistersManager {
    private memory: MemoryManager = new MemoryManager(Register.__LENGTH * 2);

    getRegister(register: Register): number {
        const offset = this.getByteOffset(register);

        return this.memory.getWord(offset);
    }

    setRegister(register: Register, value: number): void {
        const offset = this.getByteOffset(register);
        this.memory.setWord(offset, value);
    }

    private getByteOffset(register: Register): number {
        return register * 2;
    }
}