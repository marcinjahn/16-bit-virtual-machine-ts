import { Cpu } from "../src/cpu/cpu";
import { Instruction } from "../src/instructions/instruction";
import { MemoryManager } from "../src/memory/memory-manager";
import { Register } from "../src/registers/register";
import { createReadlineStepper } from "../src/utilities/readline-stepper";

const memory = new MemoryManager(256 * 256);
const cpu = new Cpu(memory);

let i = 0;

const writableMemory = new Uint8Array(memory.buffer);

writableMemory[i++] = Instruction.MoveLiteralIntoRegister;
writableMemory[i++] = 0x00;
writableMemory[i++] = 0x01;
writableMemory[i++] = Register.R1;

writableMemory[i++] = Instruction.MoveLiteralIntoRegister;
writableMemory[i++] = 0x00;
writableMemory[i++] = 0x02;
writableMemory[i++] = Register.R2;

writableMemory[i++] = Instruction.PushRegister;
writableMemory[i++] = Register.R1;

writableMemory[i++] = Instruction.PushRegister;
writableMemory[i++] = Register.R2;

writableMemory[i++] = Instruction.PopRegister;
writableMemory[i++] = Register.R1;

writableMemory[i++] = Instruction.PopRegister;
writableMemory[i++] = Register.R2;

cpu.displayRegisters();
createReadlineStepper(cpu, () => {
    memory.viewMemoryAtAddress(memory.sizeInBytes - 8);
});

