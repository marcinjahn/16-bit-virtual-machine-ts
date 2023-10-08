import { Instruction } from "./instruction"
import { InstructionHandler } from "./handlers/instruction-handler";
import { moveLiteralIntoRegisterInstructionHandler } from "./handlers/mov/move-literal-into-register.instruction-handler";
import { moveRegisterIntoRegisterInstructionHandler } from "./handlers/mov/move-register-into-register.instruction-handler";
import { moveRegisterIntoMemoryInstructionHandler } from "./handlers/mov/move-register-into-memory.instruction-handler";
import { moveMemoryIntoRegisterInstructionHandler } from "./handlers/mov/move-memory-into-register.instruction-handler";
import { addRegisterToRegisterInstructionHandler } from "./handlers/add/add-register-to-register.instruction-handler";
import { jumpIfNotEqualInstructionHandler } from "./handlers/jmp/jump-in-not-equal.instruction-handler";
import { pushLiteralInstructionHandler } from "./handlers/stack/push-literal.instruction-handler";
import { pushRegisterInstructionHandler } from "./handlers/stack/push-register.instruction-handler";
import { popRegisterInstructionHandler } from "./handlers/stack/pop-register.instruction-handler";

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
        case Instruction.PushLiteralValue: {
            return pushLiteralInstructionHandler;
        }
        case Instruction.PushRegister: {
            return pushRegisterInstructionHandler;
        }
        case Instruction.PopRegister: {
            return popRegisterInstructionHandler;
        }
        default: {
            throw new Error(`Instruction ${instruction} is not recognized`)
        }
    }
}