
export enum Register {
    IP = 0,
    ACC = 1,
    R0 = 2,
    R1 = 3,
    R2 = 4,
    R3 = 5,
    R4 = 6,
    R5 = 7,
    R6 = 8,
    R7 = 9,
    SP = 10,
    FP = 11,
    __LENGTH
}

export const getRegisterDisplayName = (register: Register) => {
    switch (register) {
        case Register.IP: {
            return "IP";
        }
        case Register.ACC: {
            return "ACC";
        }
        case Register.R0: {
            return "R0";
        }
        case Register.R1: {
            return "R1";
        }
        case Register.R2: {
            return "R2";
        }
        case Register.R3: {
            return "R3";
        }
        case Register.R4: {
            return "R4";
        }
        case Register.R5: {
            return "R5";
        }
        case Register.R6: {
            return "R6";
        }
        case Register.R7: {
            return "R7";
        }
        case Register.SP: {
            return "SP";
        }
        case Register.FP: {
            return "FP";
        }
    }
}