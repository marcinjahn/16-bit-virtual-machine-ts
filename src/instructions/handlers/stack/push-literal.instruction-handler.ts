import { MemoryManager } from "../../../memory/memory-manager";
import { Register } from "../../../registers/register";
import { RegistersManager } from "../../../registers/registers-manager";
import { getWordAndMoveInstructionPointer } from "../../utils";
import { InstructionHandler } from "../instruction-handler";

export const pushLiteralInstructionHandler: InstructionHandler = (registers: RegistersManager, memory: MemoryManager) => {
    const literalValue = getWordAndMoveInstructionPointer(registers, memory);
    const stackPointerAddress = registers.getRegister(Register.SP);

    memory.setWord(stackPointerAddress, literalValue);
    registers.setRegister(Register.SP, stackPointerAddress - 2);
}