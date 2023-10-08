import { Cpu } from "../src/cpu/cpu";
import { Instruction } from "../src/instructions/instruction";
import { MemoryManager } from "../src/memory/memory-manager";
import { Register } from "../src/registers/register";
import { createReadlineStepper } from "../src/utilities/readline-stepper";

const memory = new MemoryManager(256 * 256);
const cpu = new Cpu(memory);

const writableMemory = new Uint8Array(memory.buffer);
let i = 0;

writableMemory[i++] = Instruction.MoveMemoryIntoRegister;
writableMemory[i++] = 0x01;
writableMemory[i++] = 0x00;
writableMemory[i++] = Register.R1;

writableMemory[i++] = Instruction.MoveLiteralIntoRegister;
writableMemory[i++] = 0x00;
writableMemory[i++] = 0x01;
writableMemory[i++] = Register.R2;

writableMemory[i++] = Instruction.AddRegisterToRegiser;
writableMemory[i++] = Register.R1;
writableMemory[i++] = Register.R2;

writableMemory[i++] = Instruction.MoveRegisterIntoMemory;
writableMemory[i++] = Register.ACC;
writableMemory[i++] = 0x01;
writableMemory[i++] = 0x00;

writableMemory[i++] = Instruction.JumpIfNotEqual;
writableMemory[i++] = 0x00;
writableMemory[i++] = 0x03;
writableMemory[i++] = 0x00;
writableMemory[i++] = 0x00;

cpu.displayRegisters();

createReadlineStepper(cpu, () => {
    memory.viewMemoryAtAddress(0x0100);
});
