import { MemoryManager } from "../../memory/memory-manager";
import { Register } from "../../registers/register";
import { RegistersManager } from "../../registers/registers-manager";
import { InstructionHandler } from "./instruction-handler";
import { getByteAndMoveInstructionPointer, getWordAndMoveInstructionPointer, validateRegisterExists } from "../utils";

export const moveLiteralIntoRegisterInstructionHandler: InstructionHandler = (registerManager: RegistersManager, memoryManager: MemoryManager) => {
    const literalValue = getWordAndMoveInstructionPointer(registerManager, memoryManager);
    const register = getByteAndMoveInstructionPointer(registerManager, memoryManager);

    validateRegisterExists(register);
    
    registerManager.setRegister(register, literalValue);
}
