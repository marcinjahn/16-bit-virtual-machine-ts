import { MemoryManager } from "../../../memory/memory-manager";
import { Register } from "../../../registers/register";
import { RegistersManager } from "../../../registers/registers-manager";
import { getByteAndMoveInstructionPointer, getWordAndMoveInstructionPointer, validateRegisterExists } from "../../utils";
import { InstructionHandler } from "../instruction-handler";

export const moveRegisterIntoMemoryInstructionHandler: InstructionHandler = (registers: RegistersManager, memory: MemoryManager) => {
    const register = getByteAndMoveInstructionPointer(registers, memory);

    validateRegisterExists(register);

    const memoryAddress = getWordAndMoveInstructionPointer(registers, memory);

    const registerValue = registers.getRegister(register);
    memory.setWord(memoryAddress, registerValue);
}