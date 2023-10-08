import { MemoryManager } from "../../../memory/memory-manager";
import { Register } from "../../../registers/register";
import { RegistersManager } from "../../../registers/registers-manager";
import { getWordAndMoveInstructionPointer } from "../../utils";

export const jumpIfNotEqualInstructionHandler = (registers: RegistersManager, memory: MemoryManager) => {
    const value = getWordAndMoveInstructionPointer(registers, memory);
    const address = getWordAndMoveInstructionPointer(registers, memory);

    const accumulator = registers.getRegister(Register.ACC);

    if (value === accumulator) {
        return;
    }

    registers.setRegister(Register.IP, address);
}