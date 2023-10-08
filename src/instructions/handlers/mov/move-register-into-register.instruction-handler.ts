import { MemoryManager } from "../../../memory/memory-manager";
import { RegistersManager } from "../../../registers/registers-manager";
import { getByteAndMoveInstructionPointer, validateRegisterExists } from "../../utils";
import { InstructionHandler } from "../instruction-handler";

export const moveRegisterIntoRegisterInstructionHandler: InstructionHandler = (registersManager: RegistersManager, memory: MemoryManager) => {
    const fromRegister = getByteAndMoveInstructionPointer(registersManager, memory);
    
    validateRegisterExists(fromRegister);

    const toRegister = getByteAndMoveInstructionPointer(registersManager, memory);

    validateRegisterExists(toRegister);

    const fromRegisterValue = registersManager.getRegister(fromRegister);
    registersManager.setRegister(toRegister, fromRegisterValue);
}