import { MemoryManager } from "../../../memory/memory-manager";
import { Register } from "../../../registers/register";
import { RegistersManager } from "../../../registers/registers-manager";
import { getByteAndMoveInstructionPointer, getWordAndMoveInstructionPointer, validateRegisterExists } from "../../utils";
import { InstructionHandler } from "../instruction-handler";

export const moveMemoryIntoRegisterInstructionHandler: InstructionHandler = (registers: RegistersManager, memory: MemoryManager) => {
    const memoryAddress = getWordAndMoveInstructionPointer(registers, memory);
    const register = getByteAndMoveInstructionPointer(registers, memory);

    validateRegisterExists(register);

    const memoryValue = memory.getWord(memoryAddress);
    registers.setRegister(register, memoryValue);
}