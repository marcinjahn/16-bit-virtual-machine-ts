import { Instruction } from "./instruction"
import { InstructionHandler } from "./handlers/instruction-handler";
import { moveLiteralIntoRegisterInstructionHandler } from "./handlers/mov/move-literal-into-register.instruction-handler";
import { moveRegisterIntoRegisterInstructionHandler } from "./handlers/mov/move-register-into-register.instruction-handler";
import { moveRegisterIntoMemoryInstructionHandler } from "./handlers/mov/move-register-into-memory.instruction-handler";
import { moveMemoryIntoRegisterInstructionHandler } from "./handlers/mov/move-memory-into-register.instruction-handler";
import { addRegisterToRegisterInstructionHandler } from "./handlers/add/add-register-to-register.instruction-handler";
import { jumpIfNotEqualInstructionHandler } from "./handlers/jmp/jump-in-not-equal.instruction-handler";

export const getInstructionHandler = (instruction: number): InstructionHandler => {
    switch(instruction) {
        case Instruction.MoveLiteralIntoRegister: {
            return moveLiteralIntoRegisterInstructionHandler;
        }
        case Instruction.MoveRegisterIntoRegiser: {
            return moveRegisterIntoRegisterInstructionHandler;
        }
        case Instruction.MoveRegisterIntoMemory: {
            return moveRegisterIntoMemoryInstructionHandler;
        }
        case Instruction.MoveMemoryIntoRegister: {
            return moveMemoryIntoRegisterInstructionHandler;
        }
        case Instruction.AddRegisterToRegiser: {
            return addRegisterToRegisterInstructionHandler;
        }
        case Instruction.JumpIfNotEqual: {
            return jumpIfNotEqualInstructionHandler;
        }
        default: {
            throw new Error(`Instruction ${instruction} is not recognized`)
        }
    }
}