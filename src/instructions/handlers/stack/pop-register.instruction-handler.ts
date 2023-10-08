import { MemoryManager } from "../../../memory/memory-manager";
import { Register } from "../../../registers/register";
import { RegistersManager } from "../../../registers/registers-manager";
import { getByteAndMoveInstructionPointer, validateRegisterExists } from "../../utils";
import { InstructionHandler } from "../instruction-handler";

export const popRegisterInstructionHandler: InstructionHandler = (registers: RegistersManager, memory: MemoryManager) => {
    let register = getByteAndMoveInstructionPointer(registers, memory);
    validateRegisterExists(register);
    
    let stackPointerAddress = registers.getRegister(Register.SP) + 2;
   
    registers.setRegister(Register.SP, stackPointerAddress);

    const value = memory.getWord(stackPointerAddress);

    registers.setRegister(register, value);
}