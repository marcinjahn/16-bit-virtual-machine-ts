import { MemoryManager } from "../../../memory/memory-manager";
import { RegistersManager } from "../../../registers/registers-manager";
import { getByteAndMoveInstructionPointer, validateRegisterExists } from "../../utils";
import { InstructionHandler } from "../instruction-handler";
import { push } from "./utils";

export const pushRegisterInstructionHandler: InstructionHandler = (registers: RegistersManager, memory: MemoryManager) => {
    const register = getByteAndMoveInstructionPointer(registers, memory);
    validateRegisterExists(register);

    const registerValue = registers.getRegister(register);
    push(registers, memory, registerValue);
};