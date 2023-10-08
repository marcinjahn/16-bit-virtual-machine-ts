import { MemoryManager } from "../../../memory/memory-manager";
import { Register } from "../../../registers/register";
import { RegistersManager } from "../../../registers/registers-manager";

export const push = (registers: RegistersManager, memory: MemoryManager, value: number) => {
    const stackPointerAddress = registers.getRegister(Register.SP);

    memory.setWord(stackPointerAddress, value);
    registers.setRegister(Register.SP, stackPointerAddress - 2);
}

export const pop = (registers: RegistersManager, memory: MemoryManager): number => {
    const stackPointerAddress = registers.getRegister(Register.SP) + 2;
    registers.setRegister(Register.SP, stackPointerAddress); 
    
    return memory.getWord(stackPointerAddress);
}