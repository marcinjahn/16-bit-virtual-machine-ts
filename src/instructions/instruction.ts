export enum Instruction {
    MoveLiteralIntoRegister = 0x10,
    MoveRegisterIntoRegiser = 0x11,
    MoveRegisterIntoMemory = 0x12, 
    MoveMemoryIntoRegister = 0x13,
    AddRegisterToRegiser = 0x14,
    JumpIfNotEqual = 0x15,
    PushLiteralValue = 0x17,
    PushRegister = 0x18,
    PopRegister = 0x19,
}
