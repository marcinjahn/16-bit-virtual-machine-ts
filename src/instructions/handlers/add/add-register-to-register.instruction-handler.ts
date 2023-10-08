import { MemoryManager } from "../../../memory/memory-manager";
import { Register } from "../../../registers/register";
import { RegistersManager } from "../../../registers/registers-manager";
import { getByteAndMoveInstructionPointer, validateRegisterExists } from "../../utils";
import { InstructionHandler } from "../instruction-handler";

export const addRegisterToRegisterInstructionHandler: InstructionHandler = (registers: RegistersManager, memory: MemoryManager) => {
    const register1 = getByteAndMoveInstructionPointer(registers, memory);
    validateRegisterExists(register1);

    const register2 = getByteAndMoveInstructionPointer(registers, memory);
    validateRegisterExists(register2);

    const result = registers.getRegister(register1) + registers.getRegister(register2);

    registers.setRegister(Register.ACC, result);
}
