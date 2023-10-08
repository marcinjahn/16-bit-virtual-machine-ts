import { MemoryManager } from "../../memory/memory-manager";
import { RegistersManager } from "../../registers/registers-manager";

export interface InstructionHandler {
    (regisersManager: RegistersManager, memoryManager: MemoryManager): void;
}