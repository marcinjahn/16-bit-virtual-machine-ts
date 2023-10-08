import { Instruction } from "./instruction"
import { InstructionHandler } from "./handlers/instruction-handler";
import { moveLiteralIntoRegisterInstructionHandler } from "./handlers/move-literal-into-register.instruction-handler";
import { moveRegisterIntoRegisterInstructionHandler } from "./handlers/move-register-into-register.instruction-handler";
import { moveRegisterIntoMemoryInstructionHandler } from "./handlers/move-register-into-memory.instruction-handler";
import { moveMemoryIntoRegisterInstructionHandler } from "./handlers/move-memory-into-register.instruction-handler";
import { addRegisterToRegisterInstructionHandler } from "./handlers/add-register-to-register.instruction-handler";

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
        default: {
            throw new Error(`Instruction ${instruction} is not recognized`)
        }
    }
}