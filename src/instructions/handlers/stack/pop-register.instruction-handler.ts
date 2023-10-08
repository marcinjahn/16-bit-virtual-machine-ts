import { MemoryManager } from "../../../memory/memory-manager";
import { RegistersManager } from "../../../registers/registers-manager";
import { getByteAndMoveInstructionPointer, validateRegisterExists } from "../../utils";
import { InstructionHandler } from "../instruction-handler";
import { pop } from "./utils";

export const popRegisterInstructionHandler: InstructionHandler = (registers: RegistersManager, memory: MemoryManager) => {
    let register = getByteAndMoveInstructionPointer(registers, memory);
    validateRegisterExists(register);
    
    const value = pop(registers, memory);
    registers.setRegister(register, value);
}