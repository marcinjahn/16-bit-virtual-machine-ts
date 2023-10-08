import { getInstructionHandler } from "../instructions/get-instruction-handler";
import { getByteAndMoveInstructionPointer } from "../instructions/utils";
import { MemoryManager } from "../memory/memory-manager";
import { Register, getRegisterDisplayName } from "../registers/register";
import { RegistersManager } from "../registers/registers-manager";

export class Cpu { 
    private registersManager = new RegistersManager();
    
    constructor(private memory: MemoryManager) { }

    step(): void {
       const instruction = this.fetchInstruction(); 
       this.execute(instruction);
    }

    private getRegister(register: Register) {
        return this.registersManager.getRegister(register);
    }

    private setRegister(register: Register, value: number) {
        this.registersManager.setRegister(register, value);
    }

    private fetchInstruction() {
        return getByteAndMoveInstructionPointer(this.registersManager, this.memory);
    }

    private execute(instructionCode: number): void {
        getInstructionHandler(instructionCode)(this.registersManager, this.memory);
    }

    displayRegisters() {
        for(let i = 0; i < Register.__LENGTH; i++) {
            console.log(`${getRegisterDisplayName(i)}: 0x${this.registersManager.getRegister(i).toString(16).padStart(4, '0')}`);
        }
        console.log();
    }
}

