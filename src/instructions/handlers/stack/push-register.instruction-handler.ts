import { MemoryManager } from "../../../memory/memory-manager";
import { Register } from "../../../registers/register";
import { RegistersManager } from "../../../registers/registers-manager";
import { getByteAndMoveInstructionPointer, validateRegisterExists } from "../../utils";
import { InstructionHandler } from "../instruction-handler";

export const pushRegisterInstructionHandler: InstructionHandler = (registers: RegistersManager, memory: MemoryManager) => {
    const register = getByteAndMoveInstructionPointer(registers, memory);
    validateRegisterExists(register);

    const registerValue = registers.getRegister(register);

    const stackPointerAddress = registers.getRegister(Register.SP);

    memory.setWord(stackPointerAddress, registerValue);

    registers.setRegister(Register.SP, stackPointerAddress - 2);
};