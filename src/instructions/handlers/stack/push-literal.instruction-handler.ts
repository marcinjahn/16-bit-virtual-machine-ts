import { MemoryManager } from "../../../memory/memory-manager";
import { RegistersManager } from "../../../registers/registers-manager";
import { getWordAndMoveInstructionPointer } from "../../utils";
import { InstructionHandler } from "../instruction-handler";
import { push } from "./utils";

export const pushLiteralInstructionHandler: InstructionHandler = (registers: RegistersManager, memory: MemoryManager) => {
    const literalValue = getWordAndMoveInstructionPointer(registers, memory);
    push(registers, memory, literalValue); 
}