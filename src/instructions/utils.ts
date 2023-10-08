import { MemoryManager } from "../memory/memory-manager";
import { Register } from "../registers/register";
import { RegistersManager } from "../registers/registers-manager";

export const getByteAndMoveInstructionPointer = (registersManager: RegistersManager, memory: MemoryManager): number => {
    const address = registersManager.getRegister(Register.IP);
    const byte = memory.getByte(address);
    registersManager.setRegister(Register.IP, address + 1);

    return byte;
}

export const getWordAndMoveInstructionPointer = (registersManager: RegistersManager, memory: MemoryManager): number => {
    const address = registersManager.getRegister(Register.IP);
    const word = memory.getWord(address);
    registersManager.setRegister(Register.IP, address + 2);

    return word;
}

export const validateRegisterExists = (register: number) => {
    if (register >= Register.__LENGTH) {
        throw new Error(`Register R${register} does not exist`);
    }
}